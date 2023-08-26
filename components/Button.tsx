import { cn } from "@/lib/utils";

interface ButtonProps {
  children: React.ReactNode;
  primary?: boolean;
  color?: "green" | "gray";
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
}

const Button = ({
  children,
  primary,
  className,
  color,
  disabled,
  ...props
}: ButtonProps) => {
  return (
    <>
      <button
        className={cn(
          "w-full rounded-lg bg-primary px-5 py-3 text-lg font-semibold text-white transition-all hover:bg-opacity-80",
          className,
          primary && "bg-primary",
          color === "green" && "bg-green",
          color === "gray" && "bg-gray",
          disabled &&
            "cursor-not-allowed bg-gray-500 opacity-50 hover:bg-opacity-100",
        )}
        {...props}
      >
        {children}
      </button>
    </>
  );
};

export default Button;
