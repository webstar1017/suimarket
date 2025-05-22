import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import '@mysten/dapp-kit/dist/index.css';
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SUI Prediction Markets",
  description: "Prediction markets on the SUI blockchain",
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
        <div className="flex flex-col h-screen relative">
          {/* Background layer with blur */}
          <div className="absolute inset-0">
            <div
              className="w-full h-full bg-[url('/img/background.jpg')] bg-cover" style={{
                backgroundColor: 'rgba(0, 0, 0, 0.7)',
                backgroundBlendMode: 'multiply'
              }}
            ></div>
            
          </div>

          {/* Content layer */}
          <main className="relative flex-1 overflow-auto z-10  !pr-[20px] !pl-[20px]">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}








