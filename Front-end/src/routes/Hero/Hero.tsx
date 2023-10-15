import { Container, Row, Col } from "react-bootstrap";
import HeroImg1 from "../../assets/images/Hero/HeroImg1.webp";
import HeroImg2 from "../../assets/images/Hero/HeroImg2.webp";
import HeroImg3 from "../../assets/images/Hero/HeroImg3.webp";
import HeroImg4 from "../../assets/images/Hero/HeroImg4.webp";
import { HeadingTitle, Paragraph } from "../../components/Texts/Texts";
import { ButtonPrimary } from "../../components/Buttons/Buttons";

const Hero: React.FC = () => {
  return (
    <Container className="text-center">
      <HeadingTitle title="Bem-vindo à HastyDEV - Desenvolva Projetos Reais" />
      <Paragraph
        paragraph="Encontre Projetos Reais para Anexar ao seu Portfólio, Conquiste Seu
        Local no Mercado E Seja Recompensado Por Isso!"
      />
      <ButtonPrimary
        route="/register"
        buttonText="Inscreva-se"
        className="mx-auto d-block"
      />
      <div className="mt-4">
        <Row>
          <Col md={3}>
            <img src={HeroImg1} alt="" className="img-fluid" />
          </Col>
          <Col md={3}>
            <img src={HeroImg2} alt="" className="img-fluid" />
          </Col>
          <Col md={3}>
            <img src={HeroImg3} alt="" className="img-fluid" />
          </Col>
          <Col md={3}>
            <img src={HeroImg4} alt="" className="img-fluid" />
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default Hero;
