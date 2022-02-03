import styled from 'styled-components/native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize'

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
  /* width: 100%; */
  /* padding: 0 24px; */
  margin-top: ${RFValue(40)}px;

  /* justify-content: center; */
  align-items: center;

  /* height: ${RFPercentage(32)}px; */
  /* background-color: ${({ theme }) => theme.colors.attention}; */
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

export const HourlyForecastList = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: { paddingHorizontal: 24 },
})`
  width: 100%;
  position: absolute;
  margin-top: ${RFPercentage(28)}px;
`;

export const ScrollableContent = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: { paddingVertical: 24 },
})`
  flex: 1;
  padding: 0 24px;
  margin-top: ${RFPercentage(10)}px;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.bold};

  /* background-color: ${({ theme }) => theme.colors.attention}; */
`;

export const TenDaysForecastList = styled.View`
  width: 100%;
  margin-top: ${RFPercentage(2)}px;
`;
