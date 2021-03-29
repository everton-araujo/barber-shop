import React from 'react';
import { Text } from 'react-native';

import Stars from '../components/Stars';

import { 
  Area, 
  Avatar,
  InfoArea,
  UserName,
  SeeProfileButton,
  SeeProfileButtonText,
} from './BarberItem.style';

export default ({ data }) => {
  return (
    <Area>
      <Avatar source={{ uri: data.avatar }} />

      <InfoArea>
        <UserName>{data.name}</UserName>

        {/* <Text>{data.stars}</Text> */}

        <Stars 
          stars={data.stars}
          showNumber={true}
        />

        <SeeProfileButton>
          <SeeProfileButtonText>Ver Perfil</SeeProfileButtonText>
        </SeeProfileButton>
      </InfoArea>
    </Area>
  );
}
