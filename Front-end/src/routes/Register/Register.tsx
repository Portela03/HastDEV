import * as R from "./Register.styles";
import { Container, Row, Col } from "react-bootstrap";
import RegisterImg from "../../assets/images/RegisterImg.png";
import {
  FacebookLoginButton,
  GoogleLoginButton,
  GithubLoginButton,
} from "react-social-login-buttons";

const Register: React.FC = () => {
  return (
    <Container fluid>
      <Row>
        <Col>
          <img
            src={RegisterImg}
            alt=""
            style={{
              height: "auto",
              width: "90%",
            }}
          />
        </Col>
        <Col>
          <R.LoginForm>
            <h2>Inscreva-se na HastyDEV!</h2>
            <div className="form-group">
              <label htmlFor="Name">Nome:</label>
              <input type="text" id="Name" name="Name" />
            </div>
            <div className="form-group">
              <label htmlFor="LastName">Sobrenome:</label>
              <input type="text" id="LastName" name="LastName" />
            </div>
            <div className="form-group">
              <label htmlFor="username">Usuário:</label>
              <input type="text" id="username" name="username" />
            </div>
            <div className="form-group">
              <label htmlFor="email">E-mail:</label>
              <input type="email" id="email" name="email" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Senha:</label>
              <input type="password" id="password" name="password" />
            </div>
            <div className="form-group">
              <label htmlFor="password-confirmation">Confirme Sua Senha:</label>
              <input
                type="password"
                id="password-confirmation"
                name="password-confirmation"
              />
            </div>
            <div className="form-group">
              <button>Inscreva-se</button>
            </div>
            <div className="sign_in">
              Já Tem uma Conta?<a href="#"> Login</a>
            </div>
            <div className="social-media">
            <p>Ou Inscreva-se com:</p>
            <div
              style={{
                justifyContent: "center",
                alignItems: "center",
                marginLeft: "250px",
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

          </R.LoginForm>
        </Col>
     
      </Row>
    </Container>
  );
};

export default Register;
