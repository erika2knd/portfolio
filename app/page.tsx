"use client";

import Header from "./components/layout/Header";
import SectionBackground from "./components/layout/SectionBackground";
import Hero from "./components/sections/Hero";
import Projects from "./components/sections/Projects";
import About from "./components/sections/About";
import Footer from "./components/layout/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <SectionBackground>
        <Header />
        <Hero />
      </SectionBackground>

      <Projects />
      <About />
      <Footer />
    </main>
  );
}

