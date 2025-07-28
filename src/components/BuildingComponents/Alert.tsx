import type { ReactNode } from "react";

// Lo que hacemos en este archivo es crear un nuevo componente que vamos a usar en nuestra app
// Sin embargo, este componente recibe como prps un children, que es basicamente un nodo de react
// Es decir que en nuestra app, ya podemos embeber código HTML dentro de otro componente en lugar de tener un texto plano
// podemos tener un nodo separado
interface AlertProps {
  children: ReactNode;
  onClickButton: () => void;
}

export const Alert = ({ children, onClickButton }: AlertProps) => {
  return (
    <div
      className="alert alert-warning alert-dismissible fade show"
      role="alert"
    >
      {children}
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
        onClick={onClickButton}
      ></button>
    </div>
  );
};
