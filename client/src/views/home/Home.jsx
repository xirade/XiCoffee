import { useEffect, useState } from "react";

// constants
import { API_URL, API_URL_CART_ADD, GET, POST } from "../../constants/api_vars";

// custom hooks
import { useCartItem } from "../../hooks/useCartItem";
import { useFetch } from "../../hooks/useFetch";

// components
import Card from "../../components/cards/Card";
import ShoppingCart from "../../components/dropdowns/ShoppingCart";

// styles
import "./Home.css";
import Loader from "../../components/loader/Loader";

export default function Home() {
  const [method, setMethod] = useState(GET);
  const [url, setUrl] = useState(API_URL);
  const { data, isPending, error, postData } = useFetch(url, method);

  const [items, setItems] = useState([]);

  // context reducer
  const { cart, addToCartHandler, clearCartHandler } = useCartItem();

  // reduce all the items and their price
  const { totalItems, totalPrice } = cart.reduce(
    ({ totalItems, totalPrice }, { payload, quantity }) => ({
      totalItems: totalItems + quantity,
      totalPrice: totalPrice + quantity * payload.price,
    }),
    { totalItems: 0, totalPrice: 0 }
  );

  useEffect(() => {
    if (data && method === GET) {
      setItems(data);
    }
  }, [data, method]);

  const addToCart = (item) => {
    addToCartHandler(item);
  };

  const handleSubmit = () => (e) => {
    e.preventDefault();

    setMethod(POST);
    setUrl(API_URL_CART_ADD);

    postData(cart);

    clearCartHandler();
  };

  const filteredItems =
    items && items.filter((item) => item.isProduction === true);

  return (
    <div className="container">
      {error && <p className="red">{error}</p>}
      {isPending && <Loader />}
      {items && (
        <>
          <ShoppingCart
            onSubmit={handleSubmit}
            totalItems={totalItems}
            totalPrice={totalPrice}
            cartItems={cart}
          />
          <Card onAdd={addToCart} items={filteredItems} />
        </>
      )}
    </div>
  );
}
