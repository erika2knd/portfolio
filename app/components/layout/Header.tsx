import Image from "next/image";

const navItems = [
  { label: "Work", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  return (
    <header className="relative z-20 pt-8">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex items-center justify-between rounded-full border border-white/40 bg-black/10 backdrop-blur px-10 py-3">
          <Image
            src="/logo.png"
            alt="Erika logo"
            width={200}
            height={28}
            priority
            className="h-6 w-auto"
          />

          <nav className="flex items-center gap-10 text-sm text-white/70">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="hover:text-white">
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}

