import styled from "styled-components";
import HeaderCart from "../HeaderCart";

const CartBoxContainer = styled.section`
  width: 16rem;
  max-height: 30rem;

  border-radius: 10px;

  overflow: hidden;

  @media (min-width: 1200px) {
    width: 20rem;
  }
`;

function CartBox({ children }) {
  return (
    <CartBoxContainer>
      <HeaderCart />
      {children}
    </CartBoxContainer>
  );
}

export default CartBox;
