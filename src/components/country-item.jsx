export function CountryItem({ url, name }) {
    return (
      <li className="item-container">
        <img src={url} className="item-image" />
        <h2 className="item-name">{name}</h2>
      </li>
    );
  }
  