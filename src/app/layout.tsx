import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import { MobileBottomNav } from "@/components/navbar/mobileView/MobileBottomNav";
import { I18nProvider } from "@/lib/i18n-context";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ThaNieL Portfolio",
  icons: {
    icon: "/favicon.ico",
  },
  description: "Portfolio of Nathaniel Edwin",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <I18nProvider>
          <Toaster position="top-center" richColors />
          {children}
          <MobileBottomNav />
        </I18nProvider>
      </body>
    </html>
  );
}