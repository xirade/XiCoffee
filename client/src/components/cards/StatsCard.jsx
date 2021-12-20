// styles
import "./StatsCard.css";

export default function StatsCard({ stats }) {
  return (
    <div className="row">
      {stats.map((item) => (
        <div key={`stat-${item.title}`} className="col s12 m6 l4">
          <div className="card">
            <div className="card-content black-text">
              <span className="card-title">{item.title}</span>
              <ul className="collection">
                {item.value.length !== 0 ? (
                  item.value.map((product) => (
                    <li key={product.name} className="collection-item">
                      <div>
                        <span>{product.name}</span>
                        <span>{product.totalQuantity}</span>
                      </div>
                    </li>
                  ))
                ) : (
                  <li className="collection-item">No items to display...</li>
                )}
              </ul>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
