import Image from "next/image";
import Logo from "@/public/logo.png";

interface AdviceProps {
  comment: string;
}

const Advice = ({ comment }: AdviceProps) => {
  return (
    <div className="relative rounded-lg border-4 border-primary bg-gray-dark p-5 pt-8">
      <div className="absolute -top-5 left-0 right-0 flex justify-center">
        <Image src={Logo} alt="logo" width={30} />
      </div>
      <p className="tracking-wide text-white/80">
        {comment.split("\\n").map((item, i) => (
          <span className="mb-3 block" key={i}>
            {item}
          </span>
        ))}
      </p>
    </div>
  );
};

export default Advice;
