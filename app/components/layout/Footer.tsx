export default function Footer() {
  return (
    <footer className="px-6 lg:px-24 py-10">
      <div className="border-t border-neutral-200 pt-6">
        <div className="flex flex-col gap-4 text-[14px] text-neutral-600 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Erika</p>

          <div className="flex flex-wrap gap-6">
            <a
              className="hover:underline underline-offset-4 hover:text-neutral-900 transition"
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <a
              className="hover:underline underline-offset-4 hover:text-neutral-900 transition"
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            <a
              className="hover:underline underline-offset-4 hover:text-neutral-900 transition"
              href="mailto:your@email.com"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
