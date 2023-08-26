"use client";

import Container from "@/components/Container";
import Image, { StaticImageData } from "next/image";
import DesignImg from "@/public/design.png";
import DevImg from "@/public/dev.png";
import ProjectImg from "@/public/project.png";
import Title from "@/components/Title";
import Paragraph from "@/components/Paragraph";
import Button from "@/components/Button";
import Advice from "@/components/Advice";
import { useRouter } from "next/navigation";

interface ExpProps {
  params: { field: string };
}

const Exp = ({ params }: ExpProps) => {
  const router = useRouter();
  const jobText: { [key: string]: string } = {
    dev: "개발",
    design: "디자인",
    project: "기획",
  };
  const Img: { [key: string]: StaticImageData } = {
    dev: DevImg,
    design: DesignImg,
    project: ProjectImg,
  };
  return (
    <Container center>
      <Advice
        comment="
        개인 브랜딩의 여정에서 가장 중요한 단계는 바로 '자신을 알아가는
        것'이에요. 철학적이거나 비유적인 의미가 아니라, 진짜로 '자신을 알아가는
        것' 말이에요."
      />
      <Image src={Img[params.field]} alt={jobText[params.field]} width={250} />
      <Title center>
        당신은 {jobText[params.field]}과 관련된 경험이 있으신가요?
      </Title>
      <Paragraph center className="mb-5">
        과제나 취미, 혹은 해당 분야에 관련 하여 깊게 고찰해 보았던 경험도
        좋아요!
      </Paragraph>
      <Button
        color="green"
        onClick={() => {
          router.push(`/detail/nonexp/1/1`);
        }}
      >
        아직 경험이 없어요
      </Button>
      <Button
        onClick={() => {
          router.push(`/detail/exp/1/1`);
        }}
      >
        경험이 있어요
      </Button>
      <Button color="gray">해당 업종에 종사 중이에요</Button>
    </Container>
  );
};

export default Exp;
