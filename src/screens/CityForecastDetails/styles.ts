import styled from 'styled-components/native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize'
import { FlatList } from 'react-native';

interface HourlyWeather {
  hour: number,
  temp: number,
  icon: string
};

interface DailyWeather {
  week_day: string,
  temp: {
    day: number,
    min: number,
    max: number
  },
  icon: string
}

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background_primary};
`;

export const Header = styled.View`
  width: 100%;
  height: ${RFPercentage(36)}px;
  background-color: ${({ theme }) => theme.colors.main};
  align-items: center;
`;

export const CityWrapper = styled.View`
  margin-top: ${RFValue(40)}px;
  align-items: center;
`;

export const CityName = styled.Text`
  color: ${({ theme }) => theme.colors.shape};
  font-size: ${RFValue(24)}px;
  font-family: ${({ theme }) => theme.fonts.medium};
`;

export const CityTemp = styled.Text`
  color: ${({ theme }) => theme.colors.shape};
  font-size: ${RFValue(34)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
`;

export const CityWheater = styled.Text`
  color: ${({ theme }) => theme.colors.shape};
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
`;

export const CityMinMax = styled.Text`
  color: ${({ theme }) => theme.colors.shape};
  font-size: ${RFValue(12)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
`;

export const HourlyForecastList = styled(
  FlatList as new () => FlatList<HourlyWeather[]>
).attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: { paddingHorizontal: 24 },
})`
  width: 100%;
  position: absolute;
  margin-top: ${RFPercentage(28)}px;
`;

export const Content = styled.View.attrs({
})`
  flex: 1;
  padding: 0 24px;
  margin-top: ${RFPercentage(12)}px;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.bold};
  text-transform: uppercase;
`;

export const TenDaysForecastList = styled(
  FlatList as new () => FlatList<DailyWeather>
).attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: { paddingVertical: 20 },
})`
  width: 100%;
  margin-top: ${RFPercentage(2)}px;
`;
