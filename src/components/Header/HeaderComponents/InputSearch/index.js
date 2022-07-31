import { useState } from "react";
import Button from "../../../Button";
import SearchBox from "../SearchBox";
import InputText from "../InputText";

function InputSearch({ products, setFilteredProducts }) {
  const [search, setSearch] = useState("");
  return (
    <SearchBox>
      <InputText
        type="text"
        placeholder="Digitar pesquisa"
        onChange={(e) => setSearch(e.target.value.toLowerCase())}
      />
      <Button
        width="80px"
        height="30px"
        fontSize="0.8rem"
        bgColor="#27AE60"
        color="#fff"
        hBGColor="#93D7AF"
        onClick={() => {
          search === ""
            ? setFilteredProducts(products)
            : setFilteredProducts(
                products.filter((product) => {
                  return (
                    product.name.toLowerCase().includes(search) ||
                    product.category.toLowerCase().includes(search)
                  );
                })
              );
        }}
      >
        Pesquisar
      </Button>
    </SearchBox>
  );
}

export default InputSearch;
