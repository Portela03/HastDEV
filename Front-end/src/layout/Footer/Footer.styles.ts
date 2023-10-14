import styled from "styled-components";

export const Container1 = styled.div`
  background: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.text};
`;

export const Title = styled.h2`
color:${props => props.theme.colors.text};
  font-size: 18px;
  font-family: 'Rasa';
  font-weight: 300;
  line-height: 3;
  word-wrap: break-word;
`;

export const SubTitle = styled.h2`
  opacity: 0.65;
  color:${props => props.theme.colors.text};
  font-size: 16px;
  font-family: 'Rasa';
  font-weight: 400;
  line-height: 3;
  word-wrap: break-word;
`;

export const Button = styled.button`
  width: 50px;
  height: 50px;
  background: ${props => props.theme.colors.primary};
`;
