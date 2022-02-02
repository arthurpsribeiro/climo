import React from 'react';
import { StatusBar } from 'react-native'


import {
  Container,
  Header,
  CityWrapper,
  CityName,
  CityTemp,
  CityWheater,
  CityMinMax,
  HourlyForecastWrapper,
  HourlyForecastTitle,
  HourlyForecastList,
  Title,
  TenDaysForecastWrapper,
  TenDaysForecastList,

} from './styles';

export function CityForecastDetails() {
  return (
    <Container>
      <StatusBar
        barStyle='light-content'
      // backgroundColor="transparent"
      // translucent
      />

      <Header>
        <CityWrapper>
          {/* <SunIcon width={100} height={100} /> */}
          <CityName> Guarulhos </CityName>
          <CityTemp> 29° </CityTemp>
          <CityWheater> Ensolarado </CityWheater>
          <CityMinMax> Máx.: 31°  Min.: 26° </CityMinMax>
        </CityWrapper>
      </Header>

      <HourlyForecastWrapper>

        <HourlyForecastTitle>
          <Title> PREVISÃO HORÁRIA </Title>
        </HourlyForecastTitle>

        <HourlyForecastList>


        </HourlyForecastList>

      </HourlyForecastWrapper>

      <TenDaysForecastWrapper>

        <Title> PREVISÃO EM 10 DIAS </Title>

        <TenDaysForecastList>
        </TenDaysForecastList>

      </TenDaysForecastWrapper>
    </Container>
  );
}