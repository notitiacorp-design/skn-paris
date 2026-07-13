import type { Metadata } from "next";
import { Inter, DM_Serif_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-inter",
});

const dmSerif = DM_Serif_Display({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-dm-serif",
});

export const metadata: Metadata = {
  title: "SKN Paris — Primal Science for Modern Skin",
  description: "Skincare minimaliste et scientifique. 3 produits, une routine qui respecte votre peau. Paris, France.",
  openGraph: {
    title: "SKN Paris",
    description: "Primal Science for Modern Skin",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" className={`${inter.variable} ${dmSerif.variable}`}>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
