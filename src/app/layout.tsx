import type { Metadata } from "next";
import "./globals.css";
import Appbar from "./components/Appbar";

export const metadata: Metadata = {
  title: "Tally Forms",
  description: "Easy to create forms for free",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Appbar />
        {children}
      </body>
    </html>
  );
}
