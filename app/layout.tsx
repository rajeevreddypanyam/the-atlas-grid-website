import type { Metadata } from "next";
import { Archivo, Manrope } from "next/font/google";
import "./globals.css";

const display = Archivo({ subsets: ["latin"], variable: "--font-display" });
const body = Manrope({ subsets: ["latin"], variable: "--font-body" });

export const metadata: Metadata = {
  metadataBase: new URL("https://theatlasgrid.com"),
  title: "TAGS | Geospatial Intelligence",
  description: "Geospatial Intelligence from Ground to Sky by The Atlas Grid Solutions Private Limited.",
  applicationName: "TAGS",
  icons: { icon: "/brand/tags-app-icon.png", shortcut: "/brand/tags-app-icon.png", apple: "/brand/tags-app-icon.png" },
  openGraph: {
    title: "TAGS | Geospatial Intelligence",
    description: "Geospatial Intelligence from Ground to Sky.",
    type: "website",
    images: [{ url: "/brand/tags-og-banner.png", width: 1920, height: 640, alt: "TAGS geospatial intelligence" }],
  },
  twitter: { card: "summary_large_image", title: "TAGS | Geospatial Intelligence", description: "Geospatial Intelligence from Ground to Sky.", images: ["/brand/tags-og-banner.png"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={`${display.variable} ${body.variable}`}>{children}</body></html>;
}
