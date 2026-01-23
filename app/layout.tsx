import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Erika — Frontend Developer",
  description: "Frontend Developer Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[#0B0B0F] text-white">
        {/* Global background (whole site) */}
        <div className="fixed inset-0 -z-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: "url(images/bg.png)", 
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          />
          {/* overlays */}
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/30" />
        </div>

        {children}
      </body>
    </html>
  );
}


