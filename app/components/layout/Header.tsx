"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import SectionWrapper from "./SectionWrapper";
import { useActiveSection } from "@/app/hooks/useActiveSection";

const navItems = [
  { label: "Work", href: "#projects", id: "projects" },
  { label: "About", href: "#about", id: "about" },
  { label: "Contact", href: "#contact", id: "contact" },
];

const CV_URL = "/cv/Erika_Kondratjeva_CV.pdf.pdf";

export default function Header() {
  const sectionIds = useMemo(() => navItems.map((n) => n.id), []);
  const activeId = useActiveSection(sectionIds);

  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="fixed left-0 right-0 top-0 z-30 pt-6">
      <SectionWrapper>
        <div
          className={[
            "rounded-full border px-6 sm:px-10 py-3",
            "transition-all duration-200",
            isScrolled
              ? "border-white/30 bg-black/40 backdrop-blur shadow-[0_0_0_1px_rgba(255,255,255,0.06)]"
              : "border-white/40 bg-black/10 backdrop-blur",
          ].join(" ")}
        >
          {/* 3-column layout */}
          <div className="grid grid-cols-[auto_1fr_auto] items-center">
            {/* Left: Logo */}
            <button
  type="button"
  aria-label="Go to top"
  onClick={() => {
    setMenuOpen(false);

    window.scrollTo({ top: 0, behavior: "smooth" });
    history.replaceState(null, "", window.location.pathname);
  }}
  className="inline-flex items-center outline-none focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:ring-offset-2 focus-visible:ring-offset-black rounded-md"
>
  <Image
    src="/images/logo.png"
    alt="Erika logo"
    width={200}
    height={28}
    priority
    className="h-6 w-auto transition duration-200 hover:opacity-90 hover:scale-[1.01] active:scale-[0.99]"
  />
</button>

            {/* Center: Desktop Nav */}
            <nav className="hidden md:flex justify-center items-center gap-10 text-sm text-white/70">
              {navItems.map((item) => {
                const isActive = activeId === item.id;

                return (
                  <a
                    key={item.href}
                    href={item.href}
                    aria-current={isActive ? "page" : undefined}
                    className={[
                      "relative rounded-sm transition-colors duration-200 focus:outline-none",
                      "focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:ring-offset-2 focus-visible:ring-offset-black",
                      isActive ? "text-white" : "hover:text-white",
                      "after:absolute after:left-0 after:-bottom-1 after:h-[1px] after:bg-white/70 after:transition-all after:duration-200",
                      isActive ? "after:w-full" : "after:w-0 hover:after:w-full",
                    ].join(" ")}
                  >
                    {item.label}
                  </a>
                );
              })}
            </nav>

            {/* Right: Desktop Buttons + Mobile Menu Button */}
            <div className="flex items-center justify-end gap-3">
              {/* Desktop buttons */}
              <div className="hidden md:flex items-center gap-3">
                <a
                  href={CV_URL}
                  download
                  className="btn btn--sm"
                >
                  <span>Download CV</span>
                </a>

                <a
                  href="mailto:erikakondratjeva@gmail.com"
                  className="btn btn--sm btn--inverse"
                >
                  <span>Contact me</span>
                </a>
              </div>

              {/* Mobile Button */}
              <button
                type="button"
                aria-label="Open menu"
                aria-expanded={menuOpen}
                onClick={() => setMenuOpen((v) => !v)}
                className="md:hidden inline-flex items-center justify-center rounded-full border border-white/30 px-4 py-2 text-sm text-white/80 hover:text-white transition"
              >
                {menuOpen ? "Close" : "Menu"}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden mt-3 rounded-2xl border border-white/20 bg-black/60 backdrop-blur p-4">
            <nav className="flex flex-col gap-2">
              {navItems.map((item) => {
                const isActive = activeId === item.id;

                return (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={closeMenu}
                    className={[
                      "rounded-xl px-4 py-3 text-sm transition",
                      isActive
                        ? "bg-white/10 text-white"
                        : "text-white/70 hover:bg-white/5 hover:text-white",
                    ].join(" ")}
                  >
                    {item.label}
                  </a>
                );
              })}
            </nav>

            {/* Mobile buttons */}
            <div className="mt-4 grid gap-2">
              <a href={CV_URL} download className="btn" onClick={closeMenu}>
                <span>Download CV</span>
              </a>

              <a
                href="mailto:erikakondratjeva@gmail.com"
                className="btn btn--inverse"
                onClick={closeMenu}
              >
                <span>Contact me</span>
              </a>
            </div>
          </div>
        )}
      </SectionWrapper>
    </header>
  );
}
