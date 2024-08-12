import { styled } from "styled-components";

export const ProductViewStyled = styled.div`
  display: flex;

  overflow: auto;

  & .images {
    width: 50%;
    min-height: 20rem;

    display: flex;
    flex-direction: column;

    padding: .5rem;
    border-radius: .5rem;
    background: #ffffff;

    & .image {
      width: 100%;
      height: 100%;

      display: flex;
      align-items: center;
      justify-content: center;

      img {
        max-width: 100%;
      }
    }

    & .dots {
      margin: auto;

      display: flex;
      align-items: center;
      justify-content: space-around;

      & > div {
        padding: .5rem;
        margin: 0 .5rem;
        border-radius: 100%;
        background: #cccccc;
      }
    }
  }

  & .product {
    width: 100%;

    margin-left: .5rem;
    border-radius: .5rem;

    display: flex;
    flex-direction: column;

    & h1 {
      font-size: 1.2rem;
      margin-bottom: .25rem;
    }

    & span, & p {
      color: #383838;
    }

    & .title {
      h1 {
        font-size: 1.6rem;
        margin-bottom: 0;
      }
    }

    & .about {

    }

    & > div:last-child {
      margin-top: auto;
      margin-bottom: 0;

      & div {
        text-align: center;

        span {
          display: block;
        }

        span:last-child {
          font-size: .9rem;
          color: #949494;
        }
      }
    }
  }

  @media only screen and (max-width: 523px) {
    flex-direction: column;

    height: 100%;

    & .images {
      width: 100%;

      & .dots {
        margin-top: -.75rem;
      }
    }

    & .product {
      margin-left: 0;
      margin-top: .5rem;

      height: 100%;
    }
  }
`;