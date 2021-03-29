import React, { useEffect, useContext } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import { useNavigation } from '@react-navigation/native';

import Api from '../../Api';
import { UserContext } from '../../contexts/UserContext';

import LogoImg from '../../assets/barber.svg';

import { Container, LoadingIcon } from './styles';

export default () => {
  const { dispatch: userDispatch } = useContext(UserContext);
  const navigation = useNavigation();

  useEffect(() => {
    const checkToken = async () => {
      const token = await AsyncStorage.getItem('token');

      if (token) {
        let res = await Api.checkToken(token);

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
