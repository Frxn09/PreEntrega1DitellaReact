import { Container, Button } from "react-bootstrap";
import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import { useState } from "react";
import { addDoc, collection, getFirestore } from "firebase/firestore";

const initialValue = {
  name: "",
  phone: "",
  email: "",
};

export const Cart = () => {
  const [values, setValues] = useState(initialValue);
  const { clear, items, removeItem } = useContext(CartContext);

  const total = () =>
    items.reduce((acc, item) => acc + item.quantity * item.price, 0);

  const handleChange = (ev) => {
    setValues((prev) => {
      return { ...prev, [ev.target.name]: ev.target.value };
    });
  };
  const handleRemove = (id) => removeItem(id);
  const handleClear = (id) => clear(id);

  const handleSubmit = () => {
    const order = {
      buyer: values,
      items,
      total: total(),
    };
    const db = getFirestore();
    const orderCollection = collection(db, "orders");
    addDoc(orderCollection, order)
      .then(({ id }) => {
        if (id) {
          alert("su orden: " + id + "ah sido completada");
        }
      })
      .finally(() => {
        clear();
        setValues(initialValue);
      });
  };

  return (
    <div id="outconter">
      <Container className="mt-4 cart-conter">
        <h1>Productos en tu carrito</h1>
        {items.map((i) => {
          return (
            <ul key={i.title}>
              <li>Producto: {i.title}</li>
              <li>Cantidad: {i.stock}</li>
              <li>${i.price}</li>
              <li onClick={() => handleRemove(i.id)}>X</li>
            </ul>
          );
        })}
        <div>Total: {total()}</div>
        <Button className="buton" type="button" onClick={handleClear}>
          Vaciar
        </Button>
        {items?.length > 0 && (
          <form>
            <lablel>Nombre y Apellido: </lablel>
            <input
              type="text"
              value={values.name}
              name="name"
              onChange={handleChange}
            />
            <lablel>Celular: </lablel>
            <input
              type="text"
              value={values.phone}
              name="phone"
              onChange={handleChange}
            />
            <lablel>Email: </lablel>
            <input
              type="email"
              value={values.email}
              name="email"
              onChange={handleChange}
            />
            <Button className="buton" type="button" onClick={handleSubmit}>
              Enviar
            </Button>
          </form>
        )}
      </Container>
    </div>
  );
};
