import React, { useEffect, useState } from 'react';
import { StatusBar } from 'react-native'

import SunIcon from '../../assets/sun-temp.svg'
import { DailyForecastCard } from '../../components/DailyForecastCard';
import { HourlyForecastCard } from '../../components/HourlyForecastCard';
import { openWeatherApi } from '../../services/api';
import { cityDTO } from '../../dtos/cityDTO';

import { Load } from '../../components/Load';

import {
  Container,
  Header,
  CityWrapper,
  CityName,
  CityTemp,
  CityWheater,
  CityMinMax,
  HourlyForecastList,
  Title,
  TenDaysForecastList,
  ScrollableContent

} from './styles';

export function CityForecastDetails() {
  const [city, setCity] = useState<cityDTO>();
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchCity() {

      try {
        const response = await openWeatherApi.get('/weather?lat=-23&lon=-46&units=metric&lang=pt_br&appid=efcfe2e04bed61818527d94406991e49');
        await setCity(response.data);
        console.log(city);
      } catch (error) {
        console.log(error)
      } finally {
        setLoading(false)
      }

    };

    fetchCity();

  }, []);

  return (


    <Container>
      <StatusBar
        barStyle='light-content'
        backgroundColor="transparent"
        translucent
      />
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
                {/* <SunIcon width={38} height={38} /> */}
                <CityName> {city.name} </CityName>
                <CityTemp> {city.main.temp} </CityTemp>
                <CityWheater> {city.weather[0].description} </CityWheater>
                <CityMinMax> Máx.: {city.main.temp_min}  Min.: {city.main.temp_max} </CityMinMax>
              </CityWrapper>
            </Header>

            <HourlyForecastList>

              <HourlyForecastCard hour='09h' forecast='26°' />

            </HourlyForecastList>

            <ScrollableContent>

              <Title> PREVISÃO EM 10 DIAS </Title>

              <TenDaysForecastList>

                <DailyForecastCard weekday='Segunda' min='18' max='25' />

              </TenDaysForecastList>

            </ScrollableContent>
          </>

      }


    </Container>
  );
}