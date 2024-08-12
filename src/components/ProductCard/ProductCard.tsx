import { IProductCard } from "./types";
import { ProductCardStyled } from "./styles";

export default function ProductCard(props: IProductCard) {
  return (
    <ProductCardStyled onClick={props.onClick}>
      <div className="banner"><div style={{ backgroundImage: `url(${props.images[0].src})` }}></div></div>

      <div className="title">
        <span>{props.name}</span>
      </div>

      <div className="price">
        <span>{props.price.toLocaleString("pt-br", { style: "currency", currency: "brl" })}</span>
      </div>

      <div className="location">
        <svg viewBox="0 0 24 24"><path fill="currentColor" d="M12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5M12,2A7,7 0 0,0 5,9C5,14.25 12,22 12,22C12,22 19,14.25 19,9A7,7 0 0,0 12,2Z" /></svg>
        <span>{props.location}</span>
      </div>
    </ProductCardStyled>
  );
};