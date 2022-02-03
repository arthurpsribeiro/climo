import React from "react";
import { Platform } from 'react-native';

import { useTheme } from 'styled-components';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';


import { CityForecastDetails } from '../screens/CityForecastDetails';
import { CitySearch } from '../screens/CitySearch';

const { Navigator, Screen } = createBottomTabNavigator();

export function AppRoutes() {
  const theme = useTheme();

  return (
    <Navigator
      screenOptions={{
        tabBarActiveTintColor: theme.colors.main,
        tabBarInactiveTintColor: theme.colors.text,
        tabBarLabelPosition: 'beside-icon',
        tabBarStyle: {
          paddingVertical: Platform.OS === 'ios' ? 20 : 0,
          height: 60,
        },
        headerShown: false,
      }}
    >
      <Screen
        name="Agora"
        component={CityForecastDetails}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons
              name="home"
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Screen
        name="Buscar"
        component={CitySearch}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons
              name="search"
              size={size}
              color={color}
            />
          ),
        }}
      />

    </Navigator>
  );
}