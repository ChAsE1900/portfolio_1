import darkSaasLandingPage from "@/assets/images/Frame9.png";
import lightSaasLandingPage from "@/assets/images/Frame8.png"
import aiStartupLandingPage from "@/assets/images/Frame10.png";
import Image from "next/image";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import ArrowupRightIcon from "@/assets/icons/arrow-up-right.svg";
import grainImage from "@/assets/images/grain.jpg"
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";


const portfolioProjects = [
  {
    company: "Customers Site",
    year: "2022",
    title: "Companys main website",
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 35%" },
    ],
    link: "",
    image: "",
  },
  {
    company: "Customers Site",
    year: "2023",
    title: "E-commerce Store",
    results: [
      { title: "Boosted sales by 20%" },
      { title: "Expanded customer reach by 35%" },
      { title: "Increased brand awareness by 15%" },
    ],
    link: "",
    image: "",
  },
  {
    company: "Studio M / ryze, Mateusz,chase",
    year: "2024",
    title: "My Portfolio",
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 35%" },
    ],
    link: "",
    image: "",
  },
];

export const ProjectsSection = () => {
  return (
      <section className="pb-16 lg:py-24">
        <div id="project" className="container">
          <SectionHeader eyebrow="Real-world Results" title="Featured Projects" description="See how I transformd concepts to engaging digital experiences."></SectionHeader>
          <div className="flex flex-col mt-10 md:mt-20 gap-20">
            {portfolioProjects.map((project, projectIndex) => (
                <Card
                key={project.title}
                className="px-8 pt-8 md:pt-12 md:px-10 lg:pt-16 lg:px-20 after:pointer-events-none sticky top-16"
                style={{
                  top: `calc(64px + ${projectIndex * 40}px)`,
                }}
                >
                <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                  <div className="lg:pb-16">
                  <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
                    <span>{project.company}</span>
                    <span>&bull;</span>
                    <span>{project.year}</span>
                  </div>
                <h3 className="font-serif text-2xl mt-2 md:text-4xl md:mt-5">{project.title}</h3>
                <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                  {project.results.map((result) => (
                    <li className="flex gap-2 text-sm md:text-base text-white/50">
                      <CheckCircleIcon className="size-5 md:size-6"/>
                      <span>{result.title}</span>
                    </li>
                  ))}
                </ul>
                <a href={project.link}>
                  <button className="bg-white text-gray-950 h-12 w-full md:w-auto px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8"><span>Link Soon</span> <ArrowupRightIcon className="size-4" /></button>
                </a>
                </div>
                <div className="relative">
                </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
  );
};
