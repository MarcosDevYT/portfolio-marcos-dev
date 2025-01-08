import type { Metadata } from "next";
import { Noto_Sans_Display, Inter } from "next/font/google";
import "remixicon/fonts/remixicon.css";
import "./globals.css";
import Footer from "@/components/layout/footer";
import Sidebar from "@/components/layout/sidebar";

const inter = Inter({ subsets: ["latin"] });

const noto = Noto_Sans_Display({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio - Marcos Morua",
  description:
    "Tu Programador Frontend personal, con mas de 3 años de expericia utilizando Frameworks de javascript modernos para realizar tus proyectos.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} ${noto.className} antialiased  bg-bg text-textColor`}
      >
        <Sidebar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
