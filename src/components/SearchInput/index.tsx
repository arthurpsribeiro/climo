import React from 'react';

import {
  Icon,
  SearchInputContainer, TextInput
} from './styles';

export function SearchInput() {
  return (
    <SearchInputContainer>
      <TextInput placeholder='Digite o nome da cidade' />
      <Icon name="search" />
    </SearchInputContainer>
  );
}