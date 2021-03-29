import React, { useEffect } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import { useNavigation } from '@react-navigation/native';

import LogoImg from '../../assets/barber.svg';

import { Container, LoadingIcon } from './styles';

export default () => {
  const navigation = useNavigation();

  useEffect(() => {
    const checkToken = async () => {
      const token = await AsyncStorage.getItem('token');

      if (token) {
        return;
      }

      navigation.navigate('SignIn');
    }

    checkToken();
  }, []);

  return (
    <Container>
      <LogoImg width='100%' height='160' />
      <LoadingIcon size='large' color='#FFF' />
    </Container>
  );
}
