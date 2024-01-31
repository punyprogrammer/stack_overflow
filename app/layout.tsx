import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import React from "react";
import { Inter, Space_Grotesk } from "next/font/google";
import type { Metadata } from "next";
import { ThemeProvider } from "@/context/themeProvider";

export const metadata: Metadata = {
  title: "Stuck Overflow",
  description:
    "Discover a thriving online community dedicated to software development at our website. Ask questions, seek solutions, and connect with experts to unlock the answers to your programming queries. Join us today and elevate your coding journey.",
  icons: { icon: "/assets/images/favicon.ico" },
};
// defining font variables
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
const spaceGrotesk = Space_Grotesk({
  variable: "--font-spaceGrotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${spaceGrotesk.variable}`}>
        <ThemeProvider>
          <>
            <ClerkProvider
              appearance={{
                elements: {
                  formButtonPrimary: "primary-gradient",
                  footerActionLink:
                    "primary-text-gradient hover:text-primary-500",
                },
              }}
            >
              {children}
            </ClerkProvider>
          </>
        </ThemeProvider>
      </body>
    </html>
  );
}
