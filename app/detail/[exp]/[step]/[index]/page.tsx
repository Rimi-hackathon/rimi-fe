"use client";

import Button from "@/components/Button";
import Container from "@/components/Container";
import Paragraph from "@/components/Paragraph";
import Progress from "@/components/Progress";
import Title from "@/components/Title";
import Logo from "@/public/logo.png";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { main } from "@/lib/recoil";
import axios from "axios";

const Detail = ({
  params,
}: {
  params: { step: string; index: string; exp: string };
}) => {
  const [state, setState] = useRecoilState(main);
  const contents: { [key: string]: any } = {
    nonexp: [
      [
        {
          icon: "😊",
          title: `시작하는 단계네요! ${state.field}에 관심을 가지게 된 계기나 이유가 있나요?`,
          sub: [
            "어떤 생각 혹은 경험이 특별했나요?",
            "아주 사소한 것도 좋아요!",
          ],
          next: "/detail/nonexp/0/1",
        },
        {
          icon: "🚀",
          title:
            "우리 인생에는 크고 작은 도전들이 가득해요. 그런 순간이 언제였는지 기억해보고, 어떻게 해결했는지 말씀해주세요!",
          sub: [
            "첫 자동차를 직접 수리하고 성공적으로 작동시킨 순간과 같이, 거창하지 않은 일상의 경험들도 좋아요.",
            "Rimi가 당신의 경험을 멋지게 만들어 드릴게요!",
          ],
          next: "/detail/nonexp/1/0",
        },
      ],
      [
        {
          icon: "📚",
          title:
            "당신만의 독특한 취미나 특기는 무엇인가요? 그것이 당신에게 어떤 영향을 미치는지 이야기해주세요.",
          sub: [
            "하루의 일과가 끝날 때 하는 습관이나 루틴 같은 것도 좋아요!",
            "그것을 할 때 어떤 느낌을 받나요?",
          ],
          next: "/detail/nonexp/2/0",
        },
      ],
      [
        {
          icon: "🌠",
          title:
            "3년 후의 당신은 어떤 별을 향하고 있나요? 당신의 꿈이나 목표는 무엇인가요?",
          sub: ["포괄적이거나 사소한 꿈도도 괜찮아요!"],
          next: "/detail/nonexp/2/1",
        },
        {
          icon: "⏱️",
          title:
            "삶에서 당신을 안내하는 가장 중요한 원칙이나 가치는 무엇인가요",
          sub: [
            "당신이 중요하게 생각하는 우정, 가족에 대한 사랑",
            "진실을 추구하는 정직함 같은 것일 수도 있어요.",
            "사랑 부터 큰 신념까지, 무엇이든 괜찮아요!",
          ],
          next: "/detail/nonexp/3/0",
        },
      ],
      [
        {
          icon: "🎖️",
          title:
            "수상이나 자격증 중 기억에 남는 것들이 있나요? 쉼표로 구분하여 알려주세요!",
          sub: [
            "예시)",
            "OO 대회 대상 (2022), 1종 보통 운전 면허, OO 산업 기사(2023), OO대학교 장학생 (2023)",
          ],
          next: "/detail/nonexp/4/0",
        },
      ],
      [
        {
          icon: "📱",
          title:
            "마지막으로 퍼스널 브랜딩 페이지에 들어갈 추가 정보들을 입력해 볼까요?",
          sub: ["보유하지 않은 항목은 공백으로 두어도 좋아요!"],
        },
      ],
    ],
    exp: [
      [
        {
          icon: "🔎",
          title: `${state.field}와 관련된 경험에 대해 이야기해 주세요! 어떤 일을 했나요?`,
          sub: [
            "프로젝트에서 작은 앱을 만들어 본 경험이거나,",
            "친구들과 함께 기획한 작은 이벤트,",
            "혹은 스케치북에 그린 디자인 아이디어 같은 것들 말이에요!",
          ],
          next: "/detail/exp/0/1",
        },
        {
          icon: "😊",
          title: `${state.field}에 관심을 가지게 된 계기나 이유가 있나요?`,
          sub: [
            "첫 자동차를 직접 수리하고 성공적으로 작동시킨 순간과 같이, 거창하지 않은 일상의 경험들도 좋아요.",
            "Rimi가 당신의 경험을 멋지게 만들어 드릴게요!",
          ],
          next: "/detail/exp/0/2",
        },
        {
          icon: "🚀",
          title:
            "우리 인생에는 크고 작은 도전들이 가득해요. 그런 순간이 언제였는지 기억해보고, 어떻게 해결했는지 말씀해주세요!",
          sub: [
            "첫 자동차를 직접 수리하고 성공적으로 작동시킨 순간과 같이, 거창하지 않은 일상의 경험들도 좋아요.",
            "Rimi가 당신의 경험을 멋지게 만들어 드릴게요!",
          ],
          next: "/detail/exp/1/0",
        },
      ],
      [
        {
          icon: "📚",
          title:
            "당신만의 독특한 취미나 특기는 무엇인가요? 그것이 당신에게 어떤 영향을 미치는지 이야기해주세요.",
          sub: [
            "하루의 일과가 끝날 때 하는 습관이나 루틴 같은 것도 좋아요!",
            "그것을 할 때 어떤 느낌을 받나요?",
          ],
          next: "/detail/exp/2/0",
        },
      ],
      [
        {
          icon: "🌠",
          title:
            "3년 후의 당신은 어떤 별을 향하고 있나요? 당신의 꿈이나 목표는 무엇인가요?",
          sub: ["포괄적이거나 사소한 꿈도도 괜찮아요!"],
          next: "/detail/exp/2/1",
        },
        {
          icon: "⏱️",
          title:
            "삶에서 당신을 안내하는 가장 중요한 원칙이나 가치는 무엇인가요",
          sub: [
            "당신이 중요하게 생각하는 우정, 가족에 대한 사랑",
            "진실을 추구하는 정직함 같은 것일 수도 있어요.",
            "사랑 부터 큰 신념까지, 무엇이든 괜찮아요!",
          ],
          next: "/detail/exp/3/0",
        },
      ],
      [
        {
          icon: "🧩",
          title: `${state.field}와 관련하여 배울 예정 이거나 가지고 있는 기술들이 있나요? 쉼표로 구분하여 알려주세요!`,
          sub: [
            "예시)",
            "figma (배우는 중), nodejs(숙달 됨), MS Office (배울 예정)",
          ],
          next: "/detail/exp/3/1",
        },
        {
          icon: "🎖️",
          title:
            "수상이나 자격증 중 기억에 남는 것들이 있나요? 쉼표로 구분하여 알려주세요!",
          sub: [
            "예시)",
            "OO 대회 대상 (2022), 1종 보통 운전 면허, OO 산업 기사(2023), OO대학교 장학생 (2023)",
          ],
          next: "/detail/exp/4/0",
        },
      ],
      [
        {
          icon: "📱",
          title:
            "마지막으로 퍼스널 브랜딩 페이지에 들어갈 추가 정보들을 입력해 볼까요?",
          sub: ["보유하지 않은 항목은 공백으로 두어도 좋아요!"],
        },
      ],
    ],
  };
  const stepLabel = ["경험", "특기", "가치", "자격", "정보"];
  const router = useRouter();
  const [text, setText] = useState("");
  const [advice, setAdvice] = useState("");
  const content =
    contents[params.exp][Number(params.step)][Number(params.index)];
  const getContent = () => {
    const question = content.title;
    const answer = "안되는 것들을 해내는 게 재밌다";
    axios
      .post(
        "https://f3e2-183-96-52-165.ngrok-free.app/api/advice",
        {
          question,
          answer,
        },
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
        },
      )
      .then((res) => {
        console.log(res);
      });
  };

  getContent();

  return (
    <Container>
      <Progress
        text={`${stepLabel[Number(params.step)]} ${Math.min(
          (Number(params.index) + 1) *
            Math.ceil(
              100 / (contents[params.exp][params.step] as Array<Object>).length,
            ),
          100,
        )}%`}
        step={params.step}
      />
      <div className="mb-5 mt-16 flex flex-col gap-3">
        <p className="mb-3 text-9xl">
          {
            // @ts-ignore
            content.icon
          }
        </p>
        <Title>
          {
            // @ts-ignore
            content.title
          }
        </Title>
        <Paragraph
          text={
            //@ts-ignore
            content.sub
          }
        />
      </div>
      {params.step !== "4" && (
        <>
          <div className="mb-5 w-full">
            <textarea
              className="h-48 w-full select-none resize-none rounded-lg p-5 outline-none ring-primary focus:ring-4"
              placeholder="내용을 입력해주세요."
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
            <p className="text-sm text-white/80">최소 30자| 최대 300자</p>
          </div>
          {advice && (
            <>
              <div className="flex items-center gap-3">
                <Image src={Logo} alt="logo" width={30} />
                <Title>Rimi의 조언</Title>
              </div>
              <div className="relative mb-5 rounded-xl border-4 border-primary bg-gray-dark p-5">
                <p className="tracking-wide text-white/80">{advice}</p>
              </div>
            </>
          )}
          <Button
            disabled={text.length < 30}
            color="green"
            onClick={() =>
              setAdvice(
                "개인 브랜딩의 여정에서 가장 중요한 단계는 바로 '자신을 알아가는 것'이에요. 철학적이거나 비유적인 의미가 아니라, 진짜로 '자신을 알아가는 것' 말이에요.",
              )
            }
          >
            Rimi에게 조언받기
          </Button>

          <Button
            onClick={() => {
              router.push(
                //@ts-ignore
                content.next,
              );
            }}
            disabled={text.length < 30}
          >
            다음 질문
          </Button>
        </>
      )}
      {params.step === "4" && (
        <>
          <div className="flex flex-col gap-3 text-white">
            <label className="text-xl">
              <span className="text-red-500">*</span> 이름
            </label>
            <input
              type="text"
              className="rounded-lg p-3 py-4 text-black outline-none ring-primary focus:ring-4"
              placeholder="홍길동"
              value={state.name}
              onChange={(e) =>
                setState((prev) => ({ ...prev, name: e.target.value }))
              }
            />
          </div>
          <div className="flex flex-col gap-3 text-white">
            <label className="text-xl">
              <span className="text-red-500">*</span> 이메일 주소
            </label>
            <input
              type="text"
              className="rounded-lg p-3 py-4 text-black outline-none ring-primary focus:ring-4"
              placeholder="rimi@email.com"
              value={state.email}
              onChange={(e) =>
                setState((prev) => ({ ...prev, email: e.target.value }))
              }
            />
          </div>
          <div className="flex flex-col gap-3 text-white">
            <label className="text-xl">SNS 주소</label>
            <input
              type="text"
              className="rounded-lg p-3 py-4 text-black outline-none ring-primary focus:ring-4"
              placeholder="instagram.com/rimi"
              value={state.sns}
              onChange={(e) =>
                setState((prev) => ({ ...prev, sns: e.target.value }))
              }
            />
          </div>
          <div className="mb-5 flex flex-col gap-3 text-white">
            <label className="text-xl">개인 사이트 주소</label>
            <input
              type="text"
              className="rounded-lg p-3 py-4 text-black outline-none ring-primary focus:ring-4"
              placeholder="google.com"
              value={state.site}
              onChange={(e) =>
                setState((prev) => ({ ...prev, site: e.target.value }))
              }
            />
          </div>
          <Button
            onClick={() => {
              router.push("/result");
            }}
          >
            다 했어요!
          </Button>
        </>
      )}
    </Container>
  );
};

export default Detail;
