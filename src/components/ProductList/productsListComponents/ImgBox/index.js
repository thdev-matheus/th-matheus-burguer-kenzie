import styled from "styled-components";

const ImgBox = styled.div`
  width: 230px;
  height: 130px;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #f5f5f5;

  & > img {
    height: 130px;
  }
`;

export default ImgBox;
