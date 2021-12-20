import { Modal, Dropdown } from "materialize-css/dist/js/materialize.min.js";
import { useRef, useCallback } from "react";

export default function useMaterializeWithRefCallback() {
  const ref = useRef(null);
  const setRef = useCallback(
    (node) => {
      if (node) {
        // check if a node actually passed
        ref.current = node;

        switch (ref.current.classList[0]) {
          case "modal":
            Modal.init(ref.current, {
              inDuration: 300,
              outDuration: 300,
              opacity: 0.5,
              dismissible: true,
              startingTop: "4%",
              endingTop: "10%",
            });
            break;
          case "dropdown-trigger":
            Dropdown.init(ref.current, {
              inDuration: 300,
              outDuration: 300,
            });
            Dropdown.getInstance(ref.current).recalculateDimensions();
            break;
          default:
            break;
        }
      }
    },
    [ref]
  );

  return [setRef];
}
