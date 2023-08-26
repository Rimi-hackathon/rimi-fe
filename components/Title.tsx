import { cn } from "@/lib/utils";

interface TitleProps {
  children?: React.ReactNode;
  center?: boolean;
  text?: string[];
}

const Title = ({ children, center, text }: TitleProps) => {
  return (
    <h2
      className={cn(
        center && "text-center",
        "break-keep text-2xl font-semibold leading-relaxed tracking-wide text-white",
      )}
    >
      {text?.map((item, index) => <p key={index}>{item}</p>)}
      {children}
    </h2>
  );
};
export default Title;
