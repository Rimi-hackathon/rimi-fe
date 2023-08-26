import { cn } from "@/lib/utils";

interface ParagraphProps {
  children: React.ReactNode;
  className?: string;
}

const Paragraph = ({ children, className }: ParagraphProps) => {
  return (
    <p
      className={cn("text-sm leading-7 tracking-wide text-white/70", className)}
    >
      {children}
    </p>
  );
};

export default Paragraph;
