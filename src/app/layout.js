import "./globals.css";

export const metadata = {
  title: " 🌍 Country Explorer",
  description: "Explore all the county we have all around the world.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={` antialiased`}>{children}</body>
    </html>
  );
}
