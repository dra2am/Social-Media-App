import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "All Curls App",
  description: "Ecommerce app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
