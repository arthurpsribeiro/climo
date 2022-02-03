import React from 'react';
import { StatusBar } from 'react-native'
import { CityCard } from '../../components/CityCard';
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
        backgroundColor="transparent"
        translucent
      />

      <Header>
        <HeaderTitle>Cidades</HeaderTitle>
      </Header>
      <SearchInput />

      <CitiesResults>
        <CityCard city='Guarulhos' country='Brasil' temp='31' weather='ensolarado' min='26' max='31' />
      </CitiesResults>


    </Container>
  );
}