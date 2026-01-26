import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  image?: string;
  className?: string;
};

export default function SectionBackground({ children, image, className = "" }: Props) {
  return (
    <div className={`relative ${className}`}>
      {image && (
        <div className="absolute inset-0 -z-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url(${image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/30" />
        </div>
      )}

      {children}
    </div>
  );
}
