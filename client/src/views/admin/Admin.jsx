import { useEffect, useState } from "react";
import { useFetch } from "../../hooks/useFetch";
import { API_URL, API_URL_UPDATE, GET, POST } from "../../constants/api_vars";

// components
import Loader from "../../components/loader/Loader";
import ModalService from "../../components/modals/ModalService";
import Table from "../../components/table/Table";

// styles
import "./Admin.css";

export default function Admin() {
  const [url, setUrl] = useState(API_URL);
  const [method, setMethod] = useState(GET);
  const { data, isPending, error, postData } = useFetch(url, method);

  const [items, setItems] = useState([]);
  const [item, setItem] = useState(null);

  useEffect(() => {
    if (data && method === GET) {
      setItems(data);
    }
  }, [data, method]);

  const handleAddProduction = (currentItem) => {
    const isExistObj = items.some((item) => item._id === currentItem._id);
    if (isExistObj) {
      setUrl(`${API_URL_UPDATE}/${currentItem._id}`);
      setMethod(POST);
      const updatedCurrentItem = { ...currentItem, isProduction: true };
      postData({ ...updatedCurrentItem });
      setItems((prevState) => {
        const newArray = [...prevState];
        const objIndex = prevState.findIndex(
          (obj) => obj._id === currentItem._id
        );
        newArray[objIndex] = { _id: currentItem._id, ...updatedCurrentItem };
        return newArray;
      });
    }
  };

  const handleRemoveProduction = (currentItem) => {
    setUrl(`${API_URL_UPDATE}/${currentItem._id}`);
    setMethod(POST);
    const updatedCurrentItem = { ...currentItem, isProduction: false };
    postData({ ...updatedCurrentItem });
    setItems((prevState) => {
      const newArray = [...prevState];
      const objIndex = prevState.findIndex(
        (obj) => obj._id === currentItem._id
      );
      newArray[objIndex] = { _id: currentItem._id, ...updatedCurrentItem };
      return newArray;
    });
  };

  const handleEditItem = (id) => {
    const currentItem = items.find((editItem) => editItem._id === id);
    setItem(currentItem);
  };

  const handleSubmit = (imgRef, nameRef, priceRef, descRef) => (e) => {
    e.preventDefault();

    const obj = {
      name: nameRef.current.value,
      desc: descRef.current.value,
      price: Number(priceRef.current.value),
      img: imgRef.current.value,
      isProduction: true,
    };

    setUrl(`${API_URL_UPDATE}/${item._id}`);
    setMethod(POST);

    postData({
      ...obj,
    });

    // UPDATE ITEMS STATE
    setItems((prevState) => {
      const newArray = [...prevState];
      const objIndex = prevState.findIndex((state) => state._id === item._id);
      newArray[objIndex] = { _id: item._id, ...obj };
      return newArray;
    });
  };

  return (
    <div className="container">
      {error && <p className="text-red text-accent-4">{error}</p>}
      {isPending && <Loader />}
      {data && (
        <>
          <div className="add-btn right">
            <span>Add item</span>
            <button
              type="button"
              data-target="modal_add"
              className="btn-floating btn-large waves-effect waves-light yellow darken-4 modal-trigger"
            >
              <i className="material-icons">add</i>
            </button>
          </div>
          <Table
            onRemoveProduction={handleRemoveProduction}
            onEditItem={handleEditItem}
            items={items}
          />
          <ModalService
            onSubmit={handleSubmit}
            onAddProduction={handleAddProduction}
            item={item}
            items={items}
          />
        </>
      )}
    </div>
  );
}
