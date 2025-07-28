type validColors = "primary" | "secondary" | "success" | "danger";

interface ButtonBootstrapProps {
  color?: validColors;
  children: string;
  onClickButton: () => void;
}

function ButtonBootstrap({
  color = "primary",
  children,
  onClickButton,
}: ButtonBootstrapProps) {
  return (
    <button
      type="button"
      className={`btn btn-${color}`}
      onClick={onClickButton}
    >
      {children}
    </button>
  );
}

export default ButtonBootstrap;
