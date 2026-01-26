export type Project = {
  id: string;
  index: string;     
  title: string;      
  description: string;
  stackLabel: string;
  stack: string;
  href: string;      
  image: string;      
};

export const projects: Project[] = [
  {
    id: "skynova",
    index: "01",
    title: "Skynova — CS:GO Skins Marketplace",
    description:
      "A demo marketplace for Counter-Strike skins built as a portfolio project. Focused on realistic UI flow, authentication, and modern frontend architecture.",
    stackLabel: "Tech stack",
    stack: "Next.js · TypeScript · Tailwind · Supabase · Vercel",
    href: "https://skynova-dusky.vercel.app/",
    image: "/images/skynova.png",
  },
  {
    id: "monstera",
    index: "02",
    title: "MonsteraMood — One-Product E-commerce",
    description:
      "A one-product e-commerce landing with a realistic checkout flow. Includes Stripe test payments, responsive layout, and clean UI.",
    stackLabel: "Tech stack",
    stack: "React · JavaScript · Tailwind · Stripe · Resend · Vercel",
    href: "https://plantpay.vercel.app/",
    image: "/images/monstera.png",
  },
  {
    id: "fynora",
    index: "03",
    title: "Fynora — Fintech Landing Page",
    description:
      "A SaaS-style fintech landing page built from a Figma design. Focused on pixel-perfect layout, responsive UI, and smooth structure.",
    stackLabel: "Tech stack",
    stack: "React · TypeScript · Tailwind · Resend · Vercel",
    href: "https://fintech-landing-project-1zbn.vercel.app/",
    image: "/images/fynora.png",
  },
  {
    id: "nft",
    index: "04",
    title: "NFT Marketplace — Multi-Page Demo Platform",
    description:
      "A multi-page NFT marketplace demo with authentication and dynamic components. Built to simulate a real product UI and scalable frontend structure.",
    stackLabel: "Tech stack",
    stack: "React · JavaScript · Tailwind · Firebase · Vercel",
    href: "https://nft-marketplace-lime-nine.vercel.app/",
    image: "/images/nft.png",
  },
];
