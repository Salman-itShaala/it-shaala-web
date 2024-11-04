"use client";
import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

type FloatingNavProps = {
  navItems?: {
    name: string;
    link: string;
    icon?: JSX.Element;
    button?: boolean;
  }[];
  className?: string;
};

export const FloatingNav: React.FC<FloatingNavProps> = ({
  navItems = [
    { name: "Courses", link: "/courses" },
    { name: "Placements", link: "/placements" },
    { name: "Gallery", link: "/gallery" },
    { name: "Open Jobs", link: "/open-jobs" },
    { name: "Contact", link: "/contact" },
    { name: "Book Demo", link: "/book-a-demo", button: true },
  ],
  className,
}) => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (
      typeof current === "number" &&
      scrollYProgress.getPrevious() !== undefined
    ) {
      const direction = current - scrollYProgress.getPrevious()!;
      setVisible(true);
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 1, y: -50 }}
        animate={{ y: visible ? 0 : -50, opacity: visible ? 1 : 0 }}
        transition={{ duration: 0.2 }}
        className={cn(
          "fixed w-full top-4 inset-x-0 sm:px-20 z-[5000]",
          className
        )}
      >
        <div className="flex border border-transparent dark:border-white/[0.2] rounded-full dark:bg-neutral-950 bg-white shadow-lg px-8 py-2 items-center justify-between">
          <a href="/" aria-label="Home">
            <Image
              src="https://itshaala.com/wp-content/uploads/2024/06/512x512-logo-size-tagline-05-05-e1724735912757.png"
              height={100}
              width={198}
              alt="It Shaala logo"
            />
          </a>

          {/* Mobile Hamburger Menu Toggle */}
          <button
            className="block md:hidden text-black dark:text-white focus:outline-none"
            aria-label="Toggle menu"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} size="lg" />
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex list-none gap-4 dark:text-white">
              {navItems.map((item, index) => (
                <li className="min-w-max" key={index}>
                  <a
                    href={item.link}
                    className={cn(
                      "hover:text-blue-600 min-w-max",
                      item.button
                        ? "bg-blue-800 px-4 py-2 rounded-2xl hover:bg-blue-600 text-white hover:text-white"
                        : ""
                    )}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 top-[76px] bg-black h-[100vh] bg-opacity-65 z-[400]"
              onClick={() => setMenuOpen(false)}
            >
              <motion.nav
                initial={{ y: -20 }}
                animate={{ y: 0 }}
                className="p-8 bg-white dark:bg-neutral-950 rounded-lg shadow-md m-4"
                onClick={(e) => e.stopPropagation()}
              >
                <ul className="flex flex-col gap-4">
                  {navItems.map((item, index) => (
                    <li key={index} className="text-center">
                      <a
                        href={item.link}
                        className={cn(
                          "block text-lg hover:text-blue-600",
                          item.button
                            ? "bg-blue-800 px-4 py-2 rounded-2xl hover:bg-blue-600 text-white"
                            : "dark:text-white text-black"
                        )}
                        onClick={() => setMenuOpen(false)}
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.nav>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </AnimatePresence>
  );
};
