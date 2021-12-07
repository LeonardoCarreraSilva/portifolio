import React from "react";
import { Container, Image, Nav, Navbar, NavDropdown } from "react-bootstrap";
import Logo from "../../image/logo.jpeg";
export default function Header() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#">
          <Image src={Logo} roundedCircle className="Logo" />
        </Navbar.Brand>
        <Nav className="float-right">
          <Nav.Link href="#">Sobre min</Nav.Link>
          <Nav.Link href="#">A jornada ate aqui</Nav.Link>
          <NavDropdown href="#" title="Repositorios">
            <NavDropdown.Item href="#">Front-End</NavDropdown.Item>
            <NavDropdown.Item href="#">Back-End</NavDropdown.Item>
            <NavDropdown.Item href="#">Todos</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Container>
    </Navbar>
  );
}
