"use client";

import "./globals.css";
import { Noto_Sans } from "next/font/google";
import { cn } from "@/lib/utils";
import { RecoilRoot } from "recoil";
import { SessionProvider } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";

const noto = Noto_Sans({ subsets: ["latin"], weight: ["400", "600", "700"] });

export default function RootLayout({
  children,
  session,
}: {
  children: React.ReactNode;
  session: any;
}) {
  const router = useRouter();
  const bodyRef: any = useRef();

  useEffect(() => {
    if (!session) router.push("/");
  }, [session]);
  return (
    <html lang="ko">
      <head>
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="Rimi로 AI와 함께 5분만에 퍼스널 브랜딩을 시작해보세요."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Rimi-AI 퍼스널 브랜딩</title>
      </head>
      <body
        ref={bodyRef}
        className={cn(noto.className, "flex h-screen justify-center bg-bg/80")}
      >
        <SessionProvider session={session}>
          <RecoilRoot>{children}</RecoilRoot>
        </SessionProvider>
      </body>
    </html>
  );
}
