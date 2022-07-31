import styled from "styled-components";

const ProductDescriptionBox = styled.div`
  width: 230px;
  height: 150px;

  padding: 15px;

  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  & > h2 {
    font-weight: 700;
    font-size: 13pt;

    white-space: nowrap;

    color: #333;
  }

  & > small {
    font-weight: 400;
    font-size: 12px;

    color: #828282;
  }

  & > p {
    font-weight: 600;
    font-size: 14px;

    color: #27ae60;
  }
`;

export default ProductDescriptionBox;
