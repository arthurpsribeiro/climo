import React, { useEffect, useState } from 'react';
import { StatusBar } from 'react-native'

import { Platform, PermissionsAndroid } from 'react-native';
import GeoLocation from 'react-native-geolocation-service';

import SunIcon from '../../assets/sun-temp.svg'
import { DailyForecastCard } from '../../components/DailyForecastCard';
import { HourlyForecastCard } from '../../components/HourlyForecastCard';
import { openWeatherApi } from '../../services/api';
import { cityDTO } from '../../dtos/cityDTO';
import * as Location from 'expo-location';

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
  const [location, setLocation] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    async function getLocation() {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        console.log('erro !')
      }

      let location = await Location.getCurrentPositionAsync({});
      console.log(location);
    };

    async function fetchCity() {

      try {
        const response = await openWeatherApi.get('onecall?lat=-23&lon=-46&exclude=minutely&units=metric&lang=pt_br&appid=efcfe2e04bed61818527d94406991e49');
        setCity(response.data);
        console.log('city foi');
      } catch (error) {
        console.log(error)
      } finally {
        setLoading(false)
      }

    };

    getLocation();
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