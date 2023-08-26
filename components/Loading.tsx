import Title from "./Title";
import Logo from "@/public/3d_logo.png";
import Image from "next/image";

const Loading = () => {
  return (
    <div className="absolute bottom-0 left-0 right-0 top-0 z-10 flex flex-col items-center justify-center gap-8 bg-bg p-5">
      <div className="relative flex h-36 w-36 items-center justify-center rounded-full bg-primary">
        <div className="absolute bottom-0 left-0 right-0 top-0 animate-ping rounded-full bg-primary/80" />
        <Image src={Logo} alt="logo" width="72" className="drop-shadow-lg" />
      </div>
      <Title center>Rimi가 당신을 분석하고 멋지게 브랜딩하는 중이에요</Title>
    </div>
  );
};

export default Loading;
