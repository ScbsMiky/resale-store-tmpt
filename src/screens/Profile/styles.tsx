import { styled } from "styled-components";

export const ProfileStyled = styled.div`
  display: flex;

  width: 100%;
  height: 100%;
  overflow: auto;

  & > div:first-child {
    min-width: 12rem;
    max-width: 12rem;

    img {
      width: 100%;
      border-radius: 100%;
    }
  }

  & > div:last-child {
    width: 100%;
    height: fit-content;

    margin-left: .5rem;

    display: flex;
    flex-direction: column;


    & > div:last-child {
      margin-top: auto;
    }
  }

  @media only screen and (max-width: 523px) {
    flex-direction: column;

    & > div:first-child {
      margin: auto;
    }

    & > div:last-child {
      height: 100%;
      margin-left: 0;
    }
  }
`;