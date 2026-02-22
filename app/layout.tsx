import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { RootProvider } from "@/lib/providers";
import { Toaster } from "@/components/ui";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { AppDrawers } from "@/components/drawers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Social Media",
  description: "A social media web application using free api as a backend service",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <RootProvider>
          <Header />
          <main className="pt-16">
            {children}
          </main>
          <Footer />
          <AppDrawers />
        </RootProvider>
        <Toaster />
      </body>
    </html >
  );
}
