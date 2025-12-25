import type { Metadata } from "next";
import "./globals.css";
import { JetBrains_Mono } from "next/font/google";

const jetbrainsMono = JetBrains_Mono({subsets:['latin'],variable:'--font-sans'});

export const metadata: Metadata = {
  title: "mathnorbi.",
  description: "Tool to help you learn math.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={jetbrainsMono.variable}>
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}
