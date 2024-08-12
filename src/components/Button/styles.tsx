import { styled } from "styled-components";

import { IButtonStyles } from "./types";

export const ButtonStyled = styled.div<IButtonStyles>`
  cursor: pointer;
  user-select: none;

  border-radius: .5rem;

  margin: .5rem;
  padding: .85rem;
  
  display: flex;
  font-weight: bold;
  align-items: center;
  justify-content: center;
  
  background: #ffffff;

  svg {
    width: 1.6rem;
    height: 1.6rem;
    margin: 0 .75rem;
  }
`;