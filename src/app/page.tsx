"use client";

import { useEffect } from "react";
import { LanguageProvider } from "@/i18n/context";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Awards from "@/components/Awards";
import Research from "@/components/Research";
import Links from "@/components/Links";
import Footer from "@/components/Footer";

export default function Home() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".fade-in").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <LanguageProvider>
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Awards />
        <Research />
        <Links />
      </main>
      <Footer />
    </LanguageProvider>
  );
}
