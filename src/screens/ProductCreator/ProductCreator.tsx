import { useRef, useState } from "react";

// import { useNavigate } from "react-router-dom";

import Frame from "../../components/Frame/Frame";
import Button from "../../components/Button/Button";
import ProductFields from "../../components/ProductFields/ProductFields";

export default function ProductCreatorScreen( ) {
  // const nav = useNavigate( );

  const productRef = useRef<HTMLDivElement>(null);

  const [error] = useState("");

  const handleCreate = ( ) => {
    // setError("");

    // if(!productRef.current) return;
    
    // const name = productRef.current.querySelector("[name=\"product-name\"]") as HTMLInputElement;
    // const price = productRef.current.querySelector("[name=\"product-price\"]") as HTMLInputElement;
    // const about = productRef.current.querySelector("[name=\"product-about\"]") as HTMLTextAreaElement;
    // const images = Array.from(productRef.current.querySelectorAll(".images > div > div"));

    // if(!name.value.length) return setError("Informe o nome do produto");
    // if(!price.value.length) return setError("Informe o preço do produto");
    // if(!about.value.length) return setError("Informe a descrição do produto");

    // if(!images.length) return setError("Informe as imagens do produto");

    // const products = JSON.parse(window.localStorage.getItem("products") || "[ ]");
    
    // products.push({
    //   id: productID,
    //   name: name.value,
    //   price: Number(price.value),
    //   description: about.value,
    //   images: images.map((element) => ({ id: element.id, src: element.querySelector("img")!.src })),
    // });
    
    // window.localStorage.setItem("products", JSON.stringify(products));

    // nav(`/product/editor?id=${productID}`);
  };

  return (
    <Frame>
      <ProductFields ref={productRef} />

      <div>
        <span style={{ display: "block", textAlign: "center", padding: ".5rem", color: "#ff2222" }}>{error}</span>

        <Button onClick={handleCreate}>
          <span>Criar produto</span>
        </Button>
      </div>
    </Frame>
  );
};