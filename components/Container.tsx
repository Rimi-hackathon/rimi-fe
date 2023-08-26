import { cn } from "@/lib/utils";

interface ContainerProps {
  children: React.ReactNode;
  center?: boolean;
  lg?: boolean;
}

const Container = ({ children, center }: ContainerProps) => {
  return (
    <div className=" flex h-full min-h-screen w-full max-w-md items-start justify-start overflow-y-auto bg-bg p-10">
      <main
        className={cn(
          "flex min-h-full w-full flex-col justify-center gap-5",
          center && "items-center",
        )}
      >
        {children}
      </main>
    </div>
  );
};

export default Container;
