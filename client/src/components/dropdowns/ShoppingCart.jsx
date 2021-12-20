import useMaterializeWithRefCallback from "../../hooks/useMaterializeWithRefCallback";

// styles
import "./ShoppingCart.css";

export default function ShoppingCart({
  cartItems,
  totalItems,
  totalPrice,
  onSubmit,
}) {
  const [ref] = useMaterializeWithRefCallback();

  return (
    <div className="cart">
      <button
        ref={ref}
        className="dropdown-trigger btn cyan darken-3"
        data-target="cart"
      >
        <i className="material-icons">shopping_cart</i>
        Shopping cart
        {totalItems > 0 ? (
          <span className="new badge blue-text text-darken-4 yellow accent-3">
            {totalItems}
          </span>
        ) : (
          <span className="badge white-text"> empty </span>
        )}
      </button>
      <form
        onSubmit={onSubmit()}
        id="cart"
        className="dropdown-content collection"
      >
        <ul>
          {cartItems.length !== 0 ? (
            <>
              {cartItems.map(({ payload, quantity }, index) => (
                <li
                  key={`${payload.name}_${index}`}
                  className="collection-item"
                >
                  <div>
                    <span>
                      {payload.name} x {quantity}
                    </span>
                    <span>{payload.price}$</span>
                  </div>
                </li>
              ))}
              <>
                <br />
                <li className="collection-item">
                  <div>
                    <span>Total</span>
                    <span>{totalPrice.toFixed(2)}$</span>
                  </div>
                </li>
                <br />
                <button className="right waves-effect waves-light btn pink accent-2">
                  Pay<i className="material-icons">attach_money</i>
                </button>
              </>
            </>
          ) : (
            <span className="no-items">No items added yet.</span>
          )}
        </ul>
      </form>
    </div>
  );
}
