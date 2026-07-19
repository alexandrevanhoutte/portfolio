import type { Metadata } from "next";
import { Manrope } from "next/font/google";

export const metadata: Metadata = {
  title: "Alexandre Vanhoutte - Senior Backend Engineer - Portfolio",
  description:
    "Senior Backend Engineer specializing in Go and distributed systems. Building reliable backend products and turning complex technical problems into simple, practical outcomes.",
  keywords:
    "Alexandre Vanhoutte, Senior Backend Engineer, Go, Distributed Systems, Backend Developer, EPITECH, Korea, Seoul",
  authors: { name: "Alexandre Vanhoutte" },
  robots: "index, follow",
};

const manrope = Manrope({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={manrope.className}>
        {children}
      </body>
    </html>
  );
}
