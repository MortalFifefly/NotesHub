import { Inter } from "next/font/google";
import "./globals.css";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="m-0 bg-slate-800">{children}</body>
    </html>
  );
}
