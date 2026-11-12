import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mayank Shukla | Brand Partnerships × Culture × Experiences",
  description:
    "Mayank Shukla makes brands part of the culture: brand partnerships, experiences and campaigns built across media, entertainment and culture. Currently Manager, Brand Partnerships & Experiences at Rolling Stone India.",
  metadataBase: new URL("https://mayankshukla.example"),
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${montserrat.variable} h-full`}
    >
      <body className="min-h-full flex flex-col bg-off-white text-black antialiased">
        <div className="grain" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
