import React, { useState } from 'react';
import { StatusBar, Text } from 'react-native'
import { CityCard } from '../../components/CityCard';
import { Load } from '../../components/Load';
import { SearchInput } from '../../components/SearchInput';
import { SearchInstructions } from '../../components/SearchInstructions';
import { useCity } from '../../hooks/city';

import {
  CitiesResults,
  Container, Header, HeaderTitle
} from './styles';

export function CitySearch() {

  const [showGreatings, setShowGreatings] = useState(true);

  const {
    getLocation,
    searchCities,
    city,
    currentWeather,
    hourlyWeather,
    dailyWeather,
    searchResultData,
    loading,
    searchLoading
  } = useCity()

  const handleInput = (searchInputText: string) => {
    searchInputText.length > 1 && setShowGreatings(false)
    searchCities(searchInputText);
  }

  return (
    <Container>
      <Header>
        <HeaderTitle>Cidades</HeaderTitle>
      </Header>
      <SearchInput handleInput={handleInput} />

      {
        searchLoading ? (
          <Load />
        ) : (
          <>
            {searchResultData.length > 0 ? (
              <CitiesResults<any>
                data={searchResultData}
                keyExtractor={(item, index) => index}
                renderItem={({ item }) => <CityCard searchResultData={item} />}
              />
            ) : (
              <SearchInstructions />
            )}
          </>
        )
      }

    </Container>
  );
}