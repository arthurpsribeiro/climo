import React from 'react';

import UnFavSelectedIcon from "../../assets/favorite-unselected-icon.svg"

import {
  CityCardContainer,
  Header,
  CityLocation,
  CityName,
  CountryName,
  CityTemp,
  Footer,
  WeatherConditions,
  Weather,
  TempRange,
  Icon
} from './styles';


interface CityCardProps {
  searchResultData: {
    city: string,
    country: string,
    temp: number,
    weather: number,
    min: number,
    max: number,
  }
}

export function CityCard({ searchResultData }: CityCardProps) {

  return (
    <CityCardContainer>

      <Header>
        <CityLocation>
          <CityName> {searchResultData.city} </CityName>
          <CountryName> {searchResultData.country} </CountryName>
        </CityLocation>
        <CityTemp> {(searchResultData.temp).toFixed()}° </CityTemp>
      </Header>

      <Footer>
        <WeatherConditions>
          <Weather> {searchResultData.weather} </Weather>
          <TempRange> {(searchResultData.min).toFixed()}° - {(searchResultData.max).toFixed()}° </TempRange>
        </WeatherConditions>
        <UnFavSelectedIcon width={48} height={48} />
      </Footer>

    </CityCardContainer>
  );
}