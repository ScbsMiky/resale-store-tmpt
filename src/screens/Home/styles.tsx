import { styled } from "styled-components";

export const HomeStyled = styled.div`
  & > .header {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-around;

    & > div {
      display: flex;
    }

    & .icon {
      width: 7rem;
      height: auto;

      display: flex;
      align-items: center;
      flex-direction: column;
      justify-content: center;

      margin: .5rem;
      padding: .5rem;

      background: #ffffff;
      border-radius: .5rem;

      img {
        width: 60%;
      }

      span {
        margin-top: auto;
        
        font-size: .8rem;
        font-weight: bold;
        text-align: center;
      }

      &:last-child {
        span {
          /* margin-top: -.5rem; */
        }
      }
    }
  }

  & > .content {
    margin-top: 2rem;

    & > span {
      display: block;
      color: #f36262;
      font-weight: bold;
      font-size: 1.2rem;
      text-align: center;
    }

    & > .products {
      display: flex;
      flex-wrap: wrap;
    }
  }
`;