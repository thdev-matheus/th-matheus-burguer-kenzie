import styled from "styled-components";

const ContainerHeader = styled.header`
  width: 100vw;
  height: 8rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 15px;

  background-color: #f5f5f5;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;

    padding: 0 50px;

    height: 5rem;
  }

  @media (min-width: 1200px) {
    padding: 0 100px;
  }
`;

export default ContainerHeader;
