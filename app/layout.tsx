import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Strategem She | Political Campaign Consulting & Speakers Bureau",
  description: "Strategem She is a minority, female-owned political consulting firm with 37+ years of experience shaping winning campaigns, developing leaders, and translating culture into strategy.",
  keywords: "political consulting, campaign strategy, speakers bureau, leadership development, Sharon Evans, political campaign management",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-body antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
