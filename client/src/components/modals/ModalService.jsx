// modals
import useMaterializeWithRefCallback from "../../hooks/useMaterializeWithRefCallback";
import ModalAddItem from "./ModalAddItem";
import ModalEditItem from "./ModalEditItem";

export default function ModalService({ onSubmit, onAddProduction, items, item }) {
  const [ref] = useMaterializeWithRefCallback();

  return (
    <>
      {item && <ModalEditItem ref={ref} item={item} onSubmit={onSubmit} />}
      {items && <ModalAddItem ref={ref} items={items} onAddProduction={onAddProduction} />}
    </>
  );
}
