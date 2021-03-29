import React, { useState, useContext } from 'react';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';

import { UserContext } from '../../contexts/UserContext';
import SignInput from '../../components/SignInput';

import Api from '../../Api';

import LogoImg from '../../assets/barber.svg';
import emailIcon from '../../assets/email.svg';
import lockIcon from '../../assets/lock.svg';
import personIcon from '../../assets/person.svg';

import { 
  Container, 
  InputArea,
  Button,
  ButtonText,
  SignMessageButton,
  SignMessageButtonText,
} from './styles';

export default () => {
  const { dispatch: userDispatch } = useContext(UserContext);
  const navigation = useNavigation();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = async () => {
    if (!name && !email && !password) {
      alert('Preencha os campos');
      return;
    }

    let res = await Api.signUp(name, email, password);
    console.log('RESPONSE', res);
    console.log('TOKEN', res.token);

    if (res.token) {
      await AsyncStorage.setItem('token', res.token);

      userDispatch({
        type: 'setAvatar',
        payload: {
          avatar: res.data.avatar
        }
      });

      navigation.reset({
        routes: [{ name: 'MainTab' }]
      });

      return;
    }

    alert('Erro: ' + res.error );
  };

  const handleSignUp = () => {
    navigation.navigate('SignIn');
  };

  return (
    <Container>
      <LogoImg width='100%' height='160' />

      <InputArea>
        <SignInput 
          Icon={personIcon} 
          placeholder='Nome'
          value={name}
          onChangeText={text => setName(text)}
          />

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
          <ButtonText>CADASTRAR</ButtonText>
        </Button>
      </InputArea>

      <SignMessageButton onPress={handleSignUp}>
        <SignMessageButtonText>
          Voltar
        </SignMessageButtonText>
      </SignMessageButton>
    </Container>
  );
};
