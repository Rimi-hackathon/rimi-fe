import Image from "next/image";
import Logo from "@/public/logo.png";

interface AdviceProps {
  comment: string;
}

const Advice = ({ comment }: AdviceProps) => {
  return (
    <div className="bg-gray-dark relative rounded-lg border-4 border-primary p-5 pt-8">
      <div className="absolute -top-5 left-0 right-0 flex justify-center">
        <Image src={Logo} alt="logo" width={30} />
      </div>
      <p className="tracking-wide text-white/80">{comment}</p>
    </div>
  );
};

export default Advice;
