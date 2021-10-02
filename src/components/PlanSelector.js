import musicIcon from "../assets/img/icon-music.svg";
import styled from "styled-components";

const PlanSelectorContainer = styled.div`
  border-radius: 12px;
  width: 100%;
  background-color: hsl(225, 100%, 98%);
  padding: 24px;
  display: flex;
  align-items: center;
  margin: 20px 0px;
  @media only screen and (max-width: 450px) {
    padding: 16px;
  }
  .plan-details {
    flex-grow: 1;
    margin-left: 16px;
    .plan-name,
    .plan-value {
      display: block;
      margin: 2px 0;
    }
    .plan-name {
      font-weight: 900;
      font-size: 0.95rem;
    }
    .plan-value {
      color: grey;
      font-weight: 500;
      font-size: 0.9rem;
      letter-spacing: 0.04rem;
    }
  }
  .plan-change {
    font-weight: 700;
    font-size: 0.9rem;
    color: hsl(245, 75%, 52%);

    &:hover {
      color: hsl(245, 75%, 70%);
      text-decoration: none;
    }
    @media only screen and (max-width: 450px) {
      font-size: 0.8rem;
    }
  }
`;

const PlanSelector = () => {
  return (
    <PlanSelectorContainer>
      <img src={musicIcon} alt="Music Icon" width="48" height="48" />
      <div className="plan-details">
        <span className="plan-name">Annual Plan</span>
        <span className="plan-value">$59.99/year</span>
      </div>
      <a className="plan-change" href="change">
        Change
      </a>
    </PlanSelectorContainer>
  );
};

export default PlanSelector;
