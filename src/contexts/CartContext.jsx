import { createContext, useState } from "react";

export const CartContext = createContext();

export const Provider = ({ children }) => {
  const [items, setItems] = useState([
    { name: "Oro", price: 300, quantity: 4 },
    { name: "Plata", price: 400, quantity: 5 },
  ]);

  const clear = () => setItems([]);

  const removeItem = (id) => {
    const filtered = items.filter((item) => item.id !== id);
    setItem(filtered);
  };
  const addItem = (item) => {
    setItems([...items, item]);
  };

  return (
    <CartContext.Provider value={{ clear, items, removeItem, addItem }}>
      {children}
    </CartContext.Provider>
  );
};
