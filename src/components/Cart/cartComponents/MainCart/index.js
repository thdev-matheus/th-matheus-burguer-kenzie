import styled from "styled-components";
import CartProduct from "../CartProduct";

const MainCartContainer = styled.ul`
  min-height: 18rem;
  max-height: 18rem;
  max-width: 16rem;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;

  background-color: #f5f5f5;

  padding: 10px;

  overflow: scroll;

  &::-webkit-scrollbar {
    display: none;
  }

  @media (min-width: 1200px) {
    max-width: 20rem;
  }
`;

function MainCart({ currentSale, setCurrentSale }) {
  return (
    <MainCartContainer>
      {currentSale.map((product) => (
        <CartProduct
          key={product.id}
          product={product}
          currentSale={currentSale}
          setCurrentSale={setCurrentSale}
        />
      ))}
    </MainCartContainer>
  );
}

export default MainCart;
