import type { Metadata } from "next";
import { Manrope } from "next/font/google";

export const metadata: Metadata = {
  title: "Alexandre Vanhoutte - Senior Backend Engineer - Portfolio",
  description:
    "Senior Backend Engineer building APIs and data-processing systems. Main stack: Go, PostgreSQL, and Kubernetes, with NestJS and TypeScript services and GraphQL APIs in production.",
  keywords:
    "Alexandre Vanhoutte, Senior Backend Engineer, Go, TypeScript, NestJS, GraphQL, PostgreSQL, Kubernetes, Data Systems, Backend Developer, EPITECH, Korea, Seoul",
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
