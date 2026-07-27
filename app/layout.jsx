export const metadata = {
  metadataBase: new URL("https://theatlasgrid.com"),
  title: "The Atlas Grid | Aerial Survey & Geospatial Intelligence",
  description: "Drone surveying, LiDAR mapping, thermal inspection and decision-ready geospatial intelligence for land, infrastructure, energy, mining and the built environment.",
  applicationName: "The Atlas Grid",
  alternates: { canonical: "/" },
  icons: { icon: "/atlas-grid-mark.svg" },
  openGraph: {
    title: "The Atlas Grid | Map what matters",
    description: "Aerial survey and geospatial intelligence engineered for real-world decisions.",
    url: "https://theatlasgrid.com",
    siteName: "The Atlas Grid",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head><link rel="stylesheet" href="/atlas-grid.css?v=1" /></head>
      <body>{children}</body>
    </html>
  );
}
