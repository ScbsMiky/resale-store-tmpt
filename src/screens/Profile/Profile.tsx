import Button from "../../components/Button/Button";
import Frame from "../../components/Frame/Frame";
import Input from "../../components/Input/Input";

import { ProfileStyled } from "./styles";

export default function ProfileScreen( ) {
  return (
    <Frame>
      <ProfileStyled>
        <div>
          <img src="https://i.pinimg.com/564x/6f/c1/3a/6fc13afb413ccdfee64acf5136995c8e.jpg" alt="" />
        </div>

        <div>
          <div>
            <Input label="Nome" />
            <Input label="Sobrenome" />
            <Input label="Localização" />
            <Input label="Data de nascimento" type="date" />
          </div>

          <Button label="Salvar" />
        </div>
      </ProfileStyled>
    </Frame>
  );
};