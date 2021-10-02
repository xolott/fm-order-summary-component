import styled from "styled-components";

const PlanSelectorContainer = styled.div`
  border-radius: 12px;
  width: 100%;
  background-color: hsl(225, 100%, 98%);
  padding: 24px;
  display: flex;
  align-items: center;
  margin: 20px 0px;
  @media only screen and (max-width: 768px) {
    padding: 16px;
  }
`;

export default PlanSelectorContainer;
