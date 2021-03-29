import React, { useState, useEffect } from 'react';
import { Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { request, PERMISSIONS } from 'react-native-permissions';
import Geolocation from '@react-native-community/geolocation';

import Api from '../../Api';
import BarberItem from '../../components/BarberItem';

import SearchIcon from '../../assets/search.svg';
import MyLocationIcon from '../../assets/my_location.svg';

import { 
  Container,
  Scroller,
  HeaderArea,
  HeaderTitle,
  SearchButton,
  LocationArea,
  LocationInput,
  LocationFinder,
  LoadingIcon,
  BarberListArea
} from './styles';

export default () => {
  const navigation = useNavigation();

  const [location, setLocation] = useState('');
  const [coordinates, setCoordinates] = useState(null);
  const [loading, setLoading] = useState(false);
  const [barberList, setBarberList] = useState([]);

  const handleLocationFinder = async () => {
    setCoordinates(null);
    // 2:57
    let result = await request(
      Platform.OS === 'android'
        ? PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION
        : PERMISSIONS.IOS.LOCATION_WHEN_IN_USE
    );

    if (result == 'granted') {
      setLoading(true);
      setLocation('');
      setBarberList([]);

      Geolocation.getCurrentPosition((info) => {
        setCoordinates(info.coordinates);

        getBarbers();
      });
    }
  }

  const getBarbers = async () => {
    setLoading(true);
    setBarberList([]);

    let res = await Api.getBarbers();

    if (res.error !== '') {
      alert('Erro: ' + res.error);
    }

    if (res.loc) {
      setLocation(res.loc);
    }

    setBarberList(res.data);

    setLoading(false);
  }

  useEffect(() => {
    getBarbers();
  }, []);

  return (
    <Container>
      <Scroller>
        <HeaderArea>
          <HeaderTitle numberOfLines={2}>
            Encontre o seu barbeiro favorito
          </HeaderTitle>

          <SearchButton onPress={() => navigation.navigate('Search')}>
            <SearchIcon width='26' height='26' fill='#FFF' />
          </SearchButton>
        </HeaderArea>

        <LocationArea>
          <LocationInput 
            placeholder='Onde você esta?'
            placeholderTextColor='#FFF'
            value={location}
            onChangeText={text => setLocation(text)}
          />

          <LocationFinder onPress={handleLocationFinder}>
            <MyLocationIcon width='24' height='24' fill='#FFF' />
          </LocationFinder>
        </LocationArea>

        {loading &&
          <LoadingIcon size='large' color='#FFF' />
        }

        <BarberListArea>
          {barberList.map((item, k) => (
            <BarberItem key={k} data={item} />
          ))}
        </BarberListArea>
      </Scroller>
    </Container>
  );
}
