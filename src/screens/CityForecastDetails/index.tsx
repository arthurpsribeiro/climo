import React, { useEffect, useState, useContext } from 'react';
import { StatusBar, Text } from 'react-native'

import SunIcon from '../../assets/sun-temp.svg'
import { DailyForecastCard } from '../../components/DailyForecastCard';
import { HourlyForecastCard } from '../../components/HourlyForecastCard';
import { openWeatherApi } from '../../services/api';
import { cityDTO } from '../../dtos/cityDTO';
import * as Location from 'expo-location';

import { Load } from '../../components/Load';

import { useCity } from '../../hooks/city';

import {
  Container,
  Header,
  CityWrapper,
  HourlyForecastList,
  Title,
  TenDaysForecastList,
  ScrollableContent,
  CityTemp,
  CityName,
  CityWheater,
  CityMinMax
} from './styles';

export function CityForecastDetails() {
  // const [city, setCity] = useState<cityDTO>();
  const [location, setLocation] = useState({ latitude: 0, longitude: 0 });
  const [cityName, setCityName] = useState("aaaaaa");
  const [loading, setLoading] = useState(true);

  const { city, getLocation } = useCity()

  useEffect(() => {
    async function teste() {
      await getLocation()
      setLoading(false)
    }



    teste()
  }, [])

  // async function getLocation() {
  //   const { status } = await Location.requestForegroundPermissionsAsync();
  //   if (status !== 'granted') {
  //     console.log('erro !')
  //   }

  //   const userLocation = await Location.getCurrentPositionAsync({ accuracy: Location.Accuracy.Highest, timeInterval: 1000 });

  //   const { latitude, longitude } = userLocation.coords
  //   setLocation({ latitude, longitude })
  // };

  // async function getCityName() {
  //   try {

  //     if (location.latitude == 0 && location.longitude == 0) {
  //       const response = await openWeatherApi.get(`weather?lat=${location.latitude}&lon=${location.longitude}&appid=efcfe2e04bed61818527d94406991e49`);
  //       await setCityName(response.data.name);
  //     }


  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

  // async function fetchCity() {

  //   try {
  //     const response = await openWeatherApi.get(`onecall?lat=${location.latitude}&lon=${location.longitude}&exclude=minutely&units=metric&lang=pt_br&appid=efcfe2e04bed61818527d94406991e49`);
  //     setCity(response.data);
  //     // console.log(response.data);
  //   } catch (error) {
  //     console.log(error)
  //   } finally {
  //     setLoading(false)
  //   }
  // };

  // useEffect(() => {
  //   async function fetchData() {
  //     getLocation()
  //     getCityName()
  //     fetchCity()
  //   }

  //   fetchData()
  // }, [])



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
                <CityTemp> {city.current.temp}° </CityTemp>
                <CityWheater> {city.current.weather} </CityWheater>
                <CityMinMax> Máx.: {city.current.temp_max}°  Min.: {city.current.temp_min} </CityMinMax>
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