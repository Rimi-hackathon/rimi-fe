import { cn } from "@/lib/utils";

interface ButtonProps {
  children: React.ReactNode;
  primary?: boolean;
  color?: "green" | "gray";
  className?: string;
  onClick?: () => void;
}

const Button = ({
  children,
  primary,
  className,
  color,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={cn(
        "w-full rounded-lg bg-primary px-5 py-3 text-lg font-semibold text-white",
        className,
        primary && "bg-primary",
        color === "green" && "bg-green",
        color === "gray" && "bg-gray",
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
