import React from "react";
import { BentoGrid, BentoGridItem } from "../ui/bento-grid";
import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";

const WhyStudentsLoveItShaala = () => {
  return (
    <div className="w-full dark:bg-black bg-white relative flex flex-col gap-8 py-10 sm:px-20">
      <div className="flex flex-col gap-2 z-10">
        <p className="text-blue-600 font-black ">
          Why Students love <span className="">IT Shaala</span>
        </p>
        <p className="text-2xl font-black dark:text-slate-50 text-slate-950">
          Beacuase we have designed flexible program for you.
        </p>
      </div>
      <BentoGrid className="w-full mx-auto">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={item.header}
            icon={item.icon}
            className={i === 3 || i === 6 ? "md:col-span-2" : ""}
          />
        ))}
      </BentoGrid>
    </div>
  );
};

export default WhyStudentsLoveItShaala;

const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
);

const items = [
  {
    title: "Missed a class?",
    description: "Watch the recording later with LMS app on android, IOS.",
    header: <Skeleton />,
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Jobs & class timings clash?",
    description:
      "Decide your ideal class timing together with your classmates.",
    header: <Skeleton />,
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Want to revise?",
    description:
      "Access assignments/notes and recordings upto 12 months post course completion.",
    header: <Skeleton />,
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Work / family needs time?",
    description:
      "Pause your course and restart a month later with the next batch!.",
    header: <Skeleton />,
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Job Placement assistance",
    description:
      "Students can enjoy the class recordings for revision purpose.",
    header: <Skeleton />,
    icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Have doubts?",
    description:
      "Get them resolved in the classroom or over text / video by our expert teaching assistants!.",
    header: <Skeleton />,
    icon: <IconBoxAlignTopLeft className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Download the android / ios app.",
    description: "Get the app and study wherever you want.",
    header: <Skeleton />,
    icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
  },
];
