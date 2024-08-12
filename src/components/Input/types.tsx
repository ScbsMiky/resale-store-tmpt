import { HTMLInputTypeAttribute } from "react";
import { CSSProperties } from "styled-components";

export type IInput = {
  type?: HTMLInputTypeAttribute | "textarea";
  style?: CSSProperties;
  
  name?: string;
  label?: string;
  value?: string;
  className?: string;
  readonly?: boolean;
  
  icon?: JSX.Element[ ] | JSX.Element;
  children?: JSX.Element[ ] | JSX.Element;

  onClick?( ): void;
  onChange?(value: string): void;
};