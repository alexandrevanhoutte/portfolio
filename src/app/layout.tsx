import type { Metadata } from "next";

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
      {" "}
      <body>{children}</body>
    </html>
  );
}
