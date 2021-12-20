import { forwardRef } from "react";
import PortalModal from "./PortalModal";

export default forwardRef(function ModalAddItem(
  { items, onAddProduction },
  ref
) {
  const filteredItems = items.filter(
    (currentItem) => currentItem.isProduction === false
  );
  return (
    <PortalModal>
      <div ref={ref} id="modal_add" className="modal">
        <div className="modal-content">
          <ul className="collection">
            {filteredItems.length !== 0 ? (
              filteredItems.map((item) => (
                <li key={item._id} className="collection-item avatar">
                  <img src={item.img} alt={item.name} className="circle" />
                  <span className="title">{item.name}</span>
                  <p className="flow-text">
                    ${item.price}
                    <br />
                    {item.desc.substring(0, 20)}...
                  </p>
                  <button
                    type="button"
                    className="btn secondary-content"
                    onClick={() => onAddProduction(item)}
                  >
                    Add
                  </button>
                </li>
              ))
            ) : (
              <p className="no-items left">All items in production...</p>
            )}
          </ul>
        </div>
      </div>
    </PortalModal>
  );
});
