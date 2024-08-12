import { styled } from "styled-components";

export const SigninStyled = styled.div`
  width: 100%;
  height: 100%;
  display: flex;

  align-items: center;
  flex-direction: column;
  justify-content: center;

  background-image: url(https://i.pinimg.com/564x/3c/18/a4/3c18a4208a752cd581c37f9a2cb0e9e2.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  & > form {
    width: 90%;

    padding: 1rem;
    border-radius: .5rem;
    background: #8087883e;
    border: 1px solid #ffffff6e;
    backdrop-filter: blur(4px);
    color: white;


    h1 {
      font-weight: bold;
      font-size: 1.6rem;
      text-align: center;
    }
    
    h3 {
      color: #a3afad;
      text-align: center;
      margin-top: .5rem;
      margin-bottom: 2rem;
    }

    a {
      color: white;
      display: block;
      text-decoration: none;
      text-align: center;
      margin: .5rem 0;
    }

    a.forgot {
      text-align: end;
      margin-top: 1rem;
      margin-bottom: 2rem;
    }

    & > div {
      color: white;
      border-radius: .5rem;
      background: #8087883e;
      border: 1px solid #ffffff6e;

      margin: .5rem 0;

      input {
        color: white;
      }

      &::after {
        color: white;
      }
    }
  }
`;