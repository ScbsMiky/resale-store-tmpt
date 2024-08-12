import { CSSProperties } from "styled-components";

export const buttonStyledVariants = {
  
};

export type IButtonStyles = Partial<{
  align: string;

  style: CSSProperties;
  variant: keyof typeof buttonStyledVariants;

  disabled: boolean;
}>;

export type IButton = Partial<{
  label: string;
  children: JSX.Element[ ] | JSX.Element;

  onClick( ): void;
}> & IButtonStyles;