import { createGlobalStyle, styled } from "styled-components";

export const size = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '2560px'
};

export const device = {
  mobileS: `(min-width: ${size.mobileS})`,
  mobileM: `(min-width: ${size.mobileM})`,
  mobileL: `(min-width: ${size.mobileL})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  laptopL: `(min-width: ${size.laptopL})`,
  desktop: `(min-width: ${size.desktop})`,
  desktopL: `(min-width: ${size.desktop})`
};

export const ContainerStyled = styled.div`
  width: 100vw;
  height: 100vh;

  background: #BDC3C7;
`;

export const GlobalStyled = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;

    font-size: 16px;
    font-family: sans-serif;

    outline: none;
    box-sizing: border-box;
  }

  *::-webkit-scrollbar {
    width: .5rem;
    height: .5rem;
    background: none;
  }

  *::-webkit-scrollbar-thumb {
    background: #0c0c0c;
    border-radius: .5rem;
  }
`;