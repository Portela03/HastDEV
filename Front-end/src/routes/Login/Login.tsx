import * as L from "./Login.styles";
import { Container, Row, Col } from "react-bootstrap";
import LoginImg from "../../assets/images/LoginImg.png";
import {
  FacebookLoginButton,
  GoogleLoginButton,
  GithubLoginButton,
} from "react-social-login-buttons";

const Login: React.FC = () => {
  return (
    <>
      <Container fluid>
        <Row>
          <Col>
            <L.LoginForm>
              <h2>Bem-Vindo de Volta à HastyDEV!</h2>
              <div className="form-group">
                <label htmlFor="username">Username:</label>
                <input type="text" id="username" name="username" />
              </div>
              <div className="form-group">
                <label htmlFor="password">Senha:</label>
                <input type="password" id="password" name="password" />
              </div>
              <div className="form-group">
                <button>Login</button>
              </div>
              <div className="sign_in">
                Nao tem uma Conta?<a href="#"> Inscreva-se</a>
              </div>
              <div className="forgot-password">
                <a href="#">Esqueceu a senha?</a>
              </div>
              <div className="social-media">
                <p>Ou faça login com:</p>
                <div
                  style={{
                    justifyContent: "center",
                    alignItems: "center",
                    marginLeft: "260px",
                  }}
                >
                  <FacebookLoginButton
                    style={{ width: "360px", marginBottom: "20px" }}
                  >
                    <span>Entrar com o Facebook</span>
                  </FacebookLoginButton>
                  <GoogleLoginButton
                    style={{ width: "360px", marginBottom: "20px" }}
                  >
                    <span>Entrar com o Google</span>
                  </GoogleLoginButton>
                  <GithubLoginButton style={{ width: "360px" }}>
                    <span>Entrar com o Github</span>
                  </GithubLoginButton>
                </div>
              </div>
            </L.LoginForm>
          </Col>
          <Col style={{ position: "relative" }}>
            <img
              src={LoginImg}
              alt=""
              style={{
                position: "absolute",
                zIndex: "2",
                height: "auto",
                width: "90%",
                marginTop: "-10%",
              }}
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
