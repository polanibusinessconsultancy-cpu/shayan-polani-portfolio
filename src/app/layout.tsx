import type { Metadata, Viewport } from "next";

export const viewport: Viewport = {
  themeColor: "#080A0F",
  width: "device-width",
  initialScale: 1,
};
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { NavRail } from "@/components/navigation/NavRail";
import { MobileNav } from "@/components/navigation/MobileNav";

const fontSans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const fontMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Shayan Polani | Creative Developer & Digital Product Builder",
  description:
    "Personal portfolio of Shayan Polani. Creative Developer and Digital Product Builder focused on modern web platforms, software engineering, and UI/UX design.",
  keywords: [
    "Shayan Polani",
    "Creative Developer",
    "Digital Product Builder",
    "Web Development",
    "UI/UX Design",
    "Next.js Developer",
    "Software Engineer",
    "Full Stack Developer",
  ],
  authors: [{ name: "Shayan Polani", url: "https://github.com/polanibusinessconsultancy-cpu" }],
  creator: "Shayan Polani",
  metadataBase: new URL("https://shayanpolani.dev"),
  openGraph: {
    title: "Shayan Polani | Creative Developer & Digital Product Builder",
    description: "I THINK. I DESIGN. I BUILD. I OPTIMIZE. I DELIVER.",
    type: "website",
    locale: "en_US",
    siteName: "Shayan Polani Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shayan Polani | Creative Developer & Digital Product Builder",
    description: "I THINK. I DESIGN. I BUILD. I OPTIMIZE. I DELIVER.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fontSans.variable} ${fontMono.variable}`}>
      <body className="bg-background text-text-primary antialiased font-sans selection:bg-accent selection:text-white">
        {/* Accessible Skip Link */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-accent focus:text-white focus:rounded focus:font-medium focus:text-sm"
        >
          Skip to main content
        </a>

        {/* Responsive Navigation Components */}
        <NavRail />
        <MobileNav />

        {/* Main Content Area (Offsetted on Desktop for Vertical Rail) */}
        <div className="lg:pl-20 min-h-screen flex flex-col justify-between">
          <main id="main-content">{children}</main>
        </div>
      </body>
    </html>
  );
}
