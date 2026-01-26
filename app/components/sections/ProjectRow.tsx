import Image from "next/image";
import type { Project } from "@/app/data/projects";

type Props = {
  project: Project;
};

export default function ProjectRow({ project }: Props) {
  return (
    <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-14">
      {/* Left text */}
      <div>
        <p className="text-base font-bold text-white/80">
          {project.index} <span className="font-bold text-white/50">/</span>{" "}
          <span className="font-bold text-white/70">{project.title}</span>
        </p>

        <p className="mt-6 max-w-lg text-base leading-relaxed text-white/70">
          {project.description}
        </p>

        <div className="mt-8 text-base text-white/60">
          <p className="font-medium text-white/70">{project.stackLabel}</p>
          <p className="mt-2 text-white/60">{project.stack}</p>
        </div>

        {/* CTA as a link (not button inside link) */}
        <a
          href={project.href}
          target="_blank"
          rel="noreferrer"
          className="btn mt-10 inline-flex"
        >
          <span className="text-sm font-medium">View Live Demo</span>
        </a>
      </div>

      {/* Right preview */}
      <a
        href={project.href}
        target="_blank"
        rel="noreferrer"
        className="group relative block"
        aria-label={`Open ${project.title} live demo`}
      >
        <div className="overflow-hidden rounded-2xl border border-white/10 transition-all duration-300 group-hover:-translate-y-1 group-hover:border-white/20 group-hover:shadow-[0_16px_50px_rgba(0,0,0,0.55)]">
          <Image
            src={project.image}
            alt={project.title}
            width={960}
            height={540}
            className="h-auto w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
            priority={project.index === "01"}
          />
        </div>

        {/* subtle hover overlay */}
        <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <div className="absolute inset-0 rounded-2xl bg-white/5" />
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/30 via-transparent to-transparent" />
        </div>
      </a>
    </div>
  );
}
