"use client";
import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems?: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();

  const [visible, setVisible] = useState(true);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === "number") {
      let direction = current! - scrollYProgress.getPrevious()!;

      if (direction < 0) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -50,
        }}
        animate={{
          y: visible ? 0 : -50,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "fixed w-full top-4 inset-x-0 sm:px-20 z-[5000]",
          className
        )}
      >
        <div className="flex border border-transparent dark:border-white/[0.2] rounded-full dark:bg-black bg-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] px-8 py-2  items-center justify-between space-x-4">
          <a href="/">
            <Image
              src="https://itshaala.com/wp-content/uploads/2024/06/512x512-logo-size-tagline-05-05-e1724735912757.png"
              height={100}
              width={198}
              alt="It Shaala logo"
            ></Image>
          </a>

          <div>
            <nav className="dark:text-white">
              <ul className="flex list-none gap-4">
                <li>
                  <a href="/courses" className="hover:text-blue-600">
                    Courses
                  </a>
                </li>
                <li>
                  <a href="/placements" className="hover:text-blue-600">
                    Placements
                  </a>
                </li>
                <li>
                  <a href="/gallery" className="hover:text-blue-600">
                    Gallery
                  </a>
                </li>
                <li>
                  <a href="/open-jobs" className="hover:text-blue-600">
                    Open Jobs
                  </a>
                </li>
                <li>
                  <a href="/contact" className="hover:text-blue-600">
                    Contact
                  </a>
                </li>
                <li>
                  <a
                    href="/book-a-demo"
                    className="bg-blue-800 px-4 py-2 rounded-2xl hover:bg-blue-600 text-white"
                  >
                    Book Demo
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
