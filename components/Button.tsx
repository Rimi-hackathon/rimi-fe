import { cn } from "@/lib/utils";

interface ButtonProps {
  children: React.ReactNode;
  primary?: boolean;
  className?: string;
}

const Button = ({ children, primary, className, ...props }: ButtonProps) => {
  return (
    <button
      className={cn(
        "w-full rounded-md bg-primary px-5 py-3 text-xl font-bold text-white",
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
