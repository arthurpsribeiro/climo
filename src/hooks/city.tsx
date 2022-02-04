import { createContext, ReactNode, useContext, useState } from "react";

import * as Location from 'expo-location';
import { openWeatherApi } from '../services/api';



interface cityProviderProps {
  children: ReactNode
};

interface City {
  name: string,
  current: {
    temp: number,
    weather: string,
    temp_min: number,
    temp_max: number,
  }
};

interface Location {
  latitude: number,
  longitude: number
}

interface CurrentWeather {
  temp: number
}

interface ICityContextData {
  city: City,
  getLocation(): Promise<void>,
}

const CityContext = createContext({} as ICityContextData);

function CityProvider({ children }: cityProviderProps) {
  const [city, setCity] = useState<City>({} as City)
  const [currentWeather, setCurrentWeather] = useState<CurrentWeather>({} as CurrentWeather)

  async function getLocation() {
    const { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      console.log('erro !')
    }

    const userLocation = await Location.getCurrentPositionAsync({ accuracy: Location.Accuracy.High });

    const { latitude, longitude } = userLocation.coords

    try {
      const response = await openWeatherApi.get(`weather?lat=${latitude}&lon=${longitude}&units=metric&lang=pt_br&appid=efcfe2e04bed61818527d94406991e49`);



      const cityAssigned = Object.assign(city, {
        name: response.data.name,
        current: {
          temp: response.data.main.temp,
          weather: response.data.weather[0].description,
          temp_min: response.data.main.temp_min,
          temp_max: response.data.main.temp_max,
        }

      })

      console.log('teste', cityAssigned)

      setCity(cityAssigned)
      // console.log(response.data.name);
    } catch (error) {
      console.log(error)
    }

    try {
      const response = await openWeatherApi.get(`onecall?lat=${latitude}&lon=${longitude}&exclude=minutely&units=metric&lang=pt_br&appid=efcfe2e04bed61818527d94406991e49`);
      // console.log(response.data.current.temp);

      // const teste = Object.assign(city, { temp: response.data.current.temp })

      // console.log('teste', teste)

      // setCurrentWeather({ temp: response.data.current.temp })

      // console.log(response.data);
    } catch (error) {
      console.log(error)
    }

  }

  return (
    <CityContext.Provider value={{ city, getLocation }}>
      {children}
    </CityContext.Provider>
  )
};

function useCity() {
  const context = useContext(CityContext);

  return context
};

export { CityProvider, useCity }
