import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

export const metadata: Metadata = {
  title: "Erika — Junior Web Developer",
  description: "Personal portfolio showcasing selected web projects.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen bg-[#F6F5F2] text-neutral-900">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
