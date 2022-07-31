import styled from "styled-components";

const ModalBox = styled.div`
  width: 280px;
  height: 200px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;

  text-align: center;

  border-radius: 15px;
  outline: 3px solid #27ae60;
  outline-offset: -10px;

  background-color: #fff;
  color: #ea2027;

  & > h2 {
    font-size: 18pt;
  }

  & > h3 {
    font-size: 12pt;
  }
`;

export default ModalBox;
