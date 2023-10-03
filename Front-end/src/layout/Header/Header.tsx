import { Navbar, Nav, Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import LogoLight from "../../assets/LogoLight.svg";

const Header: React.FC = () => {
  return (
    <Navbar expand="lg">
      <Container fluid>
        <Navbar.Brand as={Link} to="/" className="mr-auto">
          <img
            src={LogoLight}
            alt="Logo HastyDEV modo Light"
            className="mt-2"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarSupportedContent" />
        <Navbar.Collapse id="navbarSupportedContent">
          <Nav className="ml-auto topnav w-100 justify-content-between">
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
            <div className="d-flex align-items-center gap-3">
              <Nav.Item>
                <Link to="/login">
                  <Button variant="primary">Login</Button>
                </Link>
              </Nav.Item>
              <Nav.Item>
                <Link to="/register">
                  <Button variant="danger">Inscreva-se</Button>
                </Link>
              </Nav.Item>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
