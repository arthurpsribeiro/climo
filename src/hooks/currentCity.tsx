import { createContext, ReactNode, useContext, useState } from "react";

import * as Location from 'expo-location';
import { openWeatherApi } from '../services/api';

import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

interface currentCityProviderProps {
  children: ReactNode
};

interface City {
  name: string,
};

interface CurrentWeather {
  temp: number,
  weather: string,
  temp_min: number,
  temp_max: number,
}

interface HourlyWeather {
  hour: number,
  temp: number,
  icon: string,
  id: number
};

interface DailyWeather {
  week_day: string,
  temp: {
    day: number,
    min: number,
    max: number
  },
  icon: string,
  id: number
}

interface ICityContextData {
  city: City,
  currentWeather: CurrentWeather,
  hourlyWeather: HourlyWeather[],
  dailyWeather: DailyWeather[],
  loading: Boolean,
  getLocation(): Promise<void>,
}

const CurrentCityContext = createContext({} as ICityContextData);

function CurrentCityProvider({ children }: currentCityProviderProps) {
  const [city, setCity] = useState<City>({} as City);
  const [currentWeather, setCurrentWeather] = useState<CurrentWeather>({} as CurrentWeather);
  const [hourlyWeather, setHourlyWeather] = useState<HourlyWeather[]>([] as HourlyWeather[]);
  const [dailyWeather, setDailyWeather] = useState<DailyWeather[]>([] as DailyWeather[]);
  const [loading, setLoading] = useState(true);

  async function getLocation() {
    const { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      console.log('erro !')
    }

    const userLocation = await Location.getCurrentPositionAsync({ accuracy: Location.Accuracy.High });
    const { latitude, longitude } = userLocation.coords

    try {
      const response = await openWeatherApi.get(`weather?lat=${latitude}&lon=${longitude}&units=metric&lang=pt_br&appid=efcfe2e04bed61818527d94406991e49`);

      setCity({ name: response.data.name });
      setCurrentWeather({
        temp: response.data.main.temp,
        weather: response.data.weather[0].description,
        temp_min: response.data.main.temp_min,
        temp_max: response.data.main.temp_max,
      });

    } catch (error) {
      console.log(error)
    }

    try {
      const response = await openWeatherApi.get(`onecall?lat=${latitude}&lon=${longitude}&exclude=minutely,current,alerts&units=metric&lang=pt_br&appid=efcfe2e04bed61818527d94406991e49`);

      const hourlyWeatherArray = [];
      response.data.hourly.forEach((data, index) => {
        hourlyWeatherArray.push({
          hour: format(new Date(response.data.hourly[index].dt * 1000), 'HH', {
            locale: ptBR
          }),
          temp: response.data.hourly[index].temp,
          icon: response.data.hourly[index].weather[0].icon,
          id: response.data.hourly[index].weather[0].id
        });
      });
      setHourlyWeather(hourlyWeatherArray);

      const dailyWeatherArray = [];
      response.data.daily.forEach((data, index) => {
        dailyWeatherArray.push({
          week_day: format(new Date(response.data.daily[index].dt * 1000), 'EEEE', { locale: ptBR }),
          temp: {
            day: response.data.daily[index].temp.day,
            min: response.data.daily[index].temp.min,
            max: response.data.daily[index].temp.max
          },
          icon: response.data.daily[index].weather[0].icon,
          id: response.data.daily[index].weather[0].id
        });
      });
      setDailyWeather(dailyWeatherArray);
      setLoading(false);

    } catch (error) {
      console.log(error);
    }
  }

  return (
    <CurrentCityContext.Provider value={{
      city,
      getLocation,
      currentWeather,
      hourlyWeather,
      dailyWeather,
      loading
    }}>
      {children}
    </CurrentCityContext.Provider>
  )
};

function useCurrentCity() {
  const context = useContext(CurrentCityContext);

  return context;
};

export { CurrentCityProvider, useCurrentCity }
