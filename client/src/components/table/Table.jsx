// styles
import "./Table.css";

export default function Table({ onEditItem, onRemoveProduction, items }) {
  const filteredItems = items.filter(
    (currentItem) => currentItem.isProduction === true
  );
  return (
    <>
      {filteredItems && filteredItems.length !== 0 ? (
        <table className="centered">
          <thead>
            <tr>
              <th>Name</th>
              <th>Item Price</th>
              <th>Item Option</th>
            </tr>
          </thead>

          <tbody>
            {filteredItems &&
              filteredItems.map(
                (item) =>
                  item.isProduction === true && (
                    <tr className="scale-transition" key={`item_${item._id}`}>
                      <td>{item.name}</td>
                      <td>${item.price}</td>
                      <td>
                        <button
                          type="button"
                          data-target={item._id}
                          className="waves-effect waves-light btn modal-trigger green accent-4"
                          onClick={() => onEditItem(item._id)}
                        >
                          Edit
                        </button>
                        <button
                          type="button"
                          className="waves-effect waves-light btn deep-orange accent-4"
                          onClick={() => {
                            onRemoveProduction(item);
                          }}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  )
              )}
          </tbody>
        </table>
      ) : (
        <p className="no-items left">No items to display...</p>
      )}
    </>
  );
}
