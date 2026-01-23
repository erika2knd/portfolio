import Image from "next/image";

export default function Hero() {
  return (
    <div className="relative overflow-hidden">
      {/* Background image */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <Image
          src="/bg.png"
          alt=""
          fill
          priority
          className="object-cover opacity-60"
        />
      </div>

      {/* Content */}
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex min-h-[70vh] flex-col items-center justify-center text-center">
          <h1 className="text-5xl font-semibold tracking-tight sm:text-6xl md:text-7xl">
            Hello, I am Erika
          </h1>

          <p className="mt-6 max-w-xl text-sm leading-relaxed text-white/70 sm:text-base">
            Junior Web Developer crafting modern, responsive web applications with
            React, Next.js and clean UI.
          </p>

          <a
            href="#projects"
            className="mt-8 inline-flex items-center justify-center rounded-full border border-white/20 px-8 py-3 text-sm transition hover:border-white/40"
          >
            See Projects
          </a>
        </div>
      </div>
    </div>
  );
}
