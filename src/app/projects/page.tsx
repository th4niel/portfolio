"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from "@/components/navbar/page";
import { useState } from "react";
import ProjectDrawer from "@/components/projectDrawer/projectDrawer";
import { useI18n } from "@/lib/i18n-context";

type Project = {
  title: string;
  tech: string;
  description: string;
  video?: string;
  image?: string;
  link?: string;
  i?: number;
  onClick?: () => void;
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6 },
  }),
};

const SectionTitle = ({ title }: { title: string }) => (
  <motion.h2
    className="text-3xl sm:text-4xl py-15 font-bold mb-8 text-center text-gray-800 dark:text-white"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={fadeUp}
    custom={0}
  >
    {title}
  </motion.h2>
);

const ProjectCard = ({
  title,
  tech,
  description,
  video,
  image,
  onClick,
  i,
}: Project) => {
  const { t } = useI18n();
  
  return (
    <motion.div
      className="w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33%-1.5rem)]"
      custom={i}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      onClick={onClick}
    >
      <Card
        className="rounded-3xl overflow-hidden bg-white/20 dark:bg-zinc-900/30 backdrop-blur-xl shadow-md border border-zinc-200 dark:border-zinc-800 hover:shadow-2xl hover:scale-[1.03] transition-all duration-500 ease-in-out cursor-pointer h-full flex flex-col group"
      >
        {/* Media Section */}
        <div className="relative w-full h-52 overflow-hidden">
          {video ? (
            <video
              src={video}
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
              autoPlay
              muted
              loop
              playsInline
            />
          ) : image ? (
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
            />
          ) : null}

          {/* Subtle gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>

        {/* Card Content */}
        <CardContent className="flex flex-col flex-grow p-5">
          
          {/* Title */}
          <h3 className="text-xl sm:text-2xl font-bold mb-3 text-zinc-800 dark:text-zinc-100 transition-colors">
            {title}
          </h3>

          {/* Tech Stack Badges */}
          <div className="flex flex-wrap gap-2 mb-4">
            {tech.split(',').map((t) => (
              <span
                key={t.trim()}
                className="bg-purple-200 text-purple-800 dark:bg-zinc-700 dark:text-purple-300 text-xs sm:text-sm font-medium px-3 py-1 rounded-full"
              >
                {t.trim()}
              </span>
            ))}
          </div>

          {/* Description */}
          <p className="text-sm sm:text-base text-zinc-700 dark:text-zinc-300 mb-4 line-clamp-3 leading-relaxed">
            {description}
          </p>

          {/* View Details CTA */}
          <span className="mt-auto inline-flex items-center gap-1 text-purple-600 dark:text-purple-400 text-sm sm:text-base font-medium hover:underline group-hover:translate-x-1 transition-transform duration-300">
            {t('projects.viewDetails')} →
          </span>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { t } = useI18n();

  const projectsData = {
    fullstack: {
      available: [
        {
          title: t('projects.crud.title'),
          tech: 'PostgreSQL, Express, React, Node.js, Tailwind',
          description: t('projects.crud.description'),
          video: 'https://res.cloudinary.com/dknpihuwb/video/upload/v1751546952/Screen_Recording_2025-07-03_202706_euweub.mp4',
          link: 'https://product-store-y5xa.onrender.com/',
        },
        {
          title: t('projects.ppiTainan.title'),
          tech: 'HTML, CSS, Javascript',
          description: t('projects.ppiTainan.description'),
          video: 'https://res.cloudinary.com/dknpihuwb/video/upload/v1751547098/Screen_Recording_2025-07-03_205112_hjqtgg.mp4',
          link: 'https://www.ppitainan.org/',
        },
        {
          title: t('projects.ppiStore.title'),
          tech: 'HTML, CSS, Javascript',
          description: t('projects.ppiStore.description'),
          video: 'https://res.cloudinary.com/dknpihuwb/video/upload/v1751547185/Screen_Recording_2025-07-03_205211_y5vg91.mp4',
          link: 'https://www.ppitainan.com/',
        },
        {
          title: t('projects.weatherApp.title'),
          tech: 'Flutter',
          description: t('projects.weatherApp.description'),
          video: 'https://res.cloudinary.com/dknpihuwb/video/upload/v1751550704/Screen_Recording_2025-07-03_214828_jyuxpy.mp4',
          link: 'https://github.com/ThaN1eL/WeatherAPP?tab=readme-ov-file',
        },
      ],
    },
  };

  return (
    <main className="min-h-screen w-full py-16 px-6 sm:px-12 lg:px-24 bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 dark:from-zinc-900 dark:via-zinc-800 dark:to-zinc-900 bg-grid-dark">
      
      {/* Navbar */}
      <Navbar />

      {/* My Projects Section */}
      <section className="mb-24">
        <SectionTitle title="" />

        <h3 className="text-2xl font-bold mb-8 text-center text-blue-400 dark:text-emerald-400">
          {t('projects.title')}
        </h3>
        <div className="flex flex-wrap gap-6 justify-center">
          {projectsData.fullstack.available.map((p, i) => (
            <ProjectCard
              key={p.title}
              {...p}
              i={i}
              onClick={() => {
                setSelectedProject(p);
                setDrawerOpen(true);
              }}
            />
          ))}
        </div>
      </section>

      {/* Drawer for Project Details */}
      <ProjectDrawer
        open={drawerOpen}
        onOpenChange={(open) => {
          setDrawerOpen(open);
          if (!open) setSelectedProject(null);
        }}
        project={selectedProject}
      />
    </main>
  );
}