import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Container from "react-bootstrap/Container";

import data from "../data/products.json";

export const ItemDetailsContainer = () => {
  const [product, setProduct] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    const get = new Promise((resolve, reject) => {
      setTimeout(() => resolve(data), 2000);
    });
    get.then((data) => {
      const found = data.find((p) => p.id === Number(id));
      setProduct(found);
    });
  }, [id]);
  if (!product) return <div>Loading . . .</div>;

  return (
    <Container className="mt-4 d-flex">
      <h1>{product.title}</h1>
      <img src={product.pictureUrl} alt="brazaletes" />
      <aside>
      <p>{product.ldescription}</p>
      <br />
      <p>${product.price}</p>
      </aside>
    </Container>
  );
};
