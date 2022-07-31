import styled, { keyframes } from "styled-components";
import { bounceInUp } from "react-animations";

const BounceInUpContainer = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: flex-start;

  padding-top: 70px;

  @media (min-width: 1024px) {
    align-items: center;

    padding-top: 0;
  }
`;

const bounceInUpAnimation = keyframes`${bounceInUp}`;

const BounceInUpSpan = styled.span`
  font-size: 20pt;
  font-weight: bold;

  text-transform: uppercase;

  animation: 2s ${bounceInUpAnimation};

  color: #27ae60;
`;

function Loading() {
  return (
    <BounceInUpContainer>
      <BounceInUpSpan>Carregando...</BounceInUpSpan>
    </BounceInUpContainer>
  );
}

export default Loading;
