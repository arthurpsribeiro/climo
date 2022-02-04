import styled from 'styled-components/native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize'
import { FlatList } from 'react-native';


interface SearchResultData {
  city: string,
  country: string,
  temp: string,
  weather: string,
  min: string,
  max: string
}

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background_primary};

`;

export const Header = styled.View`
  width: 100%;
  height: ${RFPercentage(22)}px;
  
  background-color: ${({ theme }) => theme.colors.main};

  justify-content: center;
  align-items: center;
`;

export const HeaderTitle = styled.Text`
  color: ${({ theme }) => theme.colors.shape};
  font-size: ${RFValue(26)}px;
  font-family: ${({ theme }) => theme.fonts.medium};
`;


export const CitiesResults = styled(
  FlatList as new () => FlatList<SearchResultData>
).attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: { paddingVertical: 20 },
})`
  flex: 1;
  padding: 0 15px;
  margin-top: ${RFPercentage(1)}px;
`;








