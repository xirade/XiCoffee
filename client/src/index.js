import ReactDOM from "react-dom";
import App from "./App";

// styles
import "./index.css";
import "materialize-css/dist/css/materialize.min.css";
import "material-icons/iconfont/material-icons.css";
import { CartProvider } from "./context/CartContext";

ReactDOM.render(
  <CartProvider>
    <App />
  </CartProvider>,
  document.getElementById("root")
);
