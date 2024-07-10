import type { Metadata } from "next";
import { Sora } from "next/font/google";

import "./globals.css";
import { ThemeProvider } from "./provider";

const sora = Sora({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "Izzy's Portfolio",
  description: "Experienced Full Stack developer Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={sora.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
