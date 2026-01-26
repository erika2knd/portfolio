import Link from "next/link";

export default function Footer() {
  return (
    <footer className="pt-24 pb-10">
      <div className="mx-auto max-w-6xl px-6">
        {/* top divider */}
        <div className="h-px w-full bg-white/15" />

        <div className="mt-10 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-white/70">
            Erika Kondratjeva — 2026
          </p>

          <nav className="flex items-center gap-8 text-sm text-white/70">
            {/* Email */}
            <a
              href="mailto:erika.kondratjeva@gmail.com"
              className="transition hover:text-white"
            >
              Email
            </a>

            {/* GitHub */}
            <Link
              href="https://github.com/your-github-username"
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-white"
            >
              GitHub
            </Link>

            {/* CV download */}
            <a
              href="/cv/Erika_Kondratjeva_CV.pdf"
              download
              className="transition hover:text-white"
            >
              CV
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
