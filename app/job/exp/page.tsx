import Container from "@/components/Container";
import Image from "next/image";
import DesignImg from "@/public/design.png";
import Title from "@/components/Title";
import Paragraph from "@/components/Paragraph";
import Button from "@/components/Button";
import Logo from "@/public/logo.png";

const Exp = () => {
  return (
    <Container>
      <div className="bg-gray-dark relative rounded-lg border-4 border-primary p-5 pt-8">
        <div className="absolute -top-5 left-0 right-0 flex justify-center">
          <Image src={Logo} alt="logo" width={30} />
        </div>
        <p className="tracking-wide text-white/80">
          개인 브랜딩의 여정에서 가장 중요한 단계는 바로 '자신을 알아가는
          것'이에요. 철학적이거나 비유적인 의미가 아니라, 진짜로 '자신을
          알아가는 것' 말이에요.
        </p>
      </div>
      <Image src={DesignImg} alt="디자인" width={300} />
      <Title center>당신은 디자인과 관련된 경험이 있으신가요?</Title>
      <Paragraph center className="mb-5">
        과제나 취미, 혹은 해당 분야에 관련 하여 깊게 고찰해 보았던 경험도
        좋아요!
      </Paragraph>
      <Button color="green">아직 경험이 없어요</Button>
      <Button>경험이 있어요</Button>
      <Button color="gray">해당 업종에 종사 중이에요</Button>
    </Container>
  );
};

export default Exp;
