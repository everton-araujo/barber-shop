import styled from 'styled-components';

export const TabArea = styled.View`
  height: 60px;
  flex-direction: row;
  background: #4EADBE;
`;

export const TabItem = styled.TouchableOpacity`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const TabItemCenter = styled.TouchableOpacity`
  width: 70px;
  height: 70px;
  justify-content: center;
  align-items: center;
  margin-top: -20px;
  background: #FFF;
  border-radius: 35px;
  border: 3px solid #4EADBE;
`;

export const AvatarIcon = styled.Image`
  width: 24px;
  height: 24px;
  border-radius: 12px;
`;
