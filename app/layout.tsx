import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { AppChrome } from "@/components/AppChrome";
import "./globals.css";

const inter = Inter({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Review Course | Đánh giá môn học & doanh nghiệp",
  description: "Review môn học và doanh nghiệp - chia sẻ trải nghiệm học tập và thực tập",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body className={`${inter.variable} flex min-h-screen flex-col font-sans antialiased`}>
        <AppChrome>{children}</AppChrome>
      </body>
    </html>
  );
}
