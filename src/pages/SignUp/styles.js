import styled from 'styled-components/native'

export const Container = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-items: center;
  background: #63C2D1;
`;

export const InputArea = styled.View`
  width: 100%;
  padding: 40px;
`;

export const Button = styled.TouchableOpacity`
  height: 60px;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
  background: #268596;
`;

export const ButtonText = styled.Text`
  font-size: 18px;
  color: #FFF;
`;

export const SignMessageButton = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: center;
  margin-top: 50px;
  margin-bottom: 20px;
`;

export const SignMessageButtonText = styled.Text`
  font-size: 16px;
  color: #268596;
`;

export const SignMessageButtonTextBold = styled.Text`
  font-size: 16px;
  font-weight: bold;
  margin-left: 5px;
  color: #268596;
`;
