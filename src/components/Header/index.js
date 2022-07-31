import ContainerHeader from "./HeaderComponents/ContainerHeader";
import Logo from "./HeaderComponents/Logo";
import InputSearch from "./HeaderComponents/InputSearch";

function Header({ products, setFilteredProducts }) {
  return (
    <ContainerHeader>
      <Logo />
      <InputSearch
        products={products}
        setFilteredProducts={setFilteredProducts}
      />
    </ContainerHeader>
  );
}

export default Header;
