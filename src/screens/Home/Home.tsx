import { HomeStyled } from "./styles";
import { IProductCard } from "../../components/ProductCard/types";

import Frame from "../../components/Frame/Frame";
import ProductCard from "../../components/ProductCard/ProductCard";

import useStorage from "../../hooks/Usestorage/Usestorage";
import { useNavigate } from "react-router-dom";

export default function HomeScreen( ) {
  const nav = useNavigate( );

  const [products] = useStorage<IProductCard[ ]>("products", [
    {
      id: "100000",
      name: "Teclado mecânico RGB 60%",
      price: 200,
      description: "- Teclado mecanico\n- RGB\n- 60%",
      location: "Pedro Canario - ES",
      images: [{ id: "0", src: "https://cdn.discordapp.com/attachments/885578383902265364/1272175900338819072/k6c5d5-1-z1gvdpegnx.png?ex=66ba05a2&is=66b8b422&hm=7b484caaa3ea4083b521d400bf389c2c5611b4b793fc1139c72cc212837f2645&" }]
    },
    {
      id: "100001",
      name: "Mouse gamer Vampire",
      price: 200,
      description: "- Mouse gamer\n- RGB",
      location: "Pedro Canario - ES",
      images: [{ id: "0", src: "https://cdn.discordapp.com/attachments/885578383902265364/1272177515741315083/m720rgb-7_1000x1000-64b58e66813bc.png?ex=66ba0723&is=66b8b5a3&hm=afb2f1b25d64a1233ac8e5b9d0be66057e469f1314f896bb6e9b5b30fbafa729&" }]
    }
  ], true);

  return (
    <Frame>
      <HomeStyled>
        <div className="header">
          <div>
            <div className="icon">
              <img src="./map.png" alt="" />
              <span>Proximo de você</span>
            </div>

            <div className="icon">
              <img src="./trade.png" alt="" />
              <span>Negociar</span>
            </div>

            <div className="icon">
              <img src="./money.png" alt="" />
              <span>Formas de pagamento</span>
            </div>
          </div>
        </div>

        <div className="content">
          {
            products.length == 0
            ? <span>Nenhum produto disponivel</span>
            : <div className="products">{products.map((data) => <ProductCard onClick={( ) => nav(`/product?id=${data.id}`)} key={data.id} {...data} />)}</div>
          }
        </div>
      </HomeStyled>
    </Frame>
  );
};