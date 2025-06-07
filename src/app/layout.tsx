import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ['latin'], // Puedes agregar 'latin-ext', 'cyrillic', etc.
  variable: '--font-inter', // (opcional) Para usar como variable CSS
})

export const metadata: Metadata = {
  title: "TuBancoApp",
  description: "A banking app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
