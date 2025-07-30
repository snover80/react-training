import { useRef, useState, type FormEvent } from "react";

function Form() {
  // Use ref lo utlizamos para referenciar y obtener los valores de un elemento en el dom,
  // no necesariamente un input o form
  const nameRef = useRef<HTMLInputElement>(null);
  const ageRef = useRef<HTMLInputElement>(null);
  const person = { name: "", age: 0 };

  const [statePerson, setStatePerson] = useState({
    name: "",
    age: "",
  });

  // Por defecto, cuando hacemos un submit a un html form este es enviado al servidor por lo cual
  // tenemos una actualizacion (reload) de la pagina automaticamente.

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (nameRef.current !== null) person.name = nameRef.current.value;
    if (ageRef.current !== null) person.age = parseInt(ageRef.current.value);

    console.log(person);
    console.log(statePerson);
  };

  // Existe otra manera de obtener los valores del form utilizando el hook
  // useState() en la cual vamos a agregar el trigger onChange() dentro de los inputs
  // Para cada vez que se teclee algo o inserte texto se refresque el componente y asi mismo
  // se actualice el useState con el valor necesario.
  // El unico detalle a tener en cuenta es que podemos llegar a tener dos valores distintos el del form
  // Y el de el useState
  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        {/*Agregamos ref para poder referenciar el input*/}
        <input
          //ref={nameRef}
          onChange={(event) =>
            setStatePerson({ ...statePerson, name: event.target.value })
          }
          id="name"
          type="text"
          className="form-control"
          value={statePerson.name}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          Age
        </label>
        <input
          // ref={ageRef}
          id="age"
          type="number"
          className="form-control"
          onChange={(event) =>
            setStatePerson({ ...statePerson, age: event.target.value })
          }
          value={statePerson.age}
        />
      </div>
      <button className="btn btn-primary mb-3">Submit</button>
    </form>
  );
}

export default Form;
