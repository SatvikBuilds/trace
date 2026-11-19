import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TRACE AI — AML Graph Intelligence",
  description: "Dynamic graph intelligence for anti-money laundering investigations.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
