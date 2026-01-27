import Link from "next/link";
import SectionWrapper from "../layout/SectionWrapper";

export default function Footer() {
  return (
    <footer id="contact" className="pt-32 pb-10">
      <SectionWrapper>
        {/* CONTACT / CTA */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm tracking-widest text-white/50">
            CONTACT
          </p>

          <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">
            Let’s work together
          </h2>

          <p className="mt-6 text-base leading-relaxed text-white/70 md:text-lg">
            I’m currently open to junior frontend positions.
            Feel free to reach out if you’d like to collaborate.
          </p>

          <a
            href="mailto:erikakondratjeva@gmail.com"
            className="btn mt-10 inline-flex"
          >
            <span>erikakondratjeva@gmail.com</span>
          </a>
        </div>

        {/* divider */}
        <div className="mt-24 h-px w-full bg-white/15" />

        {/* BOTTOM FOOTER */}
        <div className="mt-10 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-white/60">
            Erika Kondratjeva — 2026
          </p>

          <nav className="flex items-center gap-8 text-sm text-white/60">
  <a
    href="mailto:erikakondratjeva@gmail.com"
    className="transition hover:text-white"
  >
    Email
  </a>

  <Link
    href="https://github.com/erika2knd"
    target="_blank"
    rel="noreferrer"
    className="transition hover:text-white"
  >
    GitHub
  </Link>

  <a
    href="/cv/Erika_Kondratjeva_CV.pdf"
    download
    className="transition hover:text-white"
  >
    CV
  </a>
</nav>
        </div>
      </SectionWrapper>
    </footer>
  );
}
