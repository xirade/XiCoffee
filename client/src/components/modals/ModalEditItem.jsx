import { createRef, forwardRef } from "react";
import PortalModal from "./PortalModal";

export default forwardRef(function ModalEditItem({ onSubmit, item }, ref) {
  const imgRef = createRef(),
    nameRef = createRef(),
    priceRef = createRef(),
    descRef = createRef();

  return (
    <PortalModal>
      {item && (
        <div key={item._id} ref={ref} id={item._id} className="modal">
          <form onSubmit={onSubmit(imgRef, nameRef, priceRef, descRef)}>
            <div className="modal-content">
              <h4>Item Editor</h4>
              <label>
                Image:
                <input
                  required
                  ref={imgRef}
                  defaultValue={item.img}
                  type="text"
                />
              </label>
              <label>
                Name:
                <input required ref={nameRef} defaultValue={item.name} />
              </label>
              <label>
                Price:
                <input type="number" required ref={priceRef} defaultValue={item.price} />
              </label>
              <label>
                Description:
                <input required ref={descRef} defaultValue={item.desc} />
              </label>
            </div>
            <div className="modal-footer">
              <button
                type="submit"
                className="modal-close waves-effect waves-green btn-flat"
              >
                Update
              </button>
            </div>
          </form>
        </div>
      )}
    </PortalModal>
  );
});
