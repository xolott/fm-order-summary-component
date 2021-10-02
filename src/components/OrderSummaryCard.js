import Card from "./Card";
import Button from "./Button";
import illustrationHero from "../assets/img/illustration-hero.svg";
import styled from "styled-components";
import PlanSelector from "./PlanSelector";

const OrderSummaryCardStyled = styled(Card)`
  max-width: 450px;
  > img {
    width: 100%;
  }
`;

const OrderSummaryTitle = styled.h1`
  font-weight: 900;
  color: hsl(223, 47%, 23%);
  margin: 8px 0;
  font-size: 1.8rem;
  @media only screen and (max-width: 450px) {
    font-size: 22px;
  }
`;

const OrderSummaryCardContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px;
  align-items: center;
  @media only screen and (max-width: 450px) {
    padding: 24px;
  }
  > p {
    text-align: center;
    padding: 0 8px;
    margin: 8px 0;
    line-height: 1.55rem;
    color: hsl(224, 23%, 55%);
  }
  .cancel-order {
    margin: 24px 0 0px 0;
    font-size: 0.95rem;
    font-weight: 900;
    color: hsl(224, 23%, 55%);
    text-decoration: none;
    cursor: pointer;
    &:hover {
      color: black;
    }
    @media only screen and (min-width: 450px) {
      margin-bottom: 8px;
    }
  }
`;

const OrderSummaryCard = () => {
  return (
    <OrderSummaryCardStyled maxWidth="450">
      <img src={illustrationHero} alt="Illustration Hero" />
      <OrderSummaryCardContent>
        <OrderSummaryTitle>Order Summary</OrderSummaryTitle>
        <p>
          You can now listen to millions of songs, audiobooks, and podcasts on
          any device anywhere you like!
        </p>
        <PlanSelector></PlanSelector>
        <Button>Proceed to Payment</Button>
        <a class="cancel-order" href="/#">
          Cancel Order
        </a>
      </OrderSummaryCardContent>
    </OrderSummaryCardStyled>
  );
};

export default OrderSummaryCard;
