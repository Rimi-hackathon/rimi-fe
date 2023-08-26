import { cn } from "@/lib/utils";

interface TitleProps {
  children: React.ReactNode;
  center?: boolean;
}

const Title = ({ children, center }: TitleProps) => {
  return (
    <h2
      className={cn(
        center && "text-center",
        "break-keep text-2xl font-semibold tracking-wide text-white",
      )}
    >
      {children}
    </h2>
  );
};
export default Title;
