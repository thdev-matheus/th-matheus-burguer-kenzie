import styled from "styled-components";
import Button from "../../../Button";

const FooterCartContainer = styled.div`
  height: 6rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  border-top: 2px solid #e0e0e0;
  background-color: #f5f5f5;

  & > div {
    width: 100%;

    display: flex;
    justify-content: space-between;

    padding: 0 15px;

    & > p {
      font-weight: 600;

      color: #333;
    }

    & > span {
      font-weight: 600;

      color: #828282;
    }
  }
`;

function FooterCart({ cartTotal, setCurrentSale }) {
  return (
    <FooterCartContainer>
      <div>
        <p>Total</p>
        <span>R$ {cartTotal.toFixed(2)}</span>
      </div>
      <Button
        width="15rem"
        height="40px"
        fontSize="0.8rem"
        bgColor="#e0e0e0"
        color="#828282"
        hBGColor="#EA2027"
        hColor="#fff"
        onClick={() => {
          setCurrentSale([]);
        }}
      >
        Remover todos
      </Button>
    </FooterCartContainer>
  );
}

export default FooterCart;
