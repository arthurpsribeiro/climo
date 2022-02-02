import styled from 'styled-components/native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize'


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

// export const CitiesResults = styled.ScrollView.attrs({
//   showsVerticalScrollIndicator: false,
//   contentContainerStyle: { paddingVertical: 24 },
// })`

export const CitiesResults = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
})`
  margin-top: ${RFValue(20)}px;
  /* margin-bottom: ${RFValue(20)}px; */
  padding: 0 15px;
`;






