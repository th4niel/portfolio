"use client";
import Footer from "../components/Footer/page";
import TechStack from "../components/techstack/page";
import Navbar from "../components/navbar/page";
import { motion, useScroll, useSpring } from "framer-motion";
import { FaReact } from "react-icons/fa";
// import FootDivider from "../components/footdiv/foot";
import Reveal from "../components/reveal/reveal";
import { FloatingIcon } from "../components/FloatingIcon/float";
import { SiNextdotjs, SiTailwindcss, SiGit } from "react-icons/si";
import Link from "next/link";
import { TbBrandFramerMotion } from "react-icons/tb";
import {
  SiJavascript,
  SiTypescript,
  SiPython,
  SiMongodb,
  SiRedux,
  SiShadcnui,
  SiGithub,
  SiVite,
  SiFlutter,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import Projects from "@/components/projectsPage/project";
import TypewriterText from "@/components/typewriter/TypeWriter";
import { useI18n } from "@/lib/i18n-context";
import Image from "next/image";
import { toast } from "sonner";

const ICONS = [
  FaReact,
  SiNextdotjs,
  SiTailwindcss,
  TbBrandFramerMotion,
  SiTypescript,
  SiJavascript,
  SiPython,
  SiShadcnui,
  FaJava,
  SiGithub,
  SiMongodb,
  SiRedux,
  SiVite,
  SiGit,
  SiFlutter,
];

const generateUniquePositions = (count: number) => {
  const positions: { top: string; left: string }[] = [];

  while (positions.length < count) {
    const top = `${Math.floor(Math.random() * 70 + 5)}%`;
    const left = `${Math.floor(Math.random() * 90 + 5)}%`;

    const isOverlapping = positions.some(
      (pos) =>
        Math.abs(parseFloat(pos.top) - parseFloat(top)) < 15 &&
        Math.abs(parseFloat(pos.left) - parseFloat(left)) < 15
    );

    if (!isOverlapping) {
      positions.push({ top, left });
    }
  }

  return positions;
};

const positions = generateUniquePositions(ICONS.length);

const Logo = () => (
  <div className="mb-8 items-center flex justify-center relative z-20">
    <Image
      src="/logo.png"
      alt="Logo"
      width={84}
      height={84}
      className="rounded-full border-2 border-emerald-400 object-cover"
      priority
    />
  </div>
);

export default function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const { t } = useI18n();

  const titles = [
    t('home.title'),
    t('home.subtitle1'),
    t('home.subtitle2'),
    "",
  ];

  const handleResumeDownload = () => {
    const link = document.createElement('a');
    link.href = '/resume/CV.pdf';
    link.download = 'CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    toast.success('Resume downloaded successfully!');
  };

  return (
    <div className="relative flex flex-col min-h-screen font-[family-name:var(--font-geist-sans)] bg-gradient-to-br from-white via-rose-50 to-violet-100 dark:from-zinc-900 dark:via-zinc-800 dark:to-zinc-900 transition-colors duration-500 bg-grid-dark overflow-hidden">

      {/* Scroll Progress Bar */}
      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-rose-900 z-[1000] origin-left" style={{ scaleX }} />

      {/* Background Particles */}
      <FloatingIcon
        Icon={FaReact}
        delay={0}
        top="50%"
        left="50%"
        rotation={Math.random() * 20 - 10}
      />

      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="flex z-10 relative flex-col items-center justify-center text-center w-full px-6 sm:px-12 lg:px-24 py-30 min-h-screen">

        {/* Floating icons */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          {ICONS.map((Icon, i) => (
            <FloatingIcon
              key={i}
              Icon={Icon}
              delay={i * 0.3}
              top={positions[i].top}
              left={positions[i].left}
              rotation={Math.random() * 20 - 10}
            />
          ))}
        </div>

        <Reveal>
          <div className="flex flex-col items-center justify-center gap-4 z-10">
            <motion.div>
              <Logo />
            </motion.div>
            <motion.div
              className="absolute w-48 h-48 sm:w-64 sm:h-64 rounded-full bg-gradient-to-tr from-purple-400 via-pink-500 to-yellow-400 opacity-30 animate-spin-slow blur-3xl"
            />

            <motion.h1
              className="text-4xl sm:text-6xl font-extrabold leading-tight mb-6 text-black dark:text-white overflow-hidden min-h-[3.5rem] sm:min-h-[4.5rem] z-10"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <div className="w-[280px] sm:w-[900px] mx-auto text-center whitespace-nowrap overflow-hidden">
                <TypewriterText texts={titles} />
              </div>
            </motion.h1>
          </div>

          <motion.p
            className="max-w-2xl text-lg sm:text-xl text-gray-600 dark:text-gray-400 mb-8 text-center mx-auto backdrop-blur-md bg-white/10 dark:bg-black/10 border border-white/20 rounded-xl p-4 shadow-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            dangerouslySetInnerHTML={{
              __html: t('home.description', {
                name: t('home.name'),
                role: t('home.role'),
                industry: t('home.industry'),
                field: t('home.field')  
              })
            }}
          />

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row justify-center items-center gap-6 mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            <Link 
              href="/projects" 
              className="relative px-8 py-4 rounded-full font-semibold text-white bg-gradient-to-r from-blue-500 to-indigo-600 shadow-lg hover:shadow-fuchsia-500/50 overflow-hidden group transition-transform duration-300"
            >
              <span className="relative z-10">{t('home.myProject')}</span>
              {/* Shine Effect */}
              <span className="absolute left-[-75%] top-0 w-1/2 h-full bg-white opacity-20 transform skew-x-[-20deg] group-hover:translate-x-[250%] transition-transform duration-700 ease-in-out" />
            </Link>

            {/* Resume */}
            <button
              onClick={handleResumeDownload}
              className="relative px-8 py-4 rounded-full font-semibold text-white bg-gradient-to-r from-slate-800 to-indigo-900 shadow-lg hover:shadow-emerald-500/50 overflow-hidden group transition-transform duration-300"
            >
            <span className="relative z-10">{t('home.myResume')}</span>
            <span className="absolute left-[-75%] top-0 w-1/2 h-full bg-white opacity-20 transform skew-x-[-20deg] group-hover:translate-x-[250%] transition-transform duration-700 ease-in-out" />
          </button>
          </motion.div>

          {/* Background Spotlight */}
          <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
            <div className="spotlight" />
          </div>
        </Reveal>
      </section>

      <section className="w-full px-6 sm:px-12 lg:px-24 py-20 relative">
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          {ICONS.map((Icon, i) => (
            <FloatingIcon
              key={i}
              Icon={Icon}
              delay={i * 0.3}
              top={positions[i].top}
              left={positions[i].left}
              rotation={Math.random() * 50}
            />
          ))}
        </div>
        <Reveal>
          <TechStack />
        </Reveal>
      </section>

      <section className="w-full relative z-10 py-4 mt-9 bg-black">
        <Reveal>
          <Projects />
        </Reveal>
      </section>

      <footer className="w-full relative z-10 py-10 bg-black">
        <Reveal>
          <Footer />
        </Reveal>
      </footer>
    </div>
  );
}