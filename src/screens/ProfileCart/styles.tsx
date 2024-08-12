import { styled } from "styled-components";

export const ProfileCartStyled = styled.div`
  & > .box {
    background: #d4d7da;
    border-radius: .5rem;
    border: 1px solid #a4a5a7;
    margin: .5rem 0;

    & > h1 {
      font-size: 1.4rem;
      padding: .5rem;
      border-bottom: 1px solid #a4a5a7;
    }

    &.i .content {
      display: flex;
      align-items: center;

      & > div:first-child {
        width: 100%;
        margin-right: .5rem;
      }

      & > div {
        margin: 0;
      }
    }

    & > .content {
      padding: .5rem;
    }

    &:first-child {
      margin-top: 0;
    }
  }
`;