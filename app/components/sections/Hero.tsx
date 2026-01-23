import Header from "../layout/Header";

export default function Hero() {
  return (
    <section id="work" className="relative">
      <Header />

      <div className="mx-auto flex min-h-[70vh] max-w-7xl flex-col items-center justify-center px-6 text-center">
        <h1 className="text-5xl font-semibold tracking-tight md:text-7xl">
    Hello, I’m Erika
  </h1>

  <p className="mt-16 max-w-2xl text-base leading-[1.65] text-white/70 md:text-lg">
    Frontend Developer crafting clean, modern interfaces with React & Next.js
  </p>

        <a
          href="#projects"
          className="mt-14 inline-flex rounded-full border border-white/30 px-10 py-3 text-sm transition hover:border-white"
        >
          See Projects
        </a>
      </div>
    </section>
  );
}


