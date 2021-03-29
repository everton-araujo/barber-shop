import React from 'react';

import { InputArea, Input } from './SignInput.style';

export default ({ Icon, placeholder, value, onChangeText, password }) => {
  return (
    <InputArea>
      <Icon width='24' height='24' fill='#268596' />

      <Input
        placeholder={placeholder}
        placeholderTextColor='#268596'
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={password}
      />
    </InputArea>
  );
};
