import ProductsListContainer from "./productsListComponents/ProductListContainer";
import Product from "./productsListComponents/Product";

function ProductsList({
  products,
  setCurrentSale,
  currentSale,
  setModal,
  setRepeated,
}) {
  return (
    <ProductsListContainer>
      {products.map((product) => (
        <Product
          key={product.id}
          id={product.id}
          products={products}
          product={product}
          currentSale={currentSale}
          setCurrentSale={setCurrentSale}
          setModal={setModal}
          setRepeated={setRepeated}
        />
      ))}
    </ProductsListContainer>
  );
}

export default ProductsList;
