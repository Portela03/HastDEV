import { Container, Row, Col } from 'react-bootstrap';

const Footer: React.FC = () => {
    return(
      <footer className="footer">
      <Container>
        <Row>
          <Col sm={3}>
            <h2>Logotipo</h2>
            <img src="/logo.png" alt="Logotipo" />
          </Col>
          <Col sm={3}>
            <h2>Links</h2>
            <ul>
            <li>gfgnfg</li>
            </ul>
          </Col>
          <Col sm={3}>
            <h2>Contato</h2>
            <p>
              Endereço: Rua dos Bobos, 01
              Cidade: São Paulo
              CEP: 01234-5678
            </p>
            <p>
              Telefone: (11) 99999-9999
              E-mail: contato@meusite.com
            </p>
          </Col>
          <Col sm={3}>
            <h2>Copyright</h2>
            <p>Copyright © 2023</p>
          </Col>
        </Row>
        <Row>
          <Col>
            <h2>Outro</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Morbi euismod, ante eget scelerisque congue, lectus velit
              tincidunt felis, eget scelerisque eros mi et mauris.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>

    )
  };
  
  export default Footer;