import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize'

export const HourlyForecastContainer = styled.View`
  width: ${RFValue(70)}px;
  height: ${RFValue(110)}px;
  border-radius: 5px;
  margin-right: 10px;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.background_secondary};
`

export const Hour = styled.Text`
color: ${({ theme }) => theme.colors.text_dark};
font-size: ${RFValue(18)}px;
font-family: ${({ theme }) => theme.fonts.regular};
`;

export const Forecast = styled.Text`
color: ${({ theme }) => theme.colors.text_dark};
font-size: ${RFValue(20)}px;
font-family: ${({ theme }) => theme.fonts.regular};
`;