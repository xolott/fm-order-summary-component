import backgroundDesktop from "../assets/img/pattern-background-desktop.svg";
import backgroundMobile from "../assets/img/pattern-background-mobile.svg";
import styled from "styled-components";

const Container = styled.main`
  background-color: hsl(225, 100%, 94%);
  background-image: url(${backgroundDesktop});
  background-repeat: repeat-x;
  background-size: 100% 50%;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  align-items: center;
  padding: 24px;
  @media only screen and (max-width: 768px) {
    background-image: url(${backgroundMobile});
  }
`;

export default Container;
