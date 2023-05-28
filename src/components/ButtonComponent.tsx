interface ButtonComponentProps {
  text: string;
  type?: string;
  onClick: () => void;
}
const ButtonComponent = ({
  text,
  type,
  onClick,
}: ButtonComponentProps) => {
  const className = type === "primary" ? "button button--primary" : "button button--secondary";
  return (
    <button
      className={className}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

export default ButtonComponent;
