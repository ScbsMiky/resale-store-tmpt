import { styled } from "styled-components";

export const ProductFieldsStyled = styled.div`
  width: 100%;
  height: 100%;

  overflow: auto;

  h1 {
    padding: .5rem;
    font-size: 1.4rem;
  }

  & > .images {
    & > div:nth-child(2) {
      display: flex;
      flex-wrap: wrap;
      align-items: center;

      margin: 0 .5rem;

      & > div {
        position: relative;

        width: 8rem;

        img {
          max-width: 100%;
        }
      }

      & > div::after {
        content: "x";

        display: flex;
        align-items: center;
        justify-content: center;

        position: absolute;

        top: 0;
        right: 0;

        margin: .25rem;
        padding: .2rem .50rem;

        border-radius: 100%;

        color: #ffffff;
        background: #ff3333;

        opacity: 0;
        transition: .25s all linear;
      }

      & > div:hover::after {
        opacity: 1;
      }
    }
  }

  & > div {
    padding: .5rem;
    background: #d4d7da;
    border-radius: .5rem;
    border: 1px solid #a4a5a7
  }
`;