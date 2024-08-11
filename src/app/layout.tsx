import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/Navbar/Navbar.root";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "News Feed",
  description: "News hub application to gather news from the most prominent journals out there.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="retro">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
