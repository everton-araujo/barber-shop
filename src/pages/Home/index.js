import React, { useState, useEffect } from 'react';
import { Platform, RefreshControl } from 'react-native';
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
  const [refreshing, setRefreshing] = useState(false);

  const handleLocationFinder = async () => {
    setCoordinates(null);

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

    let lat = null;
    let lng = null;

    if (coordinates) {
      lat = coordinates.latitude;
      lng = coordinates.longitude;
    }

    let res = await Api.getBarbers(lat, lng, location);

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

  const onRefresh = () => {
    setRefreshing(false);
    getBarbers();
  }

  const handleLocationSearch = () => {
    setCoordinates({});

    getBarbers();
  }

  return (
    <Container>
      <Scroller refreshControl={
        <RefreshControl 
          refreshing={refreshing} 
          onRefresh={onRefresh}
        />
      }>
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
            onEndEditing={handleLocationSearch}
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
