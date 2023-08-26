import { cn } from "@/lib/utils";

interface CardProps {
  children: React.ReactNode;
  title: string;
  onClick?: () => void;
  selected?: boolean;
  disabled?: boolean;
}

const Card = ({ children, title, onClick, selected, disabled }: CardProps) => {
  return (
    <button
      onClick={() => {
        !disabled && onClick && onClick();
      }}
      className={cn(
        "flex aspect-square w-full flex-col items-center justify-between rounded-lg border-2 border-[#405671] bg-[#405671] p-3 text-white hover:bg-opacity-80",
        selected && "border-2 border-primary",
        disabled &&
          "cursor-not-allowed bg-gray-500 opacity-30 hover:bg-opacity-100",
      )}
    >
      {children}
      <p className="text-lg text-white">{title}</p>
    </button>
  );
};

export default Card;
