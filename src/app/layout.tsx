import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "@/store/provider";
import AosSetup from "@/config/aos";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Apple Empire",
  description: "Apple Empire",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Providers>
        <Toaster />
        <AosSetup />
        <body className={inter.className}>{children}</body>
      </Providers>
    </html>
  );
}
