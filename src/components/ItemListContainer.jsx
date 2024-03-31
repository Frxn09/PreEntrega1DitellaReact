import { useState, useEffect } from "react";
import { useParams } from "react-router";
import Container from "react-bootstrap/Container";

import data from "../data/products.json";
import { ItemList } from "./ItemList";
export const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const { id } = useParams;

  useEffect(() => {
    const get = new Promise((resolve, reject) => {
      setTimeout(() => resolve(data), 2000);
    });
    get.then((data) => {
      if (!id) {
        setProducts(data);
      } else {
        const filtred = data.filter((p) => p.category === id);
        setProducts(filtred);
      }
    });
  }, [id]);

  return (
    <Container className="d-flex mt-4">
      <ItemList products={products} />
    </Container>
  );
};
