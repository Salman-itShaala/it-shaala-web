import Image from "next/image";
import { FlipWords } from "./components/ui/flip-words";
import { Highlight } from "./components/ui/hero-highlight";
import { InfiniteMovingCards } from "./components/ui/infinite-moving-cards";
import HeroSection from "./components/sections/hero";
import WhyItShaala from "./components/sections/why-it-shaala";
import CompaniesMovingCards from "./components/companies-infinite-moving";


export default function Home() {
  return (
    <>
      <HeroSection />
      <WhyItShaala />
      <CompaniesMovingCards />
    </>
  );
}
