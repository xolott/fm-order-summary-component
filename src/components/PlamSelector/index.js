import musicIcon from "../../assets/img/icon-music.svg";
import PlanSelectorContainer from "./PlanSelectorContainer";
import PlanChangeButton from "./PlanChangeButton";
import PlanDetails from "./PlanDetails";
import PlanName from "./PlanName";
import PlanValue from "./PlanValue";

const PlanSelector = () => {
  return (
    <PlanSelectorContainer>
      <img src={musicIcon} alt="Music Icon" width="48" height="48" />
      <PlanDetails>
        <PlanName>Annual Plan</PlanName>
        <PlanValue>$59.99/year</PlanValue>
      </PlanDetails>
      <PlanChangeButton href="change">Change</PlanChangeButton>
    </PlanSelectorContainer>
  );
};

export default PlanSelector;
