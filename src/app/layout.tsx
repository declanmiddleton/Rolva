import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rolva - Social Marketing Agency",
  description: "Transform your brand's social media presence with expert marketing strategies",
  icons: {
    icon: "/logo-transparent.ico",
    shortcut: "/logo-transparent.ico",
    apple: "/logo-transparent.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
