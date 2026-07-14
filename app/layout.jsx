import "./globals.css";

export const metadata = {
  title: "GOS | Aerial Intelligence",
  description: "Global Online Solutions transforms aerial data into decision-ready geospatial intelligence.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
