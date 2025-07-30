import { useForm, type FieldValues } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  name: z.string().min(3, "Name must be at least 3 characters"),
  age: z
    .number({
      error: (iss) => {
        if (iss.code === "invalid_type") return "Age field is required";
      },
    })
    .min(18, "Age must be greater or equal to 18"),
});

type FormData = z.infer<typeof schema>;

function AdvancedForms() {
  // Entre más grande el form mas complicado se hace manejarlo y agregar onChange y useState no es lo ideal
  // Aqui entra en juego una nueva libreria react-hook-form que permite manejar de una manera más facil y eficiente los forms
  // El hook se llama useForm()

  // Aqui estamos haciendo destructuring de nuestro objeto, es decir useForm retorna un monton de objetos
  // Aqui solamente estamos sacando los que necesitamos
  // Ahora formState tambien trae otro monton de objetos por lo cual hacemos el destructuring y obtenemos solo errores
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = (data: FieldValues) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          // Registramos nuestro input y adicionamos las validaciones que querramos tal y como se hace en html
          {...register("name")}
          id="name"
          type="text"
          className="form-control"
        />

        {/*El operador ?. lo que nos permite es si existe algo que se llame name dentro de errors
        esta linea se va a ejecutar de lo contrario no se ejecuta*/}
        {errors.name && (
          <p className="text-danger mb-3">{errors.name.message}</p>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          Age
        </label>
        <input
          id="age"
          type="number"
          className="form-control"
          {...register("age", { valueAsNumber: true })}
        />
        {errors.age && <p className="text-danger mb-3">{errors.age.message}</p>}
      </div>
      <button disabled={!isValid} className="btn btn-primary mb-3">
        Submit
      </button>
    </form>
  );
}

export default AdvancedForms;
