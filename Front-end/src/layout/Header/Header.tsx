import { Navbar, Nav, Button, Container } from "react-bootstrap";
import LogoLight from "../../assets/LogoLight.svg";

const Header: React.FC = () => {
  return (
    <Navbar expand="lg">
      <Container fluid>
        <Navbar.Brand href="#" className="mr-auto">
          <img src={LogoLight} alt="Logo HastyDEV modo Light" className="mt-2"/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarSupportedContent" />
        <Navbar.Collapse id="navbarSupportedContent">
          <Nav className="ml-auto topnav w-100 justify-content-between">
            <div
              className="d-flex align-items-center gap-4"
              style={{ marginLeft: 100 }}
            >
              <Nav.Item>
                <Nav.Link href="#">Home</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#">Sobre Nós</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#">Contate-nos</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#">O Projeto</Nav.Link>
              </Nav.Item>
            </div>
            <div className="d-flex align-items-center gap-3">
              <Nav.Item>
                <Button variant="primary">Login</Button>
              </Nav.Item>
              <Nav.Item>
                <Button variant="danger">Inscreva-se</Button>
              </Nav.Item>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
