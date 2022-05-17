import "./style.scss";

import bodyMock from "./mock";

import { AiOutlineShoppingCart as Cart } from "react-icons/ai";

import Sliders from "../Sliders/Slider";
import SliderData from "../Sliders/SliderData";
import { useProductContext } from "../../Hooks/productsContext";

import { useState } from "react";

const produto = bodyMock[0];

function Body() {
  const [numero, setNumero] = useState(0);
  const { products, addProduct, removeProduct } = useProductContext();

  const handleMinus = () => {
    if (numero > 0) {
      return setNumero(numero - 1);
    }
  };

  const handlePlus = () => {
    setNumero(numero + 1);
  };

  const handleAddToCart = () => {
    if (numero <= 0) return;

    const produtoPrevious = products.find((prod) => prod.id === produto.id);

    if (produtoPrevious) {
      removeProduct(produtoPrevious.id);

      addProduct({
        ...produtoPrevious,
        quantity: produtoPrevious.quantity + numero,
      });

      return;
    }

    const produtoCart = { ...produto, quantity: numero };

    addProduct(produtoCart);
  };

  return (
    <main className="container__main">
      <section>
        <div className="main__img">
          <Sliders slides={SliderData} />
        </div>
      </section>
      <section className="description">
        <h3>Sneaker company</h3>
        <h1>{produto.name}</h1>
        <p>{produto.description}</p>
        <div className="prices">
          <span className="price">${produto.price}</span>
          <span className="discount">50%</span>
          <p className="price__off">${produto.sale}</p>
        </div>
        <div className="btn">
          <div className="div__buttons">
            <button className="btn__minus" onClick={handleMinus}>
              -
            </button>
            <div className="middle__number">{numero}</div>
            <button className="btn__plus" onClick={handlePlus}>
              +
            </button>
          </div>

          <button onClick={handleAddToCart} className="btn__cart">
            <Cart className="btn__cart-icon" />
            Add to cart
          </button>
        </div>
      </section>
    </main>
  );
}

export default Body;
