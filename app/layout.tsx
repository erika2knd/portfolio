import "./globals.css";
import { Sora } from "next/font/google";
import Header from "./components/layout/Header";

const sora = Sora({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sora",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${sora.variable} antialiased`}>
        <Header />
        {children}
      </body>
    </html>
  );
}


