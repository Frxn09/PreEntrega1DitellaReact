import { Container } from "react-bootstrap";
import { ItemCount } from "./ItemCount";
import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";

export const ItemDetail = ({ item }) => {
  const { addItem } = useContext(CartContext);

  const add = (quantity) => {
    addItem(item, quantity);
  };
  return (
    <Container className="mt-4 details">
      <h1>{item.title}</h1>
      <img className="imgs" src={item.pictureUrl} alt="brazaletes" />
      <aside>
        <p>{item.dDescription}</p>
        <br />
        <p>{`Precio: $${item.price}`}</p>
        <br />
        <p>{`Stock: ${item.stock}`}</p>
        <ItemCount stock={item.stock} onAdd={add} />
      </aside>
    </Container>
  );
};
