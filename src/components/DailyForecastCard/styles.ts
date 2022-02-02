import styled from 'styled-components/native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize'


export const DailyForecastContainer = styled.View`
  width: 100%;
  padding: 5px;
  border-radius: 5px;
  margin-bottom: 10px;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  /* height: 120px; */

  background-color: ${({ theme }) => theme.colors.background_secondary};
`;

export const WeekDay = styled.Text` 
  color: ${({ theme }) => theme.colors.text_dark};
  font-size: ${RFValue(16)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
`;

export const TempRange = styled.Text` 
  color: ${({ theme }) => theme.colors.text_dark};
  font-size: ${RFValue(16)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
`;


