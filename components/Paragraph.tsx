import { cn } from "@/lib/utils";

interface ParagraphProps {
  children?: React.ReactNode;
  className?: string;
  center?: boolean;
  text?: string[];
}

const Paragraph = ({ children, className, center, text }: ParagraphProps) => {
  return (
    <p
      className={cn(
        "break-keep leading-7 tracking-wide text-white/70 ",
        className,
        center && "text-center",
      )}
    >
      {text?.map((item, index) => (
        <span className="block" key={index}>
          {item}
        </span>
      ))}
      {children}
    </p>
  );
};

export default Paragraph;
