import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components";
import Dropdown from "@/components/Dropdown/Dropdown.root";
import Input from "@/components/Input/Input";
import Card from "@/components/Card/Card.root";

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
        <Input />
        <Dropdown />
        <Card />
      </body>
    </html>
  );
}
