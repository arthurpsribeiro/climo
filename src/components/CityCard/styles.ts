import styled from 'styled-components/native';
import Feather from 'react-native-vector-icons/Feather'
import { RFValue } from 'react-native-responsive-fontsize';
import { RectButton, TouchableOpacity } from 'react-native-gesture-handler';


// export const CityCardContainer = styled(RectButton).attrs({
//   activeOpacity: 0.7
// })`
//   height: 130px;
//   background-color: ${({ theme }) => theme.colors.background_secondary};
//   padding: 5px;
//   border-radius: 5px;
//   justify-content: space-between;
//   margin-bottom: ${RFValue(10)}px;
// `;

export const CityCardContainer = styled.TouchableOpacity`
  height: 130px;
  background-color: ${({ theme }) => theme.colors.background_secondary};
  padding: 5px;
  border-radius: 5px;
  justify-content: space-between;
  margin-bottom: ${RFValue(10)}px;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const CityLocation = styled.View` 

`;

export const CityName = styled.Text` 
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(24)}px;
`;

export const CountryName = styled.Text` 
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;
`;

export const CityTemp = styled.Text` 
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(34)}px;
  color: ${({ theme }) => theme.colors.attention_light}
`;

export const Footer = styled.View` 
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const WeatherConditions = styled.View` 

`;

export const Weather = styled.Text` 
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.colors.attention_light}
`;

export const TempRange = styled.Text` 
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(12)}px;
  color: ${({ theme }) => theme.colors.text_dark}
`;

export const Icon = styled(Feather)` 

`;
