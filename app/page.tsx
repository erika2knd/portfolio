import Image from "next/image";
import Hero from "./components/sections/Hero";

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <Image
          src="/bg.png"
          alt=""
          fill
          priority
          className="object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <section id="work">
        <Hero />
      </section>

      <section id="projects" className="min-h-screen" />
      <section id="about" className="min-h-screen" />
      <section id="contact" className="min-h-screen" />
    </main>
  );
}
