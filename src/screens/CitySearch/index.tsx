import React from 'react';
import { StatusBar } from 'react-native'

import { SearchInput } from '../../components/SearchInput';


import {
  CitiesResults,
  Container, Header, HeaderTitle
} from './styles';

export function CitySearch() {
  return (
    <Container>
      <StatusBar
        barStyle='light-content'
      // backgroundColor="transparent"
      // translucent
      />

      <Header>
        <HeaderTitle>Cidades</HeaderTitle>
      </Header>
      <SearchInput />


      <CitiesResults>

      </CitiesResults>


    </Container>
  );
}