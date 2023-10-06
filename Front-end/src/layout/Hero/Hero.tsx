import { Container, Row, Col, Button } from "react-bootstrap";
import HeroImg1 from "../../assets/images/Hero/HeroImg1.webp";
import HeroImg2 from "../../assets/images/Hero/HeroImg2.webp";
import HeroImg3 from "../../assets/images/Hero/HeroImg3.webp";
import HeroImg4 from "../../assets/images/Hero/HeroImg4.webp";

const Hero: React.FC = () => {
  return (
    <Container className="text-center">
      <h1 className="display-3">Bem-vindo à HastyDEV - Desenvolva Projetos Reais</h1>
      <p className="lead">
        Encontre Projetos Reais para Anexar ao seu Portfólio, Conquiste Seu Local no Mercado E Seja Recompensado Por Isso!
      </p>
      <Button href="/register" variant="primary">Inscreva-se</Button>

      <div className="mt-4">
        <Row>
          <Col md={3}>
            <img src={HeroImg1} alt="" className="img-fluid"/>
          </Col>
          <Col md={3}>
            <img src={HeroImg2} alt="" className="img-fluid"/>
          </Col>
          <Col md={3}>
            <img src={HeroImg3} alt="" className="img-fluid"/>
          </Col>
          <Col md={3}>
            <img src={HeroImg4} alt="" className="img-fluid"/>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default Hero;
