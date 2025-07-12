"use client";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import {
  Github,
  Linkedin,
  Instagram,
} from "lucide-react";
import { useI18n } from "@/lib/i18n-context";

const socials = [
  { href: "https://github.com/th4niel", icon: Github },
  { href: "https://www.linkedin.com/in/thaniel23/", icon: Linkedin },
  { href: "https://www.instagram.com/niw32_/", icon: Instagram },
];

export default function Footer() {
  const { t } = useI18n();
  
  return (
    <footer className="relative z-10 px-6 sm:px-12 lg:px-24 py-10 mt-15  bg-black border-b border-gray-900 dark:border-gray-800 ">
      <motion.div
        className="flex flex-col sm:flex-row justify-between items-center gap-6"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <p className="text-center sm:text-left bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent  dark:text-gray-400">
          {t('footer.copyright', { year: new Date().getFullYear() })}
        </p>

        <div className="flex gap-5 text-xl">
         <AnimatePresence>
          {socials.map(({ href, icon: Icon }) => (
            <motion.a
              key={href}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.95 }}
              className="text-muted-foreground hover:text-purple-500 transition-colors"
            >
              <Icon className="h-5 w-5" />
            </motion.a>
          ))}
        </AnimatePresence>
        </div>
      </motion.div>
    </footer>
  );
}