'use client';
import { motion, Variants } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { useI18n } from '@/lib/i18n-context';

type Project = {
  title: string;
  tech: string;
  description: string;
  video?: string;
  link?: string;
  i: number;
};

const fadeUp: Variants = {
  hidden: { 
    opacity: 0, 
    y: 40 
  },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { 
      delay: i * 0.2, 
      duration: 0.6, 
      ease: [0.25, 0.46, 0.45, 0.94] as const
    },
  }),
};

export const ProjectCard = ({
  title,
  tech,
  description,
  video,
  link,
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
    >
      <div className="rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800 shadow-xl transition-transform duration-300 ease-in-out group bg-white dark:bg-zinc-900 hover:scale-[1.02] hover:shadow-purple-500/30 cursor-pointer">
        {/* Video Section */}
        <div className="relative w-full h-48 overflow-hidden">
          <video
            src={video}
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          {/* Overlay Content on Hover */}
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 px-4">
            <h3 className="text-xl text-white font-bold mb-2">{title}</h3>
            <p className="text-sm text-zinc-200">{description}</p>
          </div>
        </div>
        {/* Text Content */}
        <div className="p-4">
          {/* Tech badges */}
          <div className="flex flex-wrap gap-2 mb-4">
            {tech.split(',').map((t) => (
              <span
                key={t.trim()}
                className="bg-purple-100 text-emerald-800 dark:bg-emerald-400 dark:text-sky-800 text-xs font-medium px-2.5 py-1 rounded-md"
              >
                {t.trim()}
              </span>
            ))}
          </div>
          {/* Button */}
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-500 via-sky-500 to-purple-500 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:brightness-110 hover:scale-105 transition-all"
            >
              {t('projects.visitProject')} <ExternalLink size={16} />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};