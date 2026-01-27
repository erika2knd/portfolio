import type { ReactNode } from "react";
import WaveCanvas from "../background/WaveCanvas";

type Props = {
  children: ReactNode;
  className?: string;
};

export default function SectionBackground({ children, className = "" }: Props) {
  return (
    <div className={`relative ${className}`}>
      <WaveCanvas opacity={0.55} />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-black/40" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-t from-black via-transparent to-black/30" />

      {children}
    </div>
  );
}
