import React from 'react';
import { TextInputProps } from 'react-native';

import {
  Icon,
  SearchInputContainer, TextInput
} from './styles';

interface SearchInputProps extends TextInputProps {
  handleInput: (t: string) => void
}

export function SearchInput({ onChangeText, handleInput }: SearchInputProps) {


  return (
    <SearchInputContainer>
      <TextInput
        placeholder='Digite o nome da cidade'
        onChangeText={handleInput}
      />
      <Icon name="search" />
    </SearchInputContainer>
  );
}