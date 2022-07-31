import styled from "styled-components";
import CartBox from "./cartComponents/CartBox";
import EmptyCart from "./cartComponents/EmptyCart";
import FooterCart from "./cartComponents/FooterCart";
import MainCart from "./cartComponents/MainCart";

const AsideContainer = styled.aside`
  min-width: 27vw;

  display: flex;
  align-items: flex-start;
  justify-content: center;

  padding: 10px 0;

  @media (min-width: 1100px) {
    width: 30vw;
  }

  @media (min-width: 1200px) {
    justify-content: flex-start;
  }
`;

function Cart({ currentSale, setCurrentSale, cartTotal }) {
  return (
    <AsideContainer>
      <CartBox>
        {currentSale.length === 0 ? (
          <EmptyCart />
        ) : (
          <>
            <MainCart
              currentSale={currentSale}
              setCurrentSale={setCurrentSale}
            />
            <FooterCart cartTotal={cartTotal} setCurrentSale={setCurrentSale} />
          </>
        )}
      </CartBox>
    </AsideContainer>
  );
}

export default Cart;
