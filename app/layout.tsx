import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ADITYA JADHAV // WEB DEVELOPER v1.0 (1997)",
  description: "Building the Future on a Dial-Up Connection - Modern Code. Vintage Internet.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="scanlines"></div>
        {children}
      </body>
    </html>
  );
}
