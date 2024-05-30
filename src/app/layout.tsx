import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Import the Font Awesome styles manually
import "@fortawesome/fontawesome-svg-core/styles.css";

// Get the configuration object
import { config } from "@fortawesome/fontawesome-svg-core";
import { Providers } from "../providers";

// Prevent Font Awesome from adding its CSS since we did it manually above
config.autoAddCss = false;

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cinemania",
  description:
    "Discover and interact in a world of movies at your fingertips! Dive into synopsis, rating and more in cinemania today.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* This icon is used when the website is saved to the home screen of an Apple device. */}
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/assets/icons/apple-touch-icon.png"
        />

        {/* Favicon is a small icon that is displayed in the browser's tab or bookmark bar. */}
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/assets/icons/favicon-32x32.png"
        />

        {/* This is a smaller version of the favicon used in certain contexts. */}
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/assets/icons/favicon-16x16.png"
        />

        {/* Links manifest file that provides information about the web application, such as its name, icons, and other properties in PWAs. */}
        <link rel="manifest" href="/assets/icons/site.webmanifest" />
      </head>
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
