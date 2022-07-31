import styled from "styled-components";

const ProductsListContainer = styled.section`
  display: flex;
  gap: 10px;

  padding: 10px;

  overflow: scroll;

  &::-webkit-scrollbar {
    display: none;
  }

  @media (min-width: 768px) {
    overflow: unset;

    flex-wrap: wrap;
    justify-content: center;

    margin: auto;
  }

  @media (min-width: 980px) {
    gap: 20px;
  }

  @media (min-width: 1024px) {
    width: 73vw;
    height: 85vh;

    overflow: scroll;

    flex-wrap: wrap;
    justify-content: center;
    gap: 10px;

    margin: auto;
  }

  @media (min-width: 1100px) {
    width: 70vw;

    gap: 10px;
  }

  @media (min-width: 1200px) {
    width: 70vw;

    gap: 20px;
  }
`;

export default ProductsListContainer;
