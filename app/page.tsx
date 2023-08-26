import Image from "next/image";
import Logo from "@/public/3d_logo.png";
import Title from "@/components/Title";
import Paragraph from "@/components/Paragraph";
import Button from "@/components/Button";

export default function Home() {
  return (
    <main className="flex flex-col gap-8">
      <Image src={Logo} alt="3D Logo" width={200} />
      <Title>Remi로 AI와 함께 5분만에 퍼스널 브랜딩을 시작해보세요.</Title>
      <Paragraph>
        3분만에 좋은 커리어를 쌓는 방법에 대해 배우고, 당신만의 퍼스널 브랜딩된
        노션 페이지까지 받을 수 있어요!
      </Paragraph>
      <Button className="mt-10" primary>
        시작하기
      </Button>
    </main>
  );
}
