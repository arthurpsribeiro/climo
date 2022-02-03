import React from 'react';
import { ActivityIndicator } from 'react-native';
import { useTheme } from '@react-navigation/native';

export function Load(){
  const theme = useTheme()
  return (
    <ActivityIndicator 
      color={theme.colors.primary}
      size="large"
      style={{ flex: 1 }}
    />
  );
}