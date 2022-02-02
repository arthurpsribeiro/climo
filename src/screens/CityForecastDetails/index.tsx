import React from 'react';
import { StatusBar } from 'react-native'

import SunIcon from '../../assets/sun-temp.svg'
import { DailyForecastCard } from '../../components/DailyForecastCard';
import { HourlyForecastCard } from '../../components/HourlyForecastCard';

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

          <HourlyForecastCard hour='09h' forecast='26°' />

        </HourlyForecastList>

      </HourlyForecastWrapper>

      <TenDaysForecastWrapper>

        <Title> PREVISÃO EM 10 DIAS </Title>

        <TenDaysForecastList>
          <DailyForecastCard weekday='Segunda' min='18' max='25' />
        </TenDaysForecastList>

      </TenDaysForecastWrapper>
    </Container>
  );
}