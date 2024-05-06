
import { Container } from "react-bootstrap";
import { ItemCount } from "./ItemCount";

export const ItemDetail = ({ item }) => (
  <Container className="mt-4 details">
    <h1>{item.title}</h1>
    <img className="imgs" src={item.pictureUrl} alt="brazaletes" />
    <aside>
      <p>{item.dDescription}</p>
      <br />
      <p>{`Precio: $${item.price}`}</p>
      <br />
      <p>{`Stock: ${item.stock}`}</p>
      <ItemCount stock={item.stock}/>
    </aside>
  </Container>
);
