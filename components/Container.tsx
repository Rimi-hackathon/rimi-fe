import { cn } from "@/lib/utils";

interface ContainerProps {
  children: React.ReactNode;
  center?: boolean;
}

const Container = ({ children, center }: ContainerProps) => {
  return (
    <main
      className={cn(
        "flex min-h-full w-full flex-col items-center justify-center gap-5",
        center && "items-center",
      )}
    >
      {children}
    </main>
  );
};

export default Container;
