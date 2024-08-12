import Button from "../../components/Button/Button";
import Frame from "../../components/Frame/Frame";
import Input from "../../components/Input/Input";
import { ProfileCartStyled } from "./styles";

export default function ProfileCartScreen( ) {
  return (
    <Frame>
      <ProfileCartStyled>
        <div className="box">
          <h1>Resumo</h1>

          <div className="content">
            <span>Nenhum item</span>
          </div>
        </div>

        <div className="box">
          <h1>Produtos</h1>

          <div className="content">
            <span>Nenhum item</span>
          </div>
        </div>

        <div className="box i">
          <h1>Cupom</h1>

          <div className="content">
            <Input label="cupom" />
            <Button label="Verificar" />
          </div>
        </div>

        <div className="box i">
          <h1>Frete</h1>

          <div className="content">
            <Input label="CEP" />
            <Button label="Buscar" />
          </div>
        </div>
      </ProfileCartStyled>

      <Button label="Finalizar" />
    </Frame>
  );
};