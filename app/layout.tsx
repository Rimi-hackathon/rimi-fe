import "./globals.css";
import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import { cn } from "@/lib/utils";

const noto = Noto_Sans({ subsets: ["latin"], weight: ["400", "600", "700"] });

export const metadata: Metadata = {
  title: "Rimi",
  description: "퍼스널 브랜딩 with AI",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body
        className={cn(noto.className, "flex h-screen justify-center bg-bg/80")}
      >
        <div className="flex h-full w-full max-w-md items-center bg-bg p-10">
          {children}
        </div>
      </body>
    </html>
  );
}
