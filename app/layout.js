import { Inter, Playfair_Display } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "@/app/globals.css";

const headingFont = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap"
});

const bodyFont = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap"
});

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
  title: {
    default: "EVpedia News | Modern Headlines and Deep Coverage",
    template: "%s | EVpedia News"
  },
  description:
    "A modern Next.js news website covering mobility, energy, climate, business, and technology.",
  openGraph: {
    title: "EVpedia News",
    description:
      "A modern Next.js news website covering mobility, energy, climate, business, and technology.",
    type: "website",
    url: "/",
    siteName: "EVpedia News"
  },
  twitter: {
    card: "summary_large_image",
    title: "EVpedia News",
    description:
      "A modern Next.js news website covering mobility, energy, climate, business, and technology."
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${headingFont.variable} ${bodyFont.variable} bg-[--page-bg-dark] text-white`}
      >
        <div className="min-h-screen">
          <Navbar />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
