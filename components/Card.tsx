interface CardProps {
  children: React.ReactNode;
  title: string;
}

const Card = ({ children, title }: CardProps) => {
  return (
    <div className="flex aspect-square w-full flex-col items-center justify-between rounded-lg bg-[#405671] p-3 text-white">
      {children}
      <p className="text-lg text-white">{title}</p>
    </div>
  );
};

export default Card;
