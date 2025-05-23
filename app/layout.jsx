import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./Components/js/Header";
import Footer from "./Components/js/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "OREL Фильмы",
  description: "Киностудия OREL Фильмы",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <div className="container mx-auto">
          {children}
        </div>
        <br /><br />
        <Footer />
      </body>
    </html>
  );
}
