import Button from "../../../Button";
import ProductCard from "../ProductCard";
import ImgBox from "../ImgBox";
import ProductDescriptionBox from "../ProductDescriptionBox";

function Product({
  product,
  setCurrentSale,
  id,
  products,
  currentSale,
  setModal,
  setRepeated,
}) {
  function showModal(prod) {
    setModal(true);
    setRepeated(prod);
  }

  return (
    <ProductCard>
      <ImgBox>
        <img src={product.img} alt={product.name} />
      </ImgBox>
      <ProductDescriptionBox>
        <h2 title={product.name}>{product.name}</h2>
        <small>{product.category}</small>
        <p>R$ {product.price.toFixed(2)}</p>
        <Button
          id={id}
          width="80px"
          height="30px"
          fontSize="0.8rem"
          bgColor="#27AE60"
          color="#fff"
          hBGColor="#93D7AF"
          name={product.name}
          onClick={(e) => {
            const filtro = products.filter(
              (prod) => prod.id === parseInt(e.target.id)
            );
            currentSale.some((prod) => prod.id === parseInt(e.target.id))
              ? showModal(e.target.name)
              : setCurrentSale([...currentSale, ...filtro]);
          }}
        >
          Comprar
        </Button>
      </ProductDescriptionBox>
    </ProductCard>
  );
}

export default Product;
