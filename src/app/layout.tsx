import type { Metadata } from "next";
import { Titillium_Web } from 'next/font/google'

const titilliumWeb = Titillium_Web({
  weight: ['200', '300', '400', '600', '700', '900'],
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: "Alexandre Vanhoutte Portfolio",
  description: "Alexandre Vanhoutte Portfolio",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={titilliumWeb.className}>{children}</body>
    </html>
  );
}
