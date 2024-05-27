import Navbar from "@/app/_components/navbar/Navbar";
import type { Metadata } from "next";
import { Titillium_Web } from "next/font/google";

export const metadata: Metadata = {
  title: "Alexandre Vanhoutte Portfolio",
  description: "Alexandre Vanhoutte Portfolio",
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
