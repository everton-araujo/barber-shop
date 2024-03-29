import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background: #63C2D1;
`;

export const Scroller = styled.ScrollView`
  flex: 1;
  padding: 20px;
`;

export const HeaderArea = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderTitle = styled.Text`
  width: 250px;
  font-size: 24px;
  font-weight: bold;
  color: #FFF;
`;

export const SearchButton = styled.TouchableOpacity`
  width: 26px;
  height: 26px;
`;

export const LocationArea = styled.View`
  height: 60px;
  flex-direction: row;
  align-items: center;
  padding-left: 20px;
  padding-right: 20px;
  margin-top: 30px;
  border-radius: 30px;
  background: #4EADBE;
`;

export const LocationInput = styled.TextInput`
  flex: 1;
  font-size: 16px;
  color: #FFF;
`;

export const LocationFinder = styled.TouchableOpacity`
  width: 24px;
  height: 24px;
`;

export const LoadingIcon = styled.ActivityIndicator`
  margin-top: 50px;
`;

export const BarberListArea = styled.View`
  margin: 30px 0;
`;
