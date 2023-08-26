import Button from "@/components/Button";
import Container from "@/components/Container";
import Paragraph from "@/components/Paragraph";
import Progress from "@/components/Progress";
import Title from "@/components/Title";
import Logo from "@/public/logo.png";
import Image from "next/image";

const Detail = ({ params }: { params: { step: string; index: string } }) => {
  const stepLabel = ["경험", "특기", "가치", "자격", "정보"];
  return (
    <Container>
      <Progress
        text={`${stepLabel[Number(params.step) - 1]} ${
          Number(params.index) * 50
        }%`}
        step={params.step}
      />
      <div className="mb-5 mt-16 flex flex-col gap-3">
        <p className="text-9xl">😊</p>
        <Title
          text={[
            "시작하는 단계네요!",
            "개발에 관심을 가지게 된 계기나 이유가 있나요?",
          ]}
        />
        <Paragraph
          text={[
            "어떤 생각 혹은 경험이 특별했나요?",
            "아주 사소한 것도 좋아요!",
          ]}
        />
      </div>
      <div className="mb-5 w-full">
        <textarea
          className="h-48 w-full select-none resize-none rounded-lg p-5 outline-none ring-primary focus:ring-4"
          placeholder="내용을 입력해주세요."
        />
        <p className="text-sm text-white/80">최소 30자| 최대 300자</p>
      </div>

      <div className="flex items-center gap-3">
        <Image src={Logo} alt="logo" width={30} />
        <Title>Rimi의 조언</Title>
      </div>
      <div className="relative mb-5 rounded-xl border-4 border-primary bg-gray-dark p-5">
        <p className="tracking-wide text-white/80">
          개인 브랜딩의 여정에서 가장 중요한 단계는 바로 '자신을 알아가는
          것'이에요. 철학적이거나 비유적인 의미가 아니라, 진짜로 '자신을
          알아가는 것' 말이에요.
        </p>
      </div>

      <Button color="green">Rimi에게 조언받기</Button>
      <Button>다음 질문</Button>
    </Container>
  );
};

export default Detail;
