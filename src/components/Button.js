import styled from "styled-components";

const Button = styled.button`
  padding: 16px 0;
  margin: 4px 0;
  border: none;
  cursor: pointer;
  width: 100%;
  background-color: hsl(245, 75%, 52%);
  border-radius: 12px;
  color: white;
  font-weight: 900;
  box-shadow: 0 18px 15px 0px rgb(56, 41, 224, 0.25);
  &:hover {
    background-color: hsl(245, 75%, 70%);
  }
  @media only screen and (min-width: 450px) {
    margin: 8px 0px;
  }
`;

export default Button;
