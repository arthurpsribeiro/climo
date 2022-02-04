import React from 'react';
import { Image } from 'react-native';

import {
  HourlyForecastContainer,
  Hour,
  Forecast
} from './styles';

interface HourlyForecastProps {
  hourlyWeather: {
    hour: number,
    temp: number,
    icon: string
  }
};

export function HourlyForecastCard({ hourlyWeather }: HourlyForecastProps) {
  return (
    <HourlyForecastContainer>
      <Hour> {hourlyWeather.hour}h </Hour>
      <Image source={{ uri: `http://openweathermap.org/img/wn/${hourlyWeather.icon}@2x.png` }} style={{ width: 52, height: 52 }} />
      <Forecast> {(hourlyWeather.temp).toFixed()}° </Forecast>
    </HourlyForecastContainer>
  );
}