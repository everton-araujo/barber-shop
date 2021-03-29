import React, { useState, useContext } from 'react';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';

import { UserContext } from '../../contexts/UserContext';
import SignInput from '../../components/SignInput';

import Api from '../../Api';

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
  const { dispatch: userDispatch } = useContext(UserContext);
  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = async () => {
    if (email != '' && password != '') {
      let json = await Api.signIn(email, password);

      if (json.token) {
        await AsyncStorage.setItem('token', json.token);

        userDispatch({
          type: 'setAvatar',
          payload: {
            avatar: 'https://api.b7web.com.br/devbarber/media/avatars/4.png'
          }
        });

        navigation.reset({
          routes: [{ name: 'MainTab'}]
        });

        return;
      }
      
      alert('E-mail e/ou senha errados');
      return;
    }
    alert('Preencha os campos');
  };

  const handleSignUp = () => {
    navigation.navigate('SignUp');
  };

  return (
    <Container>
      <LogoImg width='100%' height='160' />

      <InputArea>
        <SignInput 
          Icon={emailIcon} 
          placeholder='E-mail'
          value={email}
          onChangeText={text => setEmail(text)}
          />

        <SignInput 
          Icon={lockIcon} 
          placeholder='Senha'
          value={password}
          onChangeText={text => setPassword(text)}
          password={true}
        />

        <Button onPress={handleSignIn}>
          <ButtonText>LOGIN</ButtonText>
        </Button>
      </InputArea>

      <SignMessageButton onPress={handleSignUp}>
        <SignMessageButtonText>
          Ainda não possui uma conta?
        </SignMessageButtonText>
        <SignMessageButtonTextBold>Cadastrar</SignMessageButtonTextBold>
      </SignMessageButton>
    </Container>
  );
};
