import { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";

import { IFrame } from "./types";
import { FrameStyled } from "./styles";

export default function Frame(props: IFrame) {
  const nav = useNavigate( );

  const ref = useRef<HTMLDivElement>(null);

  const handleNavMenu = ( ) => {
    if(ref.current) {
      ref.current.focus( );
    };
  };

  return (
    <FrameStyled>
      <div className="header">
        <div onClick={( ) => nav("/home")} className="logo">
          <img src="/logo.png" alt="" />
          <span>Resale Store</span>
        </div>

        <div className="searcher">

        </div>

        <div className="icons">
          <div onClick={( ) => nav("/profile/cart")} className="icon">
            <svg viewBox="0 0 24 24"><path fill="currentColor" d="M17,18A2,2 0 0,1 19,20A2,2 0 0,1 17,22C15.89,22 15,21.1 15,20C15,18.89 15.89,18 17,18M1,2H4.27L5.21,4H20A1,1 0 0,1 21,5C21,5.17 20.95,5.34 20.88,5.5L17.3,11.97C16.96,12.58 16.3,13 15.55,13H8.1L7.2,14.63L7.17,14.75A0.25,0.25 0 0,0 7.42,15H19V17H7C5.89,17 5,16.1 5,15C5,14.65 5.09,14.32 5.24,14.04L6.6,11.59L3,4H1V2M7,18A2,2 0 0,1 9,20A2,2 0 0,1 7,22C5.89,22 5,21.1 5,20C5,18.89 5.89,18 7,18M16,11L18.78,6H6.14L8.5,11H16Z" /></svg>
          </div>

          <div onClick={handleNavMenu} className="icon">
            <svg viewBox="0 0 24 24"><path fill="currentColor" d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z" /></svg>
          </div>
        </div>
      </div>

      <div onFocus={(event) => event.currentTarget.classList.add("actived")} onBlur={(event) => event.currentTarget.classList.remove("actived")} ref={ref} tabIndex={-1} className="nav-menu">
        <div className="section">
          <h1>Geral</h1>

          <Link to="/home">
            <span>Inicio</span>
          </Link>

          <Link to="/product/creator">
            <span>Anunciar</span>
          </Link>

          {/* <Link to="/">
            <span>Anuncios</span>
          </Link>

          <Link to="/home">
            <span>Categorias</span>
          </Link> */}
        </div>

        <div className="section">
          <h1>Conta</h1>

          <Link to="/profile">
            <span>Perfil</span>
          </Link>

          <Link to="/profile/cart">
            <span>Carrinho</span>
          </Link>

          <Link to="/signin">
            <span>Entrar</span>
          </Link>

          <Link to="/signup">
            <span>Cadastrar</span>
          </Link>
        </div>
      </div>
      
      <div className="content">
        {props.children}
      </div>
    </FrameStyled>
  );
};