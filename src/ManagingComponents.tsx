import { useState } from "react";
import { produce } from "immer";
import ExpandableComponent from "./components/ManagingComponents/ExpandableComponent";

function AppManagingComponents() {
  const [drink, setDrink] = useState({
    title: "Americano",
    price: 5,
  });

  const handleClick = () => {
    // Para poder actualizar un objeto, debemos pasar un objeto completamente nuevo
    // especificando las propiedades que queremos actualizar
    const newDrink = {
      ...drink,
      price: 6,
    };
    setDrink(newDrink);
  };

  const [customer, setCustomer] = useState({
    name: "Jhon",
    address: {
      city: "SFO",
      zipCode: 94111,
    },
  });

  const handleCustomer = () => {
    // En este caso hay que notar dos cosas, la primera es que con el spread operator (...) lo que hacemos es una copia/referencia
    // al objeto que ya existe en memoria. Lo que necesitamos hacer al momento de setear un nuevo state es
    // enviar un objeto nuevo, es por eso que en nuestro ejemplo copiamos todo el objeto customer PERO si nos damos cuenta, estamos
    // creando una propiedad nueva llamada address, que luego copiamos el valor y agregamos un nuevo zipCode
    setCustomer({
      ...customer,
      address: { ...customer.address, zipCode: 941112 },
    });
  };

  const [tags, setTags] = useState(["happy", "cheerful"]);

  const handleArry = () => {
    // Add a new property to the array
    // tags.push("") won't work as we are not modifying the object correctly
    setTags([...tags, "exciting"]);

    //Remove
    // Realmente no estamos removiendo ningun objeto, estamos retornando un array nuevo sin el happy
    setTags(tags.filter((tag) => tag !== "happy"));

    //Update
    // Lo mismo, map retorna un nuevo array con las condiciones dadas
    setTags(tags.map((tag) => (tag === "happy" ? "happiness" : tag)));
  };

  const [bugs, setBugs] = useState([
    { id: 1, title: "Bug 1", fixed: false },
    { id: 2, title: "Bug 2", fixed: false },
  ]);

  const handleArrayObject = () => {
    // setBugs(bugs.map((bug) => (bug.id === 1 ? { ...bug, fixed: true } : bug)));
    // Utilizamos produce de la libreria immer para poder mutar el array de una manera mas facil y eficiente
    // Draft es el proxy que maneja produce el cual copia el array que estamos usando
    setBugs(
      produce((draft) => {
        const bug = draft.find((bug) => bug.id === 1);
        if (bug) bug.fixed = true;
      })
    );
  };

  return (
    <>
      <div>
        {bugs.map((bug) => (
          <p key={bug.id}>
            {bug.title} {bug.fixed ? "fixed" : "new"}
          </p>
        ))}
        <button onClick={handleArrayObject}>Click me!</button>
      </div>
      <ExpandableComponent>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum non
        veritatis aperiam perspiciatis quo quae aliquam, sequi iste at quasi
        quia et pariatur soluta porro placeat a dignissimos dicta facere nostrum
        vitae, quidem neque ipsam! Possimus quam enim aspernatur, neque
        doloribus, esse consequuntur placeat, error ea ullam dolore voluptatem
        sunt quaerat sequi ratione. Non dicta enim nostrum aperiam unde
        exercitationem quas sapiente id, vero corrupti quia optio aliquam harum,
        quae illo repudiandae ducimus suscipit eius rem deleniti libero. Vitae
        dolor dolore nam perferendis totam minus temporibus eum et maxime, sequi
        blanditiis modi recusandae facilis laborum incidunt saepe reiciendis
        adipisci natus?
      </ExpandableComponent>
    </>
  );
}

export default AppManagingComponents;
