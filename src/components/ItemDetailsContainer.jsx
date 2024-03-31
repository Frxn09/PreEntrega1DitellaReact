import { useState, useEffect } from "react";

import Container from "react-bootstrap/Container";

import data from "../data/products.json";

export const ItemDetailsContainer = () => {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const get = new Promise((resolve, reject) => {
      setTimeOut(() => resolve(data), 2000);
    });
    get.then((data) => {
      setProduct(data[0]);
    });
  }, []);
  if (!product) return <div>Loading . . .</div>;

  return (
    <Container className="mt-4 d-flex">
      <h1>{product.name}</h1>
      <img src={product.img} alt="brazaletes" />
    </Container>
  );
};
