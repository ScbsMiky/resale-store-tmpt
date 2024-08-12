import { styled } from "styled-components";

export const ProductCardStyled = styled.div`
  width: 20rem;
  
  display: flex;
  flex-direction: column;

  margin: .5rem;
  padding: .5rem;

  border-radius: .5rem;

  background: #ffffff;

  & .banner {
    position: relative;

    width: 100%;
    height: 18rem;

    border-radius: .5rem;

    background: #dddddd;

    & > div {
      width: 100%;
      height: 100%;

      background-size: 60%;
      background-repeat: no-repeat;
      background-position: center;
    }
  }

  & .title {
    display: flex;
    align-items: center;

    margin: .5rem 0;

    & span:first-child {
      font-size: 1.6rem;
      font-weight: bold;
    }

    & > div {
      display: flex;
      align-items: center;

      margin-left: auto;

      & span {
        color: #8f8f8f;
        font-size: .9rem;
      }

      & svg {
        margin-left: .5rem;

        width: 1.4rem;
        height: 1.4rem;
        color: #f3dc09;
      }
    }
  }

  & .price {
    margin-top: auto;
    padding-top: .5rem;
    
    span {
      color: #8f8f8f;
    }
  }

  & .location {
    display: flex;

    margin-top: .5rem;

    svg {
      width: 1rem;
      height: 1rem;
    }
  }

  transition: all .2s;

  @media only screen and (max-width: 684px) {
    width: 16rem;
  }

  @media only screen and (max-width: 571px) {
    width: 100%;
  }
`;