import { Link } from "react-router-dom";

export function CountryItem({ url, name }) {
    return (
      <Link to={`/country/${name}`}>
      <li className="item-container">
        <img src={url} className="item-image" />
        <h2 className="item-name">{name}</h2>
      </li>
      </Link>
    );
  }
    