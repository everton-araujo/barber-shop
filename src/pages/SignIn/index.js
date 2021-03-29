import React from 'react';

import SignInput from '../../components/SignInput';

import LogoImg from '../../assets/barber.svg';
import emailIcon from '../../assets/email.svg';
import lockIcon from '../../assets/lock.svg';

import { 
  Container, 
  InputArea,
  Button,
  ButtonText,
  SignMessageButton,
  SignMessageButtonText,
  SignMessageButtonTextBold
} from './styles';

export default () => {
  return (
    <Container>
      <LogoImg width='100%' height='160' />

      <InputArea>
        <SignInput 
          Icon={emailIcon} 
          placeholder='E-mail'
          />

        <SignInput 
          Icon={lockIcon} 
          placeholder='Senha'
        />
          

        <Button>
          <ButtonText>LOGIN</ButtonText>
        </Button>
      </InputArea>

      <SignMessageButton>
        <SignMessageButtonText>
          Ainda não possui uma conta?
        </SignMessageButtonText>
        <SignMessageButtonTextBold>Cadastrar</SignMessageButtonTextBold>
      </SignMessageButton>
    </Container>
  );
}
