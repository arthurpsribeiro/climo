import React from 'react';

import SunIcon from '../../assets/sun-temp.svg';

import {
  DailyForecastContainer,
  WeekDay,
  TempRange
} from './styles';

interface TenDaysForecastProps {
  weekday: string,
  min: string,
  max: string
}

export function DailyForecastCard({ weekday, min, max }: TenDaysForecastProps) {
  return (
    <DailyForecastContainer>
      <WeekDay> {weekday} </WeekDay>
      <SunIcon width={28} height={28} />
      <TempRange> {min}°  -  {max}° </TempRange>
    </DailyForecastContainer>
  );
}