const API_URL = `${
  process.env.REACT_APP_API_BASE_URL || "http://127.0.0.1:8080/api"
}/product`;
const API_URL_UPDATE = `${
  process.env.REACT_APP_API_BASE_URL || "http://127.0.0.1:8080/api"
}/update`;
const API_URL_CART = `${
  process.env.REACT_APP_API_BASE_URL || "http://127.0.0.1:8080/api"
}/cart`;
const API_URL_CART_ADD = `${
  process.env.REACT_APP_API_BASE_URL || "http://127.0.0.1:8080/api"
}/cart/add`;
const GET = "GET";
const POST = "POST";

export { API_URL, API_URL_UPDATE, GET, POST, API_URL_CART, API_URL_CART_ADD };
