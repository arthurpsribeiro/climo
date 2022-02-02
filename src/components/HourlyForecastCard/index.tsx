import React from 'react';

import SunIcon from '../../assets/sun-temp.svg'

import {
  HourlyForecastContainer,
  Hour,
  Forecast
} from './styles';

interface HourlyForecastProps {
  hour: string,
  forecast: string
}

export function HourlyForecastCard({ hour, forecast }: HourlyForecastProps) {
  return (
    <HourlyForecastContainer>
      <Hour> {hour} </Hour>
      <SunIcon width={38} height={38} />
      <Forecast> {forecast} </Forecast>
    </HourlyForecastContainer>
  );
}