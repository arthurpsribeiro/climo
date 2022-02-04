import React, { useEffect, useState } from 'react';

import { DailyForecastCard } from '../../components/DailyForecastCard';
import { HourlyForecastCard } from '../../components/HourlyForecastCard';
import { Load } from '../../components/Load';

import { useCurrentCity } from '../../hooks/currentCity';

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
  } = useCurrentCity()

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
              <HourlyForecastList
                data={hourlyWeather}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => <HourlyForecastCard hourlyWeather={item} />}
              />
            }

            <Content>
              <Title> Previsão para 10 dias </Title>
              {
                dailyWeather
                &&
                <TenDaysForecastList
                  data={dailyWeather}
                  keyExtractor={(item) => item.id}
                  renderItem={({ item }) => <DailyForecastCard dailyWeather={item} />}
                />
              }
            </Content>
          </>
      }
    </Container>
  );
}