import type { Metadata } from "next";
import { FilterProvider } from "@/context/FilterContext";

import "./globals.css";

export const metadata: Metadata = {
  title: "Job Listings",
  description: "List of Jobs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <FilterProvider>{children}</FilterProvider>
      </body>
    </html>
  );
}
