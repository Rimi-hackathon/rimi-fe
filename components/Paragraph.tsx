import { cn } from "@/lib/utils";

interface ParagraphProps {
  children: React.ReactNode;
  className?: string;
  center?: boolean;
}

const Paragraph = ({ children, className, center }: ParagraphProps) => {
  return (
    <p
      className={cn(
        "break-keep leading-7 tracking-wide text-white/70 ",
        className,
        center && "text-center",
      )}
    >
      {children}
    </p>
  );
};

export default Paragraph;
