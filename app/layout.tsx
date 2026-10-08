import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://getcomeup.com"),
  title: "Comeup — lock in with your friends",
  description:
    "Lock in with your friends. Proof photos from your squad, straight onto your home screen.",
  keywords: [
    "accountability app",
    "squad",
    "gym accountability",
    "proof photo",
    "home screen widget",
    "lock in",
    "discipline",
  ],
  icons: { icon: "/icon.png", apple: "/icon.png" },
  openGraph: {
    title: "Comeup — lock in with your friends",
    description:
      "Lock in with your friends. Proof photos from your squad, straight onto your home screen.",
    type: "website",
    url: "https://getcomeup.com",
    images: ["/icon.png"],
  },
  twitter: {
    card: "summary",
    title: "Comeup — lock in with your friends",
    description:
      "Lock in with your friends. Proof photos from your squad, straight onto your home screen.",
    images: ["/icon.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}
