import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-bootstrap";

import { CartWidget } from "./CartWidget";

export const NavBar = () => {
  return (
    <Navbar expand="lg" className="bg-danger">
      <Container fluid>
        <Navbar.Brand href="#">RaddiantBrazalet</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "120px" }}
            navbarScroll
          >
            <Nav.Link to="/category/oro" as={NavLink}>
              Oro
            </Nav.Link>
            <Nav.Link to="/category/plata" as={NavLink}>
              Plata
            </Nav.Link>
            <Nav.Link to="/category/cuero" as={NavLink}>
              Cuero
            </Nav.Link>
            <CartWidget />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
