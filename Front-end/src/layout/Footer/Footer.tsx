import { Title, SubTitle, Button } from './Footer.styles';

import LogoLight from '../../assets/LogoLight.svg';
import { Link,  } from "react-router-dom";

import {  Row, Col, Container } from 'react-bootstrap';


const Footer: React.FC = () => (
  <footer className="footer">

    <Container>
      <Container>
      <Row>
        <Col sm={3}>
          <img
            src={LogoLight}
            alt="Logo HastyDEV modo Light"
            className="mt-2"
          />
          <Title>+1 (7635) 547-12-97</Title>
          <Title>support@lift.agency</Title>
        </Col>
        <Col sm={3}>
          <Title>Quick Links</Title>
          <Link to="/">
            <SubTitle>Home</SubTitle>
          </Link>
          <Link to="/About">
            <SubTitle>Sobre Nós</SubTitle>
          </Link>
        </Col>
        <Col sm={3}>
          <Title>Sobre o Projeto</Title>
          <Title>Contate-Nos</Title>
        </Col>

        <Col sm={3}>
          <Title>Newsletter</Title>
          <div className="container text-center">
            <div className="row align-items-start">
              <div className="col">
                <input
                  placeholder='Receba As Novidades'
                  style={{
                    width: '160px',
                    height: '50px',
                    opacity: 0.65,
                    color: '#0A142F',
                    fontSize: 14,
                    fontFamily: 'Rasa',
                    fontWeight: '400',
                    wordWrap: 'break-word'
                  }}
                />
              </div>
              <div className="col">
                <Button />
              </div>
            </div>
          </div>
        </Col>
      </Row>

      <Row>
        <Col>
          <Title>Outro</Title>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Morbi euismod, ante eget scelerisque congue, lectus velit
            tincidunt felis, eget scelerisque eros mi et mauris.
          </p>
        </Col>
      </Row>
      </Container>
    </Container>
  </footer>
);

export default Footer;
