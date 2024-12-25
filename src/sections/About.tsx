"use client";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import StarIcon from "@/assets/icons/star.svg"
import bookImage from "@/assets/images/61sq7bHmmaL._AC_UF1000_1000_QL80_-removebg-preview.png";
import Image from "next/image";
import JavaSriptIcon from "@/assets/icons/square-js.svg";
import HTMLIcon from "@/assets/icons/html5.svg";
import CssIcon from "@/assets/icons/css3.svg";
import ReactIcon from "@/assets/icons/react.svg";
import ChromeIcon from "@/assets/icons/chrome.svg";
import GithubIcon from "@/assets/icons/github.svg";
import { TechIcon } from "@/components/TechIcon";
import mapImage from "@/assets/images/Frame11.png"
import smileMemoji from "@/assets/images/memoji-smile.png"
import CardHeader from "@/components/CardHeader";
import ToolboxItems from "@/components/ToolboxItems";
import { motion } from "framer-motion";
import { useRef } from "react";

const toolboxItems = [
  {
    title: 'JavaScript',
    iconType: JavaSriptIcon,
  },
  {
    title: 'HTML5',
    iconType: HTMLIcon,
  },
  {
    title: 'CSS3',
    iconType: CssIcon,
  },
  {
    title: 'React',
    iconType: ReactIcon,
  },
  {
    title: 'Chrome',
    iconType: ChromeIcon,
  },
  {
    title: 'Github',
    iconType: GithubIcon,
  },
];

const hobbies = [
  {
    title: "Painting",
    emoji: "🎨",
    left: "5%", 
    top: "5%",  
  },
  {
    title: "Photography",
    emoji: "📸",
    left: "50%",
    top: "5%",
  },
  {
    title: "Gaming",
    emoji: "🎮",
    left: "5%",
    top: "35%",
  },
  {
    title: "Hiking",
    emoji: "🥾",
    left: "35%",
    top: "40%",
  },
  {
    title: "Music",
    emoji: "🎧",
    left: "70%",
    top: "45%",
  },
  {
    title: "Martial Arts",
    emoji: "🤼",
    left: "5%",
    top: "20%",
  },
  {
    title: "Reading",
    emoji: "📚",
    left: "55%",
    top: "25%",
  },
]

export const AboutSection = () => {
  const contrainRef = useRef(null);
  return (
  <div id="about" className="py-20 lg:py-28">
    <div className="container">
      <SectionHeader eyebrow="About Me" title="A Glimpse Into My World" description="Learn moreabout who I am, what I do, and what inspires me."></SectionHeader>
      <div className="mt-20 flex flex-col gap-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
        <Card className="h-[320px] md:col-span-2 lg:col-span-1">
          <CardHeader title="My Reads" description="Explore the books shaping my perspectives."/>
          <div className="w-40 mx-auto mt-2 md:mt-0">
          <Image src={bookImage} alt="Book Cover"/>
          </div>
        </Card>
        <Card className="h-[320px] md:col-span-3 lg:col-span-2">
        <CardHeader title="My Toolbox" description="Explore the techbologies and tools I use to craft exceptional digital experiences" className="px-6 pt-6"/>
          <ToolboxItems items={toolboxItems} className="" itemsWrapperClassName="animate-move-left [animation-duration:30s]" />
          <ToolboxItems items={toolboxItems} className="mt-6" itemsWrapperClassName="animate-move-right [animation-duration:15s]" />
        </Card>
        </div>
        <div className="grid gird-cols-1 md:grid-cols-5 lg:grid-cols-3 gap-8">
        <Card className="h-[320px] p-0 md:col-span-3 lg:col-span-2">
            <CardHeader
              title="Beyond the Code"
              description="Explore my interests and hobbies beyond the digital realm"
              className=""
            />
            <div className="relative flex-1" ref={contrainRef} style={{ height: "320px" }}>
              {hobbies.map((hobby) => (
               <motion.div
                key={hobby.title}
                  className="inline-flex items-center gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 absolute"
                  style={{
                  left: hobby.left,
                  top: hobby.top,
                  }}
                  drag
                  dragConstraints={contrainRef}
                  >
                  <span className="font-medium text-gray-950">{hobby.title}</span>
                  <span>{hobby.emoji}</span>
                </motion.div>
              ))}
            </div>
          </Card>
        <Card className="h-[320px] p-0 relative md:col-span-2 lg:col-span-1">
            <Image src={mapImage} alt="map" className="h-full w-full object-cover object-left-top"></Image>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 rounded-full after:content-[''] after:absolute after:inset-0 after:outline after:outline-2 after:-outline-offset-2 after:rounded-full after:outline-gray-950/30">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-20 animate-ping [animation-duration:2s]"></div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-10"></div>
              <Image src={smileMemoji} alt="map" className="size-20"></Image>
            </div>
        </Card>
        </div>
      </div>
  </div>
  </div>
  );
};
