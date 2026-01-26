import ProjectRow from "./ProjectRow";
import { projects } from "@/app/data/projects";
import SectionWrapper from "../layout/SectionWrapper";

export default function Projects() {
  return (
    <section id="projects" className="mt-40 md:mt-32 pb-32">
      <SectionWrapper>
        {/* Section header (centered) */}
        <div className="mx-auto mb-32 max-w-3xl text-center md:mb-32">
          <p className="text-sm tracking-widest text-white/50">
            SELECTED WORK
          </p>

          <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">
            Featured Projects
          </h2>
        </div>

        {/* Projects list */}
        <ul className="flex flex-col gap-24 md:gap-32">
          {projects.map((project) => (
            <li key={project.id}>
              <ProjectRow project={project} />
            </li>
          ))}
        </ul>
      </SectionWrapper>
    </section>
  );
}
