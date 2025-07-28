import styles from "./Button.module.css";

type validColors = "primary" | "secondary" | "success" | "danger";

interface ButtonBootstrapProps {
  color?: validColors;
  children: string;
  onClickButton: () => void;
}

function ButtonPlainCss({
  color = "primary",
  children,
  onClickButton,
}: ButtonBootstrapProps) {
  return (
    <button
      type="button"
      className={[styles.btn, styles[`btn-${color}`]].join(" ")}
      onClick={onClickButton}
    >
      {children}
    </button>
  );
}

export default ButtonPlainCss;
