import { Container } from "react-bootstrap";

export const ItemListContainer = ({ greeting }) => (
  <Container className="mt-5">
    <h2>{greeting}</h2>
  </Container>
);
