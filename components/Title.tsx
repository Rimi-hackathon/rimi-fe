interface TitleProps {
  children: React.ReactNode;
}

const Title = ({ children }: TitleProps) => {
  return (
    <h2 className="text-2xl font-semibold tracking-wide text-white">
      {children}
    </h2>
  );
};
export default Title;
