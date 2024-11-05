import Image from "next/image";
import { FlipWords } from "./components/ui/flip-words";
import { Highlight } from "./components/ui/hero-highlight";
import { InfiniteMovingCards } from "./components/ui/infinite-moving-cards";
import HeroSection from "./components/sections/hero";
import WhyItShaala from "./components/sections/why-it-shaala";
import CompaniesMovingCards from "./components/companies-infinite-moving";
import Courses from "./components/sections/courses";
import Testimonials from "./components/sections/testimonials";
import WhyStudentsLoveItShaala from "./components/sections/why-students-love";
import FAQ from "./components/sections/faq";
import RequestCallBack from "./components/request-call-back";

export default function Home() {
  return (
    <>
      <HeroSection />
      <WhyItShaala />
      <CompaniesMovingCards />
      <Courses />
      <Testimonials />
      <RequestCallBack />
      <WhyStudentsLoveItShaala />
      <FAQ />
    </>
  );
}

/*

<!-- FAQ -->
<!-- End FAQ -->
*/
