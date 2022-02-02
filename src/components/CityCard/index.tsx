import React from 'react';

import FavSelectedIcon from "../../assets/favorite-selected-icon.svg"

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
  city: string,
  country: string,
  temp: string,
  weather: string,
  min: string,
  max: string
}

export function CityCard({ city, country, temp, weather, min, max }: CityCardProps) {
  return (
    <CityCardContainer>
      <Header>
        <CityLocation>
          <CityName> {city} </CityName>
          <CountryName> {country} </CountryName>
        </CityLocation>
        <CityTemp> {temp}° </CityTemp>
      </Header>

      <Footer>
        <WeatherConditions>
          <Weather> {weather} </Weather>
          <TempRange> {min}° - {max}° </TempRange>
        </WeatherConditions>
        <FavSelectedIcon width={48} height={48} />
      </Footer>

    </CityCardContainer>
  );
}