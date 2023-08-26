import Container from "@/components/Container";
import Progress from "@/components/Progress";

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
    </Container>
  );
};

export default Detail;
