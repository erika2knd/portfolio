import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Erika — Junior Web Developer",
  description: "Erika Kondratjeva — Junior Web Developer Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[#0B0B0F] text-white">
        <div className="fixed inset-0 -z-10">
          <div className="absolute inset-0 bg-[#0B0B0F]" />
          <div className="absolute inset-0 bg-gradient-to-b from-white/5 via-transparent to-black" />
        </div>

        {children}
      </body>
    </html>
  );
}

