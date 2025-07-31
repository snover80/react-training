import React, { useEffect, useRef } from "react";

function EffectHook() {
  const ref = useRef<HTMLInputElement>(null);

  // afterRender, podria ser un nombre para poder denominar que es lo que pasa en el useEffect
  // es decir, algo que no afecta el renderizado del componente pero que tiene un side effect o hace
  // algo luego de que el componente se renderiza
  useEffect(() => {
    //Side effect, no estamos renderizando algo nuevo, estamos diciendo que poner el foco en el input
    // Es decir un efecto alterno que ocurre despues del renderizado

    if (ref.current) ref.current.focus();

    // En el side effect podemos aprovechar y hacer cosas como utilizar el local storage
    // llamar un servicio, etc...
    // Tal y como los otros hooks, no podemos llamarlo dentro de loops o if statements
    // Podemos llamarlo cuantas veces queramos y hacer cosas distintas.
    // Se ejecutara una vez despues de cada renderizado
  });
  return (
    <div>
      <input ref={ref} type="text" className="form-control" />
    </div>
  );
}

export default EffectHook;
