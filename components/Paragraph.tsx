interface ParagraphProps {
  children: string;
}

const Paragraph = ({ children }: ParagraphProps) => {
  return <p className="leading-7 text-white/70">{children}</p>;
};

export default Paragraph;
