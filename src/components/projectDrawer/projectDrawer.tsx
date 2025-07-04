"use client";

import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerClose,
} from "@/components/ui/drawer";
import { ExternalLink, X } from "lucide-react";
import Image from "next/image";
import { useEffect } from "react";
import clsx from "clsx";
import { useI18n } from "@/lib/i18n-context";

type Project = {
  title: string;
  tech: string;
  description: string;
  video?: string;
  image?: string;
  link?: string;
};

export default function ProjectDrawer({
  open,
  onOpenChange,
  project,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  project: Project | null;
}) {
  const { t } = useI18n();
  
  useEffect(() => {
    if (!project) onOpenChange(false);
  }, [project, onOpenChange]);

  return (
    <Drawer open={open} onOpenChange={onOpenChange} direction="left">
      <DrawerContent
        className={clsx(
          "p-4 max-w-lg w-full h-full fixed left-0 top-0 bottom-0 z-50 bg-white dark:bg-zinc-950 shadow-xl border-r border-zinc-200 dark:border-zinc-800 flex flex-col"
        )}
      >
        {/* Header */}
        <DrawerHeader className="flex items-center justify-between mb-4">
          <div
            onClick={() => onOpenChange(false)}
            className="text-sm text-zinc-500 dark:text-zinc-400 hover:text-purple-600 cursor-pointer transition"
          >
            &larr; {t('projects.backToProjects')}
          </div>

          <DrawerClose>
            <X className="w-6 h-6 text-zinc-600 dark:text-zinc-300 hover:text-red-500 transition" />
          </DrawerClose>
        </DrawerHeader>

        {/* Project Title */}
        <div className="mb-4">
          <DrawerTitle className="text-2xl font-bold text-zinc-800 dark:text-zinc-100 mb-1">
            {project?.title}
          </DrawerTitle>
          <p className="text-sm text-zinc-500 dark:text-zinc-400">
            {t('projects.discoverProjects')}
          </p>
        </div>

        {/* Media Section */}
        {project?.video ? (
          <video
            src={project.video}
            className="w-full h-52 object-cover rounded-lg mb-6"
            autoPlay
            muted
            loop
            playsInline
          />
        ) : project?.image ? (
          <div className="relative w-full h-52 mb-6 rounded-lg overflow-hidden">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
            />
          </div>
        ) : null}

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto pr-1 space-y-6">
          {/* About Section */}
          <section>
            <h2 className="text-lg font-semibold text-zinc-800 dark:text-zinc-100 mb-1">
              {t('projects.about')}
            </h2>
            <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
              {project?.description}
            </p>
          </section>

          {/* Tech Stack */}
          <section>
            <h2 className="text-lg font-semibold text-zinc-800 dark:text-zinc-100 mb-2">
              {t('projects.technologies')}
            </h2>
            <div className="flex flex-wrap gap-2">
              {project?.tech.split(",").map((tech) => (
                <span
                  key={tech.trim()}
                  className="bg-purple-100 text-sky-600 dark:bg-emerald-200 dark:text-sky-600 text-xs font-medium px-2.5 py-1 rounded-md"
                >
                  {tech.trim()}
                </span>
              ))}
            </div>
          </section>

          {/* Project Link */}
          {project?.link && (
            <section>
              <h2 className="text-lg font-semibold text-zinc-800 dark:text-zinc-100 mb-2">
                {t('projects.website')}
              </h2>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-500 via-sky-500 to-purple-500 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:brightness-110 hover:scale-105 transition-all"
              >
                {t('projects.visitProject')} <ExternalLink size={16} />
              </a>
            </section>
          )}
        </div>
      </DrawerContent>
    </Drawer>
  );
}