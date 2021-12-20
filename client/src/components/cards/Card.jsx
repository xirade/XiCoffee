// styles
import "./Card.css";

export default function Card({ items, onAdd }) {
  return (
    <div className="row">
      {items.length !== 0 ? (
        items.map((item) => (
          <div key={item._id} className="col s12 m6 l4">
            <div className="card">
              <div className="card-image">
                <img src={item.img} alt={item.name} />
                <span className="card-title"> {item.name} </span>
              </div>
              <div className="card-content">
                <p>{item.desc}</p>
                <span> ${item.price} </span>
              </div>
              <div className="card-action">
                <button
                  onClick={() => onAdd(item)}
                  className="waves-effect waves-light btn-large pink accent-2"
                >
                  <span>Buy</span>
                  <i className="small material-icons">add_shopping_cart</i>
                </button>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p className="no-items left">No items to display...</p>
      )}
    </div>
  );
}
