import { forwardRef, useEffect, useState } from "react";

import { IProductFields } from "./types";
import { ProductFieldsStyled } from "./styles";

import Input from "../Input/Input";
import Button from "../Button/Button";

export default forwardRef<HTMLDivElement, IProductFields>((props, _ref) => {
  const [productID, setProductID] = useState(Math.floor(Math.random( ) * Date.now( )).toString( ));

  const [images, setImages] = useState<{ id: string, src: string }[ ]>([ ]);

  const reader = new FileReader( );

  const fileInput = document.createElement("input");
        fileInput.type = "file";
        fileInput.accept = "image/*";

  reader.onloadend = function( ) {
    images.push({
      id: `${Math.floor(Math.random( ) * Date.now( ))}`,
      src: reader.result as any
    });

    setImages([...images]);
  };

  fileInput.onchange = function( ) {
    const [file] = (fileInput.files || [ ]);

    if(!file) return;

    reader.readAsDataURL(file);
  };

  useEffect(( ) => {
    if(props.product) {
      setProductID(props.product.id);
      setImages(props.product.images);
    };
  }, [props]);

  return (
    <ProductFieldsStyled ref={_ref}>
      <div>
          <h1>Dados do produto</h1>

          <Input name="product-name" label="Nome do produto" type="text" value={props.product ? props.product.name : ""} />
          <Input name="product-price" label="Valor do produto" type="number" value={props.product ? props.product.price.toString( ) : ""} />

          <Input name="product-location" label="Localização" type="text" value={props.product ? props.product.location : ""} />
          
          <Input name="product-about" label="Sobre o produto" type="textarea" value={props.product ? props.product.description : ""} />

          <Input label="ID" value={productID} readonly />
        </div>

        <br />

        <div className="images">
          <h1>Imagens</h1>

          <div>
            {images.map((image) => <div key={image.id} id={image.id}><img src={image.src} /></div>)}
          </div>

          <Button onClick={( ) => fileInput.showPicker( )}>
            <span>Adicionar imagem</span>
          </Button>
        </div>
    </ProductFieldsStyled>
  );
});