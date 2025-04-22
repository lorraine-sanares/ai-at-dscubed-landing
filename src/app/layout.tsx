import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "AI³ | AI Cubed | University of Melbourne",
  description: "AI Cubed (AI³) - Empowering University of Melbourne students with cutting-edge AI technologies and resources",
  icons: {
    icon: '/iconlogo.png',
    apple: '/iconlogo.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <style dangerouslySetInnerHTML={{ __html: `
          .hidden-until-load {
            opacity: 0;
          }
          .hidden-until-load.loaded {
            opacity: 1;
            transition: opacity 0.5s ease-in-out;
          }
        `}} />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
        <script dangerouslySetInnerHTML={{ __html: `
          // Use requestAnimationFrame to run after paint
          window.addEventListener('load', function() {
            requestAnimationFrame(function() {
              document.querySelectorAll('.hidden-until-load').forEach(function(el) {
                el.classList.add('loaded');
              });
            });
          });
        `}} />
      </body>
    </html>
  );
}

