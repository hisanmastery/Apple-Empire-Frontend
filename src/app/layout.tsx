import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "@/store/provider";
import AosSetup from "@/config/aos";

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
      {/* <link
        rel="stylesheet"
        type="text/css"

        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      /> */}

      <Providers>
        <AosSetup />
        <body className={inter.className}>{children}</body>
      </Providers>
    </html>
  );
}
