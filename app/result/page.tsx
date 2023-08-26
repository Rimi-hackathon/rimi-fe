"use client";
import Container from "@/components/Container";
import Image from "next/image";
import Paper from "@/public/paper.png";
import { useRecoilState } from "recoil";
import { main } from "@/lib/recoil";
import Title from "@/components/Title";
import Paragraph from "@/components/Paragraph";

const Result = () => {
  const [state] = useRecoilState(main);
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
    </Container>
  );
};

export default Result;
