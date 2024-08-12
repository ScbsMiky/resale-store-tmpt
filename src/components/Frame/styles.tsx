import { styled } from "styled-components";
import { device } from "../Container/styles";

export const FrameStyled = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;

  overflow: auto;

  & > .header {
    width: 100%;
    height: 4rem;

    display: flex;
    align-items: center;
    justify-content: space-between;

    color: #ffffff;
    background: #0B2136;

    z-index: 2;

    & > .logo {
      display: flex;
      align-items: center;

      img {
        width: 3rem;
        margin-top: -.45rem;
      }

      span {
        margin-left: .5rem;
        font-size: 1.2rem;
        font-family: "Racing Sans One";
      }
    }

    & > .icons {
      display: flex;
      align-items: center;

      & > .icon {
        padding: .5rem;

        svg {
          width: 1.4rem;
          height: 1.4rem;
        }
      }
    }
  }

  & > .nav-menu {
    position: fixed;

    right: 0%;
    top: -100%;

    width: 12rem;

    padding: .5rem;

    color: #ffffff;
    background: #0B2136;

    transition: .5s all linear;

    z-index: 1;

    & > .section {
      margin-bottom: .5rem;

      h1 {
        padding: .5rem 1rem;
      }

      a {
        display: block;
        color: #acacac;
        padding: .5rem 1rem;
        text-decoration: none;

        border-radius: .5rem;

        &:hover {
          color: #ffffff;
          background: #102c46;
        }
      }

      &:last-child {
        margin-bottom: 0;
      }
    }

    &.actived {
      top: 3.6rem;
    }
  }

  & > .content {
    padding: .5rem;
    
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    overflow: auto;
  }

  @media ${device.laptop} {
    & > .content {
      max-width: 60%;
      margin: auto;
      background: #d7dde0;
    }
  }
`;