import React from 'react';
import { StatusBar } from 'react-native'
import { CityCard } from '../../components/CityCard';
import { SearchInput } from '../../components/SearchInput';
import { useCurrentCity } from '../../hooks/currentCity';

import {
  CitiesResults,
  Container, Header, HeaderTitle
} from './styles';

export function CitySearch() {

  const {
    getLocation,
    searchCities,
    city,
    currentWeather,
    hourlyWeather,
    dailyWeather,
    searchResultData,
    loading
  } = useCurrentCity()

  console.log('na screen', searchResultData);

  const handleInput = (searchInputText: string) => {
    searchCities(searchInputText);
  }

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
      <SearchInput handleInput={handleInput} />

      <CitiesResults<any>
        data={searchResultData}
        keyExtractor={(item, index) => index}
        renderItem={({ item }) => <CityCard searchResultData={item} />}
      />

    </Container>
  );
}