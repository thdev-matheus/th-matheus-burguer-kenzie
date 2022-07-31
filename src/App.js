import Header from "./components/Header";
import MainContainer from "./components/MainContainer";
import ProductsList from "./components/ProductList";
import Cart from "./components/Cart";
import { useState, useEffect } from "react";
import api from "./data/api.js";
import Modal from "./components/modal";
import Loading from "./components/Loading";

function App() {
  !localStorage.cart && localStorage.setItem("cart", "[]");

  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentSale, setCurrentSale] = useState(JSON.parse(localStorage.cart));
  const [cartTotal, setCartTotal] = useState(0);
  const [modal, setModal] = useState(false);
  const [repeated, setRepeated] = useState("");

  useEffect(() => {
    setLoading(true);

    api
      .get()
      .then((res) => {
        setProducts(res.data);
        setFilteredProducts(res.data);
      })
      .catch((err) => alert(err))
      .finally(() => {
        setTimeout(() => {
          setLoading(false);
        }, 2000);
      });
  }, []);

  useEffect(() => {
    currentSale.length === 0
      ? setCartTotal(0)
      : setCartTotal(currentSale.reduce((a, b) => a + b.price, 0));
    localStorage.setItem("cart", JSON.stringify(currentSale));
  }, [currentSale]);

  return (
    <>
      <Header products={products} setFilteredProducts={setFilteredProducts} />
      <MainContainer>
        {loading ? (
          <Loading />
        ) : (
          <ProductsList
            products={filteredProducts}
            currentSale={currentSale}
            setCurrentSale={setCurrentSale}
            setModal={setModal}
            setRepeated={setRepeated}
          />
        )}
        <Cart
          currentSale={currentSale}
          setCurrentSale={setCurrentSale}
          cartTotal={cartTotal}
        />
      </MainContainer>
      {modal && <Modal setModal={setModal} repeated={repeated} />}
    </>
  );
}

export default App;
