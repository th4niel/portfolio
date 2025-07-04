"use client";

import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import { toast } from "sonner";
import { motion } from "framer-motion";
import Navbar from "@/components/navbar/page";
import Footer from "@/components/Footer/page";
import Reveal from "@/components/reveal/reveal";
import FootDivider from "@/components/footdiv/foot";
import { useI18n } from "@/lib/i18n-context";

export default function ContactForm() {
  const [state, handleSubmit] = useForm("movwboeq");
  const { t } = useI18n();

  React.useEffect(() => {
    if (state.succeeded) {
      toast.success(t('contact.successMessage'));
      const form = document.getElementById("contact-form");
      if(form && 'reset' in form){
        (form as HTMLFormElement).reset();
      }
    }
  }, [state.succeeded, t]);

  return (
    <section className="flex flex-col min-h-screen bg-grid-dark text-white">
      <Navbar />

      <main className="flex-grow flex items-center justify-center px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-xl w-full text-center space-y-6"
        >
          <motion.h2
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
              type: "spring",
              stiffness: 100,
            }}
          >
            <span className="bg-gradient-to-r from-green-600 via-blue-400 to-rose-700 bg-clip-text text-transparent text-4xl sm:text-5xl font-extrabold text-center mt-7 lg:px-35 drop-shadow-md flex items-center ">
              {t('contact.title')}
            </span>     
          </motion.h2>

          <motion.form
            id="contact-form"
            onSubmit={handleSubmit}
            className="space-y-6"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 1 }}
            viewport={{ once: true }}
          >
            {/* Name */}
            <div className="flex flex-col text-left">
              <label className="mb-1 font-medium text-gray-700 dark:text-gray-300">
                {t('contact.name')}
              </label>
              <input
                id="name"
                name="name"
                required
                placeholder={t('contact.namePlaceholder')}
                className="rounded-xl px-4 py-3 bg-white/10 dark:bg-black/10 border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-red-700 transition shadow-xl placeholder:text-gray-400 dark:placeholder:text-gray-300 text-black dark:text-white"
              />
              <ValidationError
                prefix="Name"
                field="name"
                errors={state.errors}
                className="text-red-500 text-sm mt-1"
              />
            </div>

            {/* Email */}
            <div className="flex flex-col text-left">
              <label className="mb-1 font-medium text-gray-700 dark:text-gray-300">
                {t('contact.email')}
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder={t('contact.emailPlaceholder')}
                className="rounded-xl px-4 py-3 bg-white/10 dark:bg-black/10 border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-700 transition shadow-xl placeholder:text-gray-400 dark:placeholder:text-gray-300 text-black dark:text-white"
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
                className="text-red-500 text-sm mt-1"
              />
            </div>

            {/* Message */}
            <div className="flex flex-col text-left">
              <label className="mb-1 font-medium text-gray-700 dark:text-gray-300">
                {t('contact.message')}
              </label>
              <textarea
                id="message"
                name="message"
                required
                placeholder={t('contact.messagePlaceholder')}
                rows={5}
                className="rounded-xl px-4 py-3 bg-white/10 dark:bg-black/10 border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-green-700 transition resize-none shadow-xl placeholder:text-gray-400 dark:placeholder:text-gray-300 text-black dark:text-white"
              />
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
                className="text-red-500 text-sm mt-1"
              />
            </div>

            {/* Submit */}
            <motion.button
              type="submit"
              disabled={state.submitting}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full mt-4 bg-blue-500 hover:bg-green-300 text-white py-3 px-6 rounded-xl font-semibold transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {state.submitting ? t('contact.sending') : t('contact.sendMessage')}
            </motion.button>
          </motion.form>
        </motion.div>
      </main>

      {/* Divider + Footer */}
      <FootDivider flip fillColor="#000000" />
      <footer className="w-full relative z-10 py-10 bg-black">
        <Reveal>
          <Footer />
        </Reveal>
      </footer>
    </section>
  );
}