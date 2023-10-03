import * as L from "./Login.styles";
import { Container, Row, Col } from "react-bootstrap";
import LoginImg from "../../assets/images/LoginImg.png";

const Login: React.FC = () => {
  return (
    <>
      <Container fluid>
        <Row>
          <Col>
            <form action=""></form>
          </Col>
          <Col style={{ position: "relative" }}>
            <img
              src={LoginImg}
              alt=""
              
              style={{ position: "absolute", zIndex: "2", height: "auto", width: "90%", marginTop: "-10%"}}
            />
            <div className="d-flex justify-content-end" style={{ zIndex: "1" }}>
              <L.rightDivSyled></L.rightDivSyled>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Login;
