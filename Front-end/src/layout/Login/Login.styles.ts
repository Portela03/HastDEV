import styled from "styled-components";

export const rightDivSyled = styled.div`
  width: 438px;
  height: 830px;
  flex-shrink: 0;
  background: #fed30a;
`;

export const LoginForm = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  

  h2 {
    text-align: center;
    margin-top: 5%;
    margin-bottom: 54px;
    color: #1a1a1a;
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  .form-group {
    margin-bottom: 15px;
    gap: 16px;
    label {
      display: block;
      margin-bottom: 16px;
      color: #000;
      font-family: Inter;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }
    input {
      width: 370px;
      padding: 10px;
      border-radius: 50px;
      border: 1px solid #fed30a;
      background: rgba(175, 179, 255, 0);
    }
  }

  button {
    width: 365px;
    height: 34px;
    flex-shrink: 0;
    border-radius: 50px;
    background: #fed30a;
    border: none;
    margin-top: 48px;
    margin-bottom: 48px;
  }

  .forgot-password {
    text-align: center;
    margin-top: 10px;
    a {
      font-weight: bold;
      text-decoration: none;
      color: #000;
      font-family: Inter;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }
  }

  .sign_in {
    color: #000;
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;

    a {
      text-decoration: none;
      color: #000;
      font-weight: bold;
    }
  }

  .social-media {
    text-align: center;
    margin-top: 20px;
  }
`;

