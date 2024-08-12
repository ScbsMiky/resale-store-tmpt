export type IProduct = {
  id: string;
  name: string;
  price: number;
  location: string;
  description: string;

  images: {
    id: string;
    src: string;
  }[ ];
};

export type IProductCard = IProduct & {  
  children?: JSX.Element[ ] | JSX.Element;

  onClick?( ): void;
};