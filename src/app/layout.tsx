import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./Navbar/page";
import Footer from "./_footer/page";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
          <div className="max-w-[1920px] mx-auto">
           <Navbar />
          </div>
          <div className="max-w-[1920px] mx-auto">
            {children}
          </div>
          <div className="max-w-[1920px] mx-auto">
            <Footer />
          </div>
      </body>
    </html>
  );
}