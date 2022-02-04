import React from 'react';
import AppLoading from "expo-app-loading"
import { ThemeProvider } from 'styled-components/native';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native';

import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold
} from "@expo-google-fonts/poppins";

import theme from './src/styles/theme';
import { AppRoutes } from './src/routes/app.routes';
import { CurrentCityProvider } from './src/hooks/currentCity';

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
        <StatusBar
          barStyle='light-content'
          backgroundColor="transparent"
          translucent
        />
        <CurrentCityProvider>
          <AppRoutes />
        </CurrentCityProvider>
      </NavigationContainer>
    </ThemeProvider>
  );
}
