import styled from "styled-components";

const PlanChangeButton = styled.a`
  font-weight: 700;
  font-size: 0.9rem;
  color: hsl(245, 75%, 52%);

  &:hover {
    color: hsl(245, 75%, 70%);
    text-decoration: none;
  }
  @media only screen and (max-width: 768px) {
    font-size: 0.8rem;
  }
`;

export default PlanChangeButton;
