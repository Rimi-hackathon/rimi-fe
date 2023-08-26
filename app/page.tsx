"use client";
import Image from "next/image";
import Logo from "@/public/3d_logo.png";
import Title from "@/components/Title";
import Paragraph from "@/components/Paragraph";
import Button from "@/components/Button";
import { useRouter } from "next/navigation";
import Container from "@/components/Container";
import { signIn, signOut, useSession, getCsrfToken } from "next-auth/react";

export default function Home() {
  const router = useRouter();

  const { data: session } = useSession();
  console.log(session);

  return (
    <Container>
      <Image src={Logo} alt="3D Logo" width={200} />
      <Title>Rimi로 AI와 함께 5분만에 퍼스널 브랜딩을 시작해보세요.</Title>
      <Paragraph>
        3분만에 좋은 커리어를 쌓는 방법에 대해 배우고, 당신만의
        <span className="font-bold"> 퍼스널 브랜딩된 노션 페이지</span>
        까지 받을 수 있어요!
      </Paragraph>
      <Button
        onClick={() => {
          router.push("/job");
        }}
        className="mt-10"
        primary
      >
        시작하기
      </Button>
      <Button onClick={() => signIn()}>로그인</Button>
      <Button onClick={() => signOut()}>로그아웃</Button>
    </Container>
  );
}
