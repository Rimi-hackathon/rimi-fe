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
import { useRecoilState } from "recoil";
import { main } from "@/lib/recoil";

interface ExpProps {
  params: { field: string };
}

const Exp = ({ params }: ExpProps) => {
  const router = useRouter();
  const [, setState] = useRecoilState(main);
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
        것' 말이에요.\n \n 1. 자신을 진정성 있게 만드는 요소 파악하기\n2. 자신의 강점과 역량 파악하기\n3. 다른 사람과 차별화되는 요소 파악하기\n \n그래야만 채용 담당자, 고객, 투자자 또는 비즈니스 파트너가 여러분을 진지하게 받아들일 수 있습니다."
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
          setState((prev) => ({
            ...prev,
            exp: "nonexp",
          }));
          router.push(`/detail/nonexp/0/0`);
        }}
      >
        아직 경험이 없어요
      </Button>
      <Button
        onClick={() => {
          setState((prev) => ({
            ...prev,
            exp: "exp",
          }));
          router.push(`/detail/exp/0/0`);
        }}
      >
        경험이 있어요
      </Button>
      <Button color="gray">해당 업종에 종사 중이에요</Button>
    </Container>
  );
};

export default Exp;
