import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
};

export default function SectionWrapper({ children, className = "" }: Props) {
  return (
    <div className={`mx-auto w-full max-w-6xl px-6 ${className}`}>
      {children}
    </div>
  );
}
