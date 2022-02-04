import React from 'react';
import { Image } from 'react-native';

import {
  DailyForecastContainer,
  WeekDay,
  TempRange
} from './styles';

interface TenDaysForecastProps {
  dailyWeather: {
    week_day: string,
    temp: {
      day: number,
      min: number,
      max: number
    },
    icon: string
  }
}

export function DailyForecastCard({ dailyWeather }: TenDaysForecastProps) {
  return (
    <DailyForecastContainer>
      <WeekDay> {dailyWeather.week_day} </WeekDay>
      <Image source={{ uri: `http://openweathermap.org/img/wn/${dailyWeather.icon}@2x.png` }} style={{ width: 36, height: 36 }} />
      <TempRange> {(dailyWeather.temp.min).toFixed()}°  -  {(dailyWeather.temp.max).toFixed()}° </TempRange>
    </DailyForecastContainer>
  );
}