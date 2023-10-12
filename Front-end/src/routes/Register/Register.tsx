import * as R from "./Register.styles";
import * as yup from "yup";
import { Container, Row, Col } from "react-bootstrap";
import RegisterImg from "../../assets/images/RegisterImg.png";
import {
  FacebookLoginButton,
  GoogleLoginButton,
  GithubLoginButton,
} from "react-social-login-buttons";
import { FormFetch } from "../../axios/config";
import { Formik, Form, Field } from "formik";

interface FormValues {
  username: string;
  password: string;
  first_name: string;
  last_name: string;
  email: string;
  confirmPassword: string;
}

const validationsRegister = yup.object().shape({
  first_name: yup.string().required(),
  last_name: yup.string().required(),
  username: yup.string().required(),
  email: yup.string().email("email inválido").required("O email é obrigatório"),
  password: yup
    .string()
    .min(8, "A senha deve ter pelo menos 8 caracteres")
    .required("A senha é obrigatória"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "As senhas são diferentes")
    .required("A confirmação da senha é obrigatória"),
});

const Register: React.FC = () => {
  const handleRegister = async ({first_name, last_name, username, email, password, confirmPassword}: FormValues) => {
    try {
      const response = await FormFetch.post("/register", {first_name, last_name, username, email, password, confirmPassword})
      console.log(response.data);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      alert(err.response.data.errors[0].msg);
      alert(err.response.data.error);
    }
  };

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
          <R.RegisterForm>
            <Formik
              initialValues={{
                username: "",
                password: "",
                first_name: "",
                last_name: "",
                email: "",
                confirmPassword: "",
              }}
              onSubmit={handleRegister}
              validationSchema={validationsRegister}
            >
              {({ errors, touched, handleSubmit, isSubmitting }) => (
                <>
                  <form onSubmit={handleSubmit}>
                    <h2>Inscreva-se na HastyDEV!</h2>
                    <div className="form-group">
                      <label htmlFor="first_name">Nome:</label>
                      <Field type="text" id="first_name" name="first_name" />
                      {errors.first_name && touched.first_name && errors.first_name}
                    </div>
                    <div className="form-group">
                      <label htmlFor="last_name">Sobrenome:</label>
                      <Field type="text" id="last_name" name="last_name" />
                      {errors.last_name && touched.last_name && errors.last_name}
                    </div>
                    <div className="form-group">
                      <label htmlFor="username">Usuário:</label>
                      <Field type="text" id="username" name="username" />
                      {errors.username && touched.username && errors.username}
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">E-mail:</label>
                      <Field type="email" id="email" name="email" />
                      {errors.email && touched.email && errors.email}
                    </div>
                    <div className="form-group">
                      <label htmlFor="password">Senha:</label>
                      <Field type="password" id="password" name="password" />
                      {errors.password && touched.password && errors.password}
                    </div>
                    <div className="form-group">
                      <label htmlFor="confirmPassword">
                        Confirme Sua Senha:
                      </label>
                      <Field
                        type="password"
                        id="confirmPassword"
                        name="confirmPassword"
                      />
                      {errors.confirmPassword && touched.confirmPassword && errors.confirmPassword}
                    </div>
                    <div className="form-group">
                      <button type="submit" disabled={isSubmitting}>Inscreva-se</button>
                    </div>
                  </form>
                  <div className="sign_in">
                    Já Tem uma Conta?<a href="#"> Login</a>
                  </div>
                </>
              )}
            </Formik>
          </R.RegisterForm>
        </Col>
      </Row>
    </Container>
  );
};

export default Register;
