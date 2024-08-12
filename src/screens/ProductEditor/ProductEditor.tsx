// import { useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

import Frame from "../../components/Frame/Frame";
import Button from "../../components/Button/Button";
import ProductFields from "../../components/ProductFields/ProductFields";
import { IProduct } from "../../components/ProductCard/types";

export default function ProductEditorScreen( ) {
  const id = new URLSearchParams(window.location.search).get("id");

  // const nav = useNavigate( );

  const productRef = useRef<HTMLDivElement>(null);

  const [error, setError] = useState("");
  const [product, setProduct] = useState<IProduct | undefined>(undefined);

  const handleEdit = ( ) => {
    // if(!productRef.current) return;

    // setError("");

    // if(!productRef.current) return;
    
    // const name = productRef.current.querySelector("[name=\"product-name\"]") as HTMLInputElement;
    // const price = productRef.current.querySelector("[name=\"product-price\"]") as HTMLInputElement;
    // const location = productRef.current.querySelector("[name=\"product-location\"]") as HTMLInputElement;

    // const about = productRef.current.querySelector("[name=\"product-about\"]") as HTMLTextAreaElement;
    // const images = Array.from(productRef.current.querySelectorAll(".images > div > div"));

    // if(!name.value.length) return setError("Informe o nome do produto");
    // if(!price.value.length) return setError("Informe o preço do produto");
    // if(!location.value.length) return setError("Informe o local onde o produto esta");
    // if(!about.value.length) return setError("Informe a descrição do produto");

    // if(!images.length) return setError("Informe as imagens do produto");

    // // nav(-1);
  };

  useEffect(( ) => {
    if(!id) {
      setError("Você precisa informar o ID do produto");
      return;
    };

    const found = JSON.parse(window.localStorage.getItem("products") || "[ ]").find((product: any) => product.id == id);

    if(!found) {
      setError("Não foi possivel encontrar o produto");
      return;
    };

    setProduct(found);
  }, [ ]);

  return (
    <Frame>
      {product ? <ProductFields ref={productRef} product={product} /> : <div></div>}

      <div>
        <span style={{ display: "block", textAlign: "center", padding: ".5rem", color: "#ff2222" }}>{error}</span>

        <Button onClick={handleEdit}>
          <span>Salvar</span>
        </Button>
      </div>
    </Frame>
  );
};