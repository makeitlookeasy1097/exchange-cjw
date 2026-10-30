import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = { title: "지우의 iPhone", description: "가상의 iPhone 시뮬레이터" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ko"><body>{children}</body></html>;
}
