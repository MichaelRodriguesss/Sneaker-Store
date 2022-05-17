import { useState, createContext, useContext } from "react";

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  function addProduct(product) {
    setProducts((oldProduct) => [...oldProduct, product]);
  }

  function removeProduct(id) {
    setProducts([]);
  }

  function decreaseQuantityProduct(id) {
    let produto = products.find((item) => item.id === id);

    produto = { ...produto, quantity: produto.quantity - 1 };

    if (produto.quantity <= 0) {
      removeProduct(id);
      return;
    }

    setProducts([produto]);
  }

  return (
    <ProductContext.Provider
      value={{ addProduct, removeProduct, products, decreaseQuantityProduct }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export const useProductContext = () => {
  return useContext(ProductContext);
};
