"use client";

import { useState, useEffect } from "react";
import { Moon, Sun, Menu, Linkedin, Instagram, Github } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useI18n } from "@/lib/i18n-context";
import LanguageSwitcher from "@/components/LanguageSwitcher";

export default function Navbar() {
  const [isDark, setIsDark] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const { t } = useI18n();

  const navLinks = [
    { href: "/", label: t('navigation.home') },
    { href: "/projects", label: t('navigation.projects') },
    { href: "/contact", label: t('navigation.contact') },
  ];

  // Apply dark mode on mount and toggle
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  // Track scroll position
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 60 }}
      className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 rounded-3xl backdrop-blur-lg bg-white/70 dark:bg-zinc-900/70 border border-white/40 dark:border-zinc-800 w-[90%] sm:w-[85%] lg:w-[80%] max-w-6xl transition-all ${
        isScrolled ? "shadow-lg" : "shadow-none"
      }`}
    >
      <div className="px-6 sm:px-8 lg:px-12">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <motion.div
              className="text-1xl font-black bg-gradient-to-r from-green-500 to-blue-500 bg-clip-text text-transparent tracking-tight"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
            >
              ThaNieL
            </motion.div>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map(({ href, label }) => {
              const isActive = pathname === href;
              return (
                <motion.a
                  key={label}
                  href={href}
                  className={`relative text-sm font-medium ${
                    isActive ? "text-emerald-500" : "text-gray-700 dark:text-gray-300"
                  } group`}
                  whileHover={{ scale: 1.1 }}
                >
                  <span className="group-hover:text-purple-500 transition-colors duration-300">
                    {label}
                  </span>
                  <span
                    className={`absolute left-0 -bottom-1 h-0.5 bg-emerald-500 transition-all duration-300 ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  ></span>
                </motion.a>
              );
            })}

            {/* Social Icons - Desktop Only - Show After Scroll */}
            {isScrolled && (
              <motion.div
                className="hidden md:flex space-x-4 ml-6"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ type: "spring", stiffness: 100 }}
              >
                <Link
                  href="https://www.linkedin.com/in/thaniel23/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 dark:text-gray-400 dark:hover:text-red-400 hover:text-green-500 hover:scale-110  transition-transform"
                >
                  <Linkedin size={20} />
                </Link>

                <Link
                  href="https://github.com/ThaN1eL"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 dark:text-gray-400 dark:hover:text-red-400 hover:text-green-500 transition-colors"
                >
                  <Github size={20} />
                </Link>

                <Link
                  href="https://www.instagram.com/niw32_/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 dark:text-gray-400 dark:hover:text-red-400 hover:text-green-500 transition-colors"
                >
                  <Instagram size={20} />
                </Link>            
              </motion.div>
            )}
          </div>

          {/* Buttons */}
          <div className="flex items-center space-x-3 sm:space-x-4 lg:space-x-6">
            <LanguageSwitcher />
            <motion.button
              whileTap={{ scale: 0.9, rotate: 180 }}
              onClick={() => setIsDark(!isDark)}
              className="p-2 rounded-full bg-gray-100 dark:bg-zinc-800 text-gray-900 dark:text-white hover:scale-105 transition-all"
              aria-label="Toggle dark mode"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </motion.button>

            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-full bg-gray-100 dark:bg-zinc-800 text-gray-900 dark:text-white hover:scale-105"
              aria-label="Toggle menu"
            >
              <Menu size={18} />
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0, scale: 0.95 }}
            animate={{ height: "auto", opacity: 1, scale: 1 }}
            exit={{ height: 0, opacity: 0, scale: 0.95 }}
            transition={{ type: "spring", damping: 20, stiffness: 150 }}
            className="md:hidden bg-white dark:bg-zinc-900 overflow-hidden border-t border-zinc-200 dark:border-zinc-800 rounded-b-xl"
          >
            <div className="flex flex-col items-center space-y-4 py-6">
              {navLinks.map(({ href, label }) => (
                <motion.a               
                  href={href}
                  key={label}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-lg font-medium text-gray-800 dark:text-gray-100 hover:text-purple-500 transition-colors"
                  whileHover={{ scale: 1.05 }}
                >
                  {label}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}