import Image from "next/image";
import SectionWrapper from "../layout/SectionWrapper";

const technologies = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Tailwind CSS",
  "MongoDB",
  "Firebase",
  "Supabase",
];

const skills = [
  "Responsive Layouts",
  "Modern UI Development",
  "Component-Based Architecture",
  "Authentication Flows",
  "API Integration",
  "Clean and Scalable Code",
];

const tools = ["VS Code", "GitHub", "Figma", "Vercel", "Stripe", "Resend"];

export default function About() {
  return (
    <section id="about" className="py-32">
      <SectionWrapper>
        {/* Section header */}
        <div className="mx-auto mb-24 max-w-3xl text-center md:mb-32">
          <p className="text-sm tracking-widest text-white/50">ABOUT</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">
            About Me
          </h2>
        </div>

        {/* TOP: text + image */}
        <div className="grid grid-cols-1 items-start gap-12 md:grid-cols-2 md:gap-16">
          {/* Left text */}
          <div>
            <h3 className="text-4xl font-semibold leading-[1.05] tracking-tight md:text-5xl">
              I’m Erika Kondratjeva,
              <br />
              Junior Web Developer.
            </h3>

            <div className="pt-10 max-w-[620px] space-y-8">
  <p className="text-base leading-[1.85] text-white/70 md:text-lg">
    I’m a Junior Web Developer focused on building modern, responsive web
    applications. I enjoy working on clean UI, structured layouts, and turning
    designs into functional, real products.
  </p>

  <p className="text-base leading-[1.85] text-white/70 md:text-lg">
    Through hands-on pet projects, I’ve gained practical experience with React,
    Next.js, authentication, APIs, and deployment. I’m currently looking for a
    junior position where I can grow as a developer and contribute to real-world
    products.
  </p>

  {/* CTA buttons */}
  <div className="flex flex-wrap items-center gap-6 pt-6">
    <a
      href="/cv/Erika_Kondratjeva_CV.pdf"
      download
      className="btn"
    >
      <span>Download CV</span>
    </a>

    <a
      href="#contact"
      className="text-sm font-medium text-white/70 transition hover:text-white"
    >
      Or contact me →
    </a>
  </div>
</div>

          </div>

          {/* Right image (sticky on desktop) */}
          <div className="flex justify-start md:justify-end">
            <div className="md:sticky md:top-28 w-full max-w-[320px] overflow-hidden rounded-3xl border border-white/25 bg-white/[0.03]">
              <Image
                src="/images/about.jpg"
                alt="Erika portrait"
                width={900}
                height={1100}
                className="h-auto w-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* BOTTOM: chips instead of comma text */}
        <div className="mt-28 space-y-14">
          <Block label="Main Technologies" items={technologies} />
          <div className="border-b border-white/15" />
          <Block label="Main Skills" items={skills} />
          <div className="border-b border-white/15" />
          <Block label="Tools" items={tools} />
        </div>
      </SectionWrapper>
    </section>
  );
}

function Block({ label, items }: { label: string; items: string[] }) {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-[260px_1fr] md:items-start">
      <p className="text-sm font-semibold text-white/80">{label}</p>

      <div className="flex flex-wrap gap-3">
        {items.map((item) => (
          <span
            key={item}
            className="rounded-full border border-white/15 bg-white/[0.04] px-4 py-2 text-sm text-white/75 transition hover:border-white/25 hover:text-white"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
