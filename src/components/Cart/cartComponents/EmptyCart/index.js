import styled from "styled-components";

const EmptyCartContainer = styled.div`
  height: 150px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;

  background-color: #f5f5f5;
`;

function EmptyCart() {
  return (
    <EmptyCartContainer>
      <h3>Sua sacola está vazia</h3>
      <small>Adicione itens</small>
    </EmptyCartContainer>
  );
}

export default EmptyCart;
