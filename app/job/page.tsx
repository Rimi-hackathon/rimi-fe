"use client";

import Container from "@/components/Container";
import Image from "next/image";
import Logo from "@/public/logo.png";
import Title from "@/components/Title";
import Paragraph from "@/components/Paragraph";
import Button from "@/components/Button";
import Card from "@/components/Card";
import DesignImg from "@/public/design.png";
import DevImg from "@/public/dev.png";
import ProjectImg from "@/public/project.png";
import NoneImg from "@/public/none.png";
import { useRouter } from "next/navigation";

const Job = () => {
  const router = useRouter();
  return (
    <Container center>
      <Image src={Logo} alt="3D Logo" width={60} priority />
      <Title center>훗 날 어떤 일을 하고 싶으신가요?</Title>
      <Paragraph center>
        아직 명확하게 방향을 정하지 않았거나, 경험이 없어도 괜찮아요.
      </Paragraph>
      <div className="my-5 grid aspect-square w-full grid-cols-2 grid-rows-2 gap-5">
        <Card title="디자인">
          <Image src={DesignImg} alt="디자인" width={110} priority />
        </Card>
        <Card title="개발">
          <Image src={DevImg} alt="개발" width={110} priority />
        </Card>
        <Card title="기획">
          <Image src={ProjectImg} alt="기획" width={110} priority />
        </Card>
        <Card title="목록에 없어요">
          <Image src={NoneImg} alt="목록에 없어요" width={110} priority />
        </Card>
      </div>
      <Paragraph className="underline" center>
        아직 방향을 정하지 못했어요
      </Paragraph>
      <Button
        primary
        onClick={() => {
          router.push("/job/exp");
        }}
      >
        선택하기
      </Button>
    </Container>
  );
};

export default Job;
