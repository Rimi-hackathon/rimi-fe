"use client";
import Container from "@/components/Container";
import Image from "next/image";
import Paper from "@/public/paper.png";
import { useRecoilState } from "recoil";
import { main } from "@/lib/recoil";
import Title from "@/components/Title";
import Paragraph from "@/components/Paragraph";
import Logo from "@/public/logo.png";
import { useState } from "react";
import Button from "@/components/Button";

const Result = () => {
  const [state] = useRecoilState(main);
  const [advice, setAdvice] = useState(
    "안녕하세요.안녕하세요.안녕하세요.안녕하세요.안녕하세요.안녕하세요.안녕하세요.",
  );
  return (
    <Container center>
      <Image src={Paper} alt="document" width={250} />
      <Title center>
        {state.name}님의 퍼스널 브랜딩 페이지가 완성되었어요!
      </Title>
      <Paragraph center>
        앞으로 업데이트 될 Rimi와도 함께해요! 노션에 로그인하고 오른쪽 상단에
        복제하기를 눌러주세요! 복제하여 저장한 뒤, 오른쪽 상단의 공유-{">"} 게시
        -{">"} 웹에 게시 를 통해 웹페이지로 게시할 수 있어요!
      </Paragraph>

      <div className="flex flex-col gap-5">
        <div className="flex items-center gap-3">
          <Image src={Logo} alt="logo" width={30} />
          <Title>Rimi의 조언</Title>
        </div>
        <div className="relative mb-5 rounded-xl border-4 border-primary bg-gray-dark p-5">
          <p className="tracking-wide text-white/80">{advice}</p>
        </div>
      </div>
      <Button>생성된 노션 페이지로 이동하기</Button>
      <Button color="green">노션 링크 복사하기</Button>
    </Container>
  );
};

export default Result;
