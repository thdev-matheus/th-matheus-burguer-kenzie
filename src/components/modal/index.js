import Container from "./modalComponents/Container";
import ModalBox from "./modalComponents/ModalBox";

function Modal({ setModal, repeated }) {
  return (
    <Container
      onClick={() => {
        setModal(false);
      }}
    >
      <ModalBox>
        <h2>Atenção</h2>
        <h3>Você já possui "{repeated}" no carrinho</h3>
      </ModalBox>
    </Container>
  );
}

export default Modal;
