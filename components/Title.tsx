interface TitleProps {
  children: string;
}

const Title = ({ children }: TitleProps) => {
  return <h2 className="text-2xl font-semibold text-white">{children}</h2>;
};
export default Title;
