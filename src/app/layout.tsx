import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  title: "Avery Thompson — Product Developer",
  description:
    "Confident and approachable product developer blending strategy, code, and design to ship delightful digital experiences.",
  openGraph: {
    title: "Avery Thompson — Product Developer",
    description:
      "Confident and approachable product developer blending strategy, code, and design to ship delightful digital experiences.",
    url: "https://agentic-cc40a8e7.vercel.app",
    siteName: "Avery Thompson Portfolio",
    type: "website",
  },
  metadataBase: new URL("https://agentic-cc40a8e7.vercel.app"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${manrope.className} bg-slate-950 text-slate-100`}>
        {children}
      </body>
    </html>
  );
}
