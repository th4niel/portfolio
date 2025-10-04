"use client";

import { ProjectCard } from "./projectCard/projectCard";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { useI18n } from "@/lib/i18n-context";

export default function Projects() {
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
          title: t('projects.erprealtime.title'),
          tech: 'Next.js, React, Tailwind, PostgreSQL, TypeScript',
          description: t('projects.erprealtime.description'),
          video: 'https://res.cloudinary.com/dknpihuwb/video/upload/v1759589441/Screen_Recording_2025-10-04_224841_hlzvyp.mp4',
          link: 'https://pos-erp-realtime.vercel.app/login',
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
      ],
    },
  };

  return (
    <section className="w-full px-6 sm:px-16 py-24 flex flex-col items-center justify-center">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="text-4xl sm:text-5xl font-extrabold text-center mb-16 drop-shadow-md"
      >
        <span className="bg-gradient-to-r from-emerald-500 via-sky-500 to-purple-500 bg-clip-text text-transparent">
          {t('home.recentProjects')}
        </span>
      </motion.h2>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8, ease: 'easeOut' }}
        className="flex flex-wrap gap-8 justify-center mb-20 w-full"
      >
        {projectsData.fullstack.available.map((project, index) => (
          <ProjectCard key={project.title} {...project} i={index} />
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        <a
          href="/projects"
          className="inline-flex items-center gap-2 text-white bg-gradient-to-r from-emerald-500 to-sky-500 hover:from-purple-300 hover:to-rose-400 px-7 py-4 rounded-full text-lg font-semibold transition-all shadow-lg hover:shadow-purple-500/50"
        >
          {t('home.viewMoreProjects')} <ExternalLink size={20} />
        </a>
      </motion.div>
    </section>
  );
}