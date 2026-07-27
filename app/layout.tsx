import type { Metadata } from "next";
import { Archivo, Manrope } from "next/font/google";
import "./globals.css";

const display = Archivo({ subsets: ["latin"], variable: "--font-display" });
const body = Manrope({ subsets: ["latin"], variable: "--font-body" });

export const metadata: Metadata = {
  title: "The Atlas Grid | Aerial Intelligence",
  description: "Drone surveying, LiDAR mapping, thermal inspection and decision-ready geospatial intelligence by Global Online Solutions.",
  applicationName: "The Atlas Grid",
  icons: { icon: "/atlas-grid-mark.svg", shortcut: "/atlas-grid-mark.svg" },
  openGraph: {
    title: "The Atlas Grid | Aerial Intelligence",
    description: "Map what matters. Decide with clarity.",
    type: "website",
    images: [{ url: "/og.png", width: 1536, height: 1024, alt: "The Atlas Grid aerial intelligence" }],
  },
  twitter: { card: "summary_large_image", title: "The Atlas Grid | Aerial Intelligence", description: "Map what matters. Decide with clarity.", images: ["/og.png"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={`${display.variable} ${body.variable}`}>{children}</body></html>;
}
