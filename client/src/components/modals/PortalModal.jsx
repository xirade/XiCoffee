import reactDom from "react-dom";

const modalRoot = document.getElementById("modal-root");

export default function PortalModal({ children }) {
  return reactDom.createPortal(children, modalRoot);
}
