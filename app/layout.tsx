import type { Metadata } from "next";
import { worksans } from "./styles/font";
import "./globals.css";
import 'easymde/dist/easymde.min.css'

export const metadata: Metadata = {
  title: "Startup Ideas",
  description: "Pitch, Vote, and Grow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={worksans.className}
      >
        {children}
      </body>
    </html>
  );
}
