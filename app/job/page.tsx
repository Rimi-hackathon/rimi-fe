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
import { useState } from "react";
import { useRecoilState } from "recoil";
import { main } from "@/lib/recoil";

const Job = () => {
  const router = useRouter();
  const [job, setJob] = useState("");
  const [, setState] = useRecoilState(main);
  return (
    <Container center>
      <Image src={Logo} alt="3D Logo" width={60} />
      <Title center>훗 날 어떤 일을 하고 싶으신가요?</Title>
      <Paragraph center>
        아직 명확하게 방향을 정하지 않았거나, 경험이 없어도 괜찮아요.
      </Paragraph>
      <div className="flex w-full gap-5">
        <Card
          onClick={() => {
            setJob("design");
          }}
          title="디자인"
          selected={job === "design"}
        >
          <Image src={DesignImg} alt="디자인" width={110} />
        </Card>
        <Card
          onClick={() => {
            setJob("dev");
          }}
          title="개발"
          selected={job === "dev"}
        >
          <Image src={DevImg} alt="개발" width={110} />
        </Card>
      </div>
      <div className="flex w-full gap-5">
        <Card
          onClick={() => {
            setJob("project");
          }}
          title="기획"
          selected={job === "project"}
        >
          <Image src={ProjectImg} alt="기획" width={110} />
        </Card>
        <Card
          title="목록에 없어요"
          onClick={() => {
            setJob("none");
          }}
          selected={job === "none"}
          disabled
        >
          <Image src={NoneImg} alt="목록에 없어요" width={110} />
        </Card>
      </div>

      <Paragraph className="underline" center>
        아직 방향을 정하지 못했어요
      </Paragraph>
      <Button
        primary
        onClick={() => {
          setState((prev) => ({
            ...prev,
            field:
              job === "dev"
                ? "개발"
                : job === "design"
                ? "디자인"
                : job === "project"
                ? "기획"
                : "없음",
          }));
          router.push(`/job/${job}`);
        }}
        disabled={!job}
      >
        선택하기
      </Button>
    </Container>
  );
};

export default Job;
