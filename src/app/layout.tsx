import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header, Menu } from "@/widgets/header";
import { MenuData } from "@/shared/data/menu.data";
import { Footer } from "@/widgets/footer/footer";
import { Mena } from "@/widgets/footer/menu";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="bg-gray-800 min-h-full flex flex-col text-gray-300">
        <Header>
          <Menu/>
        </Header>
        {children}
        <Footer>
          <Mena/>
        </Footer>
      </body>
    </html>
  );
}