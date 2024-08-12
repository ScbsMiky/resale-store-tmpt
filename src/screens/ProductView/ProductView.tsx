import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { ProductViewStyled } from "./styles";
import { IProduct } from "../../components/ProductCard/types";

import Frame from "../../components/Frame/Frame";
import Button from "../../components/Button/Button";

export default function ProductViewScreen( ) {
  const nav = useNavigate( );

  const [error, setError] = useState("");

  const [product, setProduct] = useState<IProduct | undefined>(undefined);
  
  const [selectedImage, setSelectedImage] = useState({ id: "", src: "" });

  useEffect(( ) => {
    const id = new URLSearchParams(window.location.search).get("id");

    if(!id) {
      setError("Você precisa informar a ID do produto que deseja buscar");
      return;
    };

    const found = JSON.parse(window.localStorage.getItem("products") || "[ ]").find((product: any) => product.id == id);

    if(!found) {
      setError("Não foi possivel encontrar o produto");
      return;
    };

    setProduct(found);
    setSelectedImage(found.images[0]);
  }, [ ]);

  return (
    <Frame>
      {
        (error || !product)
        ? <div><span>{error || "Produto não encontrado"}</span></div>
        : <ProductViewStyled>
            <div className="images">
              <div className="image">
                <img src={selectedImage.src} alt="" />
              </div>

              <div className="dots">{product.images.map((i) => <div onClick={( ) => setSelectedImage(i)} className={selectedImage.id == i.id ? "selected" : ""} key={i.id}></div>)}</div>
            </div>

            <div className="product">
              <div>
                <div className="title">
                  <h1>{product.name}</h1>
                </div>

                <br />

                <div className="price">
                  <h1>Preço</h1>
                  <span>{product.price.toLocaleString("pt-br", { style: "currency", currency: "brl" })}</span>
                </div>

                <br />

                <div className="about">
                  <h1>Sobre</h1>
                  {product.description.split("\n").map((content, i) => <p key={i.toString()}>{content}</p>)}
                </div>

                <br />

                <div className="location">
                  <h1>Localização</h1>
                  <span>{product.location}</span>
                </div>
              </div>
            
              <Button onClick={( ) => nav(`/profile/cart`)}>
                <div>
                  <span>Comprar</span>
                  <span>(Colocar no carrinho)</span>
                </div>
              </Button>
            </div>
          </ProductViewStyled>
      }
    </Frame>
  );
};