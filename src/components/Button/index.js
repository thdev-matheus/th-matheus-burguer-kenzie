import styled from "styled-components";

const Button = styled.button`
  width: ${(props) => props.width};
  height: ${(props) => props.height};

  font-size: ${(props) => props.fontSize};

  background-color: ${(props) => props.bgColor};
  color: ${(props) => props.color};

  border-radius: 0.5rem;

  display: flex;
  justify-content: center;
  align-items: center;

  margin-right: 5px;

  transition: background-color 0.6s;

  &:hover {
    background-color: ${(props) => props.hBGColor};
    color: ${(props) => props.hColor};

    transition: background-color 0.6s;

    cursor: pointer;
  }
`;

export default Button;
