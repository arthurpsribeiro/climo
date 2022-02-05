import React, { useEffect, useState } from 'react';

import { DailyForecastCard } from '../../components/DailyForecastCard';
import { HourlyForecastCard } from '../../components/HourlyForecastCard';
import { Load } from '../../components/Load';

import { useCity } from '../../hooks/city';

import {
  Container,
  Header,
  CityWrapper,
  HourlyForecastList,
  Title,
  TenDaysForecastList,
  Content,
  CityTemp,
  CityName,
  CityWheater,
  CityMinMax
} from './styles';

export function CityForecastDetails() {
  const {
    getLocation,
    city,
    currentWeather,
    hourlyWeather,
    dailyWeather,
    loading
  } = useCity()

  useEffect(() => {
    async function fetchData() {
      await getLocation();
    }
    fetchData();
  }, []);

  return (
    <Container>
      {
        loading ?
          <>
            <Header />
            <Load />
          </>
          :
          <>
            <Header>
              <CityWrapper>
                <CityName> {city.name} </CityName>
                <CityTemp> {(currentWeather.temp).toFixed()}° </CityTemp>
                <CityWheater> {currentWeather.weather} </CityWheater>
                <CityMinMax> Máx.: {(currentWeather.temp_max).toFixed()}°  Min.: {(currentWeather.temp_min).toFixed()} </CityMinMax>
              </CityWrapper>
            </Header>

            {
              hourlyWeather
              &&
              <HourlyForecastList<any>
                data={hourlyWeather}
                keyExtractor={(item, index) => index}
                renderItem={({ item }) => <HourlyForecastCard hourlyWeather={item} />}
              />
            }

            <Content>
              <Title> Previsão para 10 dias </Title>
              {
                dailyWeather
                &&
                <TenDaysForecastList<any>
                  data={dailyWeather}
                  keyExtractor={(item, index) => index}
                  renderItem={({ item }) => <DailyForecastCard dailyWeather={item} />}
                />
              }
            </Content>
          </>
      }
    </Container>
  );
}