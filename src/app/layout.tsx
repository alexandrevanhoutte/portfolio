import Navbar from "@/app/_components/navbar/Navbar";
import type { Metadata } from "next";
import { Titillium_Web } from "next/font/google";

export const metadata: Metadata = {
  title: "Alexandre Vanhoutte - Software Engineer - Portfolio",
  description:
    "After graduating from {EPITECH.} and gaining several years of professional experience in Korea, I am currently leading backend development in Seoul. Quick to learn, adaptable, and responsible, I am proficient in several technologies and I acquired a strong understanding of development workflows and methodologies.",
  keywords:
    "Alexandre Vanhoutte, Software Engineer, Backend Developer, EPITECH, Korea, Seoul, Technology Expert, Development Workflows",
  authors: { name: "Alexandre Vanhoutte" },
  robots: "index, follow",
};

const titilliumWeb = Titillium_Web({
  style: ["normal", "italic"],
  weight: ["200", "300", "400", "600", "700", "900"],
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={titilliumWeb.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
