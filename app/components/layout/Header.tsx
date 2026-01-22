import Link from "next/link";

const navItems = [
  { label: "Work", href: "/#work" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/#contact" },
];

export default function Header() {
  return (
    <header className="px-6 lg:px-24 py-6">
      <nav className="flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="text-[18px] font-semibold tracking-tight text-neutral-900"
        >
          ma<span className="text-neutral-500">.</span>
        </Link>

        {/* Navigation */}
        <div className="flex items-center gap-6 text-[14px] text-neutral-700">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition hover:text-neutral-900 hover:underline underline-offset-4"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
