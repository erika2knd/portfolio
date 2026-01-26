"use client";

import { useEffect, useState } from "react";

export function useActiveSection(
  sectionIds: string[],
  offset = "-45% 0px -45% 0px"
) {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort(
            (a, b) =>
              (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0)
          )[0];

        if (visible?.target?.id) setActiveId(visible.target.id);
      },
      { root: null, threshold: [0.2, 0.35, 0.5], rootMargin: offset }
    );

    sections.forEach((s) => observer.observe(s));

    return () => observer.disconnect();
  }, [sectionIds, offset]);

  return activeId;
}
