import styled from "styled-components";

const CartHeader = styled.div`
  height: 50px;

  display: flex;
  align-items: center;
  justify-content: flex-start;

  padding-left: 15px;

  font-size: 9pt;

  color: #fff;
  background-color: #27ae60;
`;

function HeaderCart() {
  return (
    <CartHeader>
      <h2>Carrinho de compras</h2>
    </CartHeader>
  );
}

export default HeaderCart;
