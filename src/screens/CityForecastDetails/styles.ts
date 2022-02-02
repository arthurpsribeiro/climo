import styled from 'styled-components/native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize'

export const Container = styled.ScrollView`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background_primary};
`;

export const Header = styled.View`
  width: 100%;
  height: ${RFPercentage(42)}px;
  
  background-color: ${({ theme }) => theme.colors.main};

  /* justify-content: center; */
  align-items: center;
`;

export const CityWrapper = styled.View`
  width: 100%;
  padding: 0 24px;
  margin-top: ${RFValue(28)}px;

  justify-content: center;
  align-items: center;

  /* height: ${RFPercentage(32)}px; */
  /* background-color: ${({ theme }) => theme.colors.attention}; */
`;

export const CityName = styled.Text`
  color: ${({ theme }) => theme.colors.shape};
  font-size: ${RFValue(26)}px;
  font-family: ${({ theme }) => theme.fonts.medium};
`;

export const CityTemp = styled.Text`
  color: ${({ theme }) => theme.colors.shape};
  font-size: ${RFValue(30)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
`;

export const CityWheater = styled.Text`
  color: ${({ theme }) => theme.colors.shape};
  font-size: ${RFValue(18)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
`;

export const CityMinMax = styled.Text`
  color: ${({ theme }) => theme.colors.shape};
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.bold};

  /* background-color: ${({ theme }) => theme.colors.attention}; */
`;

export const HourlyForecastWrapper = styled.View`

  width: 100%;
  height: 150px;

  /* padding-left : 24px ; */

  position: absolute;
  margin-top: ${RFPercentage(32)}px;
  /* background-color: ${({ theme }) => theme.colors.attention}; */

`

export const HourlyForecastTitle = styled.View`

  width: 100%;

  padding-left : 24px ;

  /* background-color: ${({ theme }) => theme.colors.attention}; */

`

export const HourlyForecastList = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: { paddingHorizontal: 24 },
  justifyContent: "center",
  alignItems: "center",

})`
  width: 100%;

  /* height: 100px; */
  /* position: absolute; */
  /* margin-top: ${RFPercentage(5)}px; */

  /* background-color: red; */


`;

export const TenDaysForecastWrapper = styled.View`
  flex: 1;
  padding: 0 24px;
  margin-top: ${RFPercentage(16)}px;
`;

export const TenDaysForecastList = styled.View`
  width: 100%;
  margin-top: ${RFPercentage(2)}px;

  /* height: 120px; */

  /* background-color: ${({ theme }) => theme.colors.attention}; */
`;
