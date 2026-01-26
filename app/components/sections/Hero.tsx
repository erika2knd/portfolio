import SectionWrapper from "../layout/SectionWrapper";

export default function Hero() {
  return (
    <section id="hero" className="pt-36">
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
              document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
            }
            className="btn mt-10"
          >
            <span>See Projects</span>
          </button>
        </div>
      </SectionWrapper>
    </section>
  );
}

