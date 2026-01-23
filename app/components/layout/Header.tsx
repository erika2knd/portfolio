import Image from "next/image";

export default function Header() {
  return (
    <header className="w-full pt-8">
      <div className="mx-auto max-w-6xl px-6">
        <div
          className="
            flex items-center justify-between
            rounded-full
            border border-white/40
            px-10 py-3
          "
        >
          {/* Logo */}
          <a href="#work" className="flex items-center">
            <Image
              src="/logo.png"
              alt="Erika logo"
              width={200}
              height={28}
              priority
              className="h-6 w-auto"
            />
          </a>

          {/* Navigation */}
          <nav className="flex items-center gap-10 text-sm text-white/70">
            <a href="#work" className="transition hover:text-white">
              Work
            </a>
            <a href="#about" className="transition hover:text-white">
              About
            </a>
            <a href="#contact" className="transition hover:text-white">
              Contact
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}

