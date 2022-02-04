import React from 'react';
import AppLoading from "expo-app-loading"
import { ThemeProvider } from 'styled-components/native';

import { NavigationContainer } from '@react-navigation/native';

import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold
} from "@expo-google-fonts/poppins";

import { CityForecastDetails } from './src/screens/CityForecastDetails';
import theme from './src/styles/theme';
import { CitySearch } from './src/screens/CitySearch';
import { AppRoutes } from './src/routes/app.routes';

import { CityProvider } from './src/hooks/city';

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold
  });

  if (!fontsLoaded) {
    return <AppLoading />
  };

  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <CityProvider>
          <AppRoutes />
        </CityProvider>
      </NavigationContainer>
    </ThemeProvider>
  );
}
