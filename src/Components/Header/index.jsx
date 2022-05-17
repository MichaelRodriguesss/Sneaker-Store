import "./style.scss";
import { AiOutlineShoppingCart as Cart } from "react-icons/ai";
import { BsTrash as Trash } from "react-icons/bs";

import { useProductContext } from "../../Hooks/productsContext";

import { useState } from "react";

function Header() {
  const [dropdown, setDropdown] = useState(false);
  const { products, decreaseQuantityProduct } = useProductContext();

  const handleRemoveProduct = (id) => {
    decreaseQuantityProduct(id);
  };

  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };

  return (
    <header className="header_example">
      <nav className="main__header">
        <img
          onClick={toggleMenu}
          src="/icons/icon-menu.svg"
          alt="Mobile icon"
          className="toggle__menu"
        />
        <img src="/icons/logo.svg" alt="Logo" className="logo" />
        <ul>
          <li>
            <p className="navbar__options">Collections</p>
          </li>
          <li>
            <p className="navbar__options">Men</p>
          </li>
          <li>
            <p className="navbar__options">Women</p>
          </li>
          <li>
            <p className="navbar__options">About</p>
          </li>
          <li>
            <p className="navbar__options">Contact</p>
          </li>
        </ul>
        <div className="right__header">
          <div
            className={dropdown === true ? "toggle__cart" : "toggle__cartoff"}
          >
            <h3>Cart</h3>
            <div className="toggle__cart__two">
              {products.length > 0 ? (
                products.map((product, index) => (
                  <div className="container__cart" key={index}>
                    <div className="img__box">
                      <img
                        src={`images/${product.img.url}`}
                        alt="cart shoes"
                        className="cart__img"
                      />
                      <div>
                        <p className="cart__items">{product.name}</p>
                        <p className="cart__items">
                          ${product.price} x{product.quantity} $
                          {product.price * product.quantity}
                        </p>
                      </div>
                      <Trash
                        onClick={() => handleRemoveProduct(product.id)}
                        className="trash"
                      />
                    </div>
                    <button className="btn__checkout">Checkout</button>
                  </div>
                ))
              ) : (
                <p>Your cart is empty.{"".toLocaleUpperCase()}</p>
              )}
            </div>
          </div>
          <div className="cart__box">
            {products[0]?.quantity && (
              <p className="cart__notification">{products[0].quantity}</p>
            )}
            <Cart
              className="cart__icon"
              onClick={() => setDropdown(!dropdown)}
            />
            <img
              src="/images/image-avatar.png"
              alt="Avatar icon"
              className="avatar__icon"
            />
          </div>
        </div>
      </nav>
      <nav className={open === true ? "menu__mobile" : "menu__mobileoff"}>
        <img
          onClick={toggleMenu}
          src="/icons/icon-close.svg"
          alt="Mobile icon"
          className="toggle__close"
        />

        <ul>
          <li>Collections</li>
          <li>Men</li>
          <li>Women</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
      <div
        onClick={toggleMenu}
        className={open === true ? "overlay" : ""}
      ></div>
    </header>
  );
}

export default Header;
