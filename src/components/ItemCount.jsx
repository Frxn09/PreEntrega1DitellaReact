import { Button } from "react-bootstrap";
import { useState } from "react";
export const ItemCount = (stock) => {
  const [count, setCount] = useState(1);
  const handleIncrese = () => {
    if (stock > count) setCount((prev) => prev + 1);
  };

  const handleDecrease = () => {
    if (count > 1) setCount((prev) => prev - 1);
  };

  return (
    <>
      <div className="d-flex">
        <div onClick={handleIncrese}>+</div>
        <input type="number" value={count} />
        <div onClick={handleDecrease}>-</div>
      </div>
      <Button className="buton" style={{ marginTop: 6 }}>
        Añadir al carro
      </Button>
    </>
  );
};
