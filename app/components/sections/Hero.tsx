import SectionWrapper from "../layout/SectionWrapper";

export default function Hero() {
  return (
    <section id="hero" className="relative pt-36">
      <SectionWrapper>
        <div className="flex min-h-[72vh] flex-col items-center justify-center text-center">
          <h1 className="text-5xl font-semibold leading-[0.95] tracking-tight md:text-7xl">
            Hello, I am Erika
          </h1>

          <p className="mx-auto mt-14 max-w-[720px] text-lg font-medium leading-[1.6] text-white/75 md:text-xl">
            Junior Web Developer crafting modern, responsive web applications with React,
            Next.js and clean UI.
          </p>

          <button
            type="button"
            onClick={() =>
              document
                .getElementById("projects")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="btn mt-10"
          >
            <span>See Projects</span>
          </button>
        </div>
      </SectionWrapper>

      {/* Scroll down arrow */}
      <button
        type="button"
        aria-label="Scroll to projects"
        onClick={() =>
          document
            .getElementById("projects")
            ?.scrollIntoView({ behavior: "smooth" })
        }
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/70 transition hover:text-white animate-bounce"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </button>
    </section>
  );
}

