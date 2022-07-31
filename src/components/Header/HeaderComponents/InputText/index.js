import styled from "styled-components";

const InputText = styled.input`
  height: 2rem;
  width: 12rem;

  padding-left: 5px;

  &:focus {
    box-shadow: 0 0 0 0;
    outline: 0;
  }

  &::placeholder {
    color: #e0e0e0;
  }
`;

export default InputText;
