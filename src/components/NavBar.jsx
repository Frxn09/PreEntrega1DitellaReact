import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

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
            <NavDropdown title="Categorys" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Gold</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Silver</NavDropdown.Item>
              <NavDropdown.Item href="#action5">Leather</NavDropdown.Item>
            </NavDropdown>
            <CartWidget/>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button id="searchButton" variant="outline-success">
              Search
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
