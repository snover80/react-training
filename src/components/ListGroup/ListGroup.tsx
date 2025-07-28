import { useState } from "react";
import "./ListGroup.css";
import styled from "styled-components";

// Con la interface vamos a definir la estructura de los props que recibe el componente
// De esta manera podemos tener un componente reutilizable sin necesidad de hardercodear los valores
interface ListItemProps {
  active: boolean;
}

const List = styled.ul`
  list-style: none;
  padding: 0;
`;

const ListItem = styled.li<ListItemProps>`
  padding: 5px 0;
  background: ${(props) => (props.active ? "blue" : "none")};
`;

interface ListGroupProps {
  items: string[];
  heading?: string;
  onSelectItem: (item: string) => void; // Esta prop es opcional, puede ser una funcion que recibe un string
}

// Agregamos una funcion la cual nos permite avisarle a el que implemente este componente
// que hay un elemento seleccionado o que paso algo, esto nos permite el pasar una funcion como prop

function ListGroup({ items, heading, onSelectItem }: ListGroupProps) {
  /* Hook 
  Este hook nos permite decirle a react que este componente puede tener data o un estado
  que va a cambiar con el tiempo.
  const arr = useState(-1);

  arr[0]; // Este es el valor actual del estado
  arr[1]; // Esta es la función que nos permite actualizar el estado 
  
  Cada componente tiene su propio estado, y cuando el estado cambia, el componente se vuelve a renderizar.
  Esto quiere decir que el comportamiento sera difirente entre componentes, si yo tengo dos componentes iguales,
  se comportaran de manera independiente
  
  */
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    // <>,</> Tambien es conocido como Fragment, permite agrupar elementos sin agregar un nodo extra al DOM
    // sin necesidad de importar {Fragment} de 'react'
    <>
      <h1>{heading}</h1>
      {/*
      Lo que quiere decir el operador && es que si la condición es verdadera, se renderiza el contenido a la derecha.
      En este caso, si items.length es mayor que 0, se renderiza el mensaje "There are items in the list".
      Si la condición es falsa, no se renderiza nada.
      */}
      {items.length === 0 && <p>No items found</p>}
      <List>
        {items.map((item, index) => (
          <ListItem
            active={index === selectedIndex}
            key={item}
            data-testid={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </ListItem>
        ))}
      </List>
    </>
  );
}

export default ListGroup;
