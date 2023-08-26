"use client";

import "./globals.css";
import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import { cn } from "@/lib/utils";
import { RecoilRoot } from "recoil";

const noto = Noto_Sans({ subsets: ["latin"], weight: ["400", "600", "700"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <head>
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="Rimi로 AI와 함께 5분만에 퍼스널 브랜딩을 시작해보세요."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Rimi</title>
      </head>
      <body
        className={cn(noto.className, "flex h-screen justify-center bg-bg/80")}
      >
        <RecoilRoot>{children}</RecoilRoot>
      </body>
    </html>
  );
}
