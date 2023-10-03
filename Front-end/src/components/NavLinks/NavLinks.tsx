import React from 'react';
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavLinks: React.FC = () => {
  return (
    <div
      className="d-flex align-items-center gap-4"
      style={{ marginLeft: 100 }}
    >
      <Nav.Item>
        <Nav.Link as={Link} to="/">
          Home
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={Link} to="/about">
          Sobre Nós
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={Link} to="/contact">
          Contate-nos
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={Link} to="/project">
          O Projeto
        </Nav.Link>
      </Nav.Item>
    </div>
  );
};

export default NavLinks;
