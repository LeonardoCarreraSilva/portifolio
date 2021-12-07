import React from "react";
import {
  Container,
  Figure,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";
import Logo from "../../image/logo.jpeg";
export default function Header() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">
          <Figure>
            <Figure.Image
              src={Logo}
              roundedCircle
              width={50}
              height={50}
              alt="171x180"
            />
          </Figure>
        </Navbar.Brand>
        <Nav className="float-right">
          <Nav.Link href="/sobre">Sobre min</Nav.Link>
          <Nav.Link href="/jornada">A jornada ate aqui</Nav.Link>
          <NavDropdown title="Repositorios">
            <NavDropdown.Item href="/repo-front">Front-End</NavDropdown.Item>
            <NavDropdown.Item href="/repo-back">Back-End</NavDropdown.Item>
            <NavDropdown.Item href="/repo">Todos</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Container>
    </Navbar>
  );
}
