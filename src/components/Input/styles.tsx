import { styled } from "styled-components";

export const InputStyled = styled.div`
  position: relative;

  margin: .5rem;

  border-radius: .5rem;

  background: #ffffff;

  display: flex;
  align-items: center;
  justify-content: space-between;

  svg {
    width: 1.6rem;
    height: 1.6rem;
    margin: 0 .75rem;
  }

  input, textarea {
    width: calc(100% - 1.5rem);
    max-height: 10rem;
    
    border: none;
    background: none;

    font-size: 1rem;

    margin: .75rem;
    margin-top: 1rem;

    background: none;

    resize: none;
  }

  &.focus::after {
    top: .15rem;
    font-size: .8rem;
    color: #000000;
    transform: none;
  }

  &.date::after {
    color: transparent;
  }

  &::after {
    content: attr(data-label);

    position: absolute;
    
    top: 50%;
    left: .75rem;

    color: #7c7c7c;
    transform: translateY(-50%);

    z-index: 1;

    transition: all .25s;
  }
`;