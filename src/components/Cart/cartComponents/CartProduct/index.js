import styled from "styled-components";

const CartProductBox = styled.li`
  min-height: 4rem;
  min-width: 14.5rem;

  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 5px;

  list-style: none;

  & > span {
    font-size: 8pt;

    &:hover {
      color: #ea2027;
      cursor: pointer;
    }
  }

  @media (min-width: 1200px) {
    min-width: 18rem;
  }
`;

const ImageBox = styled.div`
  min-width: 4rem;
  min-height: 4rem;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #e0e0e0;

  border-radius: 5px;

  overflow: hidden;

  & > img {
    max-height: 4rem;
  }
`;

const ProductInfo = styled.div`
  min-width: 7.5rem;
  max-width: 7.5rem;

  overflow: hidden;

  & > h3 {
    font-size: 10pt;

    white-space: nowrap;

    overflow: hidden;
    text-overflow: ellipsis;

    margin-bottom: 5px;
  }

  & > small {
    color: #828282;
  }

  @media (min-width: 1200px) {
    min-width: 10rem;
    max-width: 10rem;
  }
`;

function CartProduct({ product, currentSale, setCurrentSale }) {
  return (
    <CartProductBox>
      <ImageBox>
        <img src={product.img} alt={product.name} />
      </ImageBox>
      <ProductInfo>
        <h3>{product.name}</h3>
        <small>{product.category}</small>
      </ProductInfo>
      <span
        id={product.id}
        onClick={(e) => {
          const newProds = currentSale.filter(
            (product) => product.id !== parseInt(e.target.id)
          );
          setCurrentSale(newProds);
        }}
      >
        Remover
      </span>
    </CartProductBox>
  );
}

export default CartProduct;
