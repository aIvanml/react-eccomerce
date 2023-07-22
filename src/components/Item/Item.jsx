import { Link } from "react-router-dom";
import "./Item.css";

const Item = ({ title, id, description, price, stock, img }) => {
  return (
    <Link to={`/product/${id}`}>
      <div className="Card">
        <picture>
          <img src={img}></img>
        </picture>
        <section className="section">
          <h2> {title} </h2>
          <p> {description} </p>
          <p>Precio: ${price} </p>
        </section>
        <footer>
          <button>Ver producto</button>
        </footer>
      </div>
    </Link>
  );
};

export default Item;
