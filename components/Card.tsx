import { cn } from "@/lib/utils";

interface CardProps {
  children: React.ReactNode;
  title: string;
  onClick?: () => void;
  selected?: boolean;
}

const Card = ({ children, title, onClick, selected }: CardProps) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "flex aspect-square w-full flex-col items-center justify-between rounded-lg border-2 border-[#405671] bg-[#405671] p-3 text-white",
        selected && "border-2 border-primary",
      )}
    >
      {children}
      <p className="text-lg text-white">{title}</p>
    </button>
  );
};

export default Card;
