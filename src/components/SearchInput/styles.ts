import styled from 'styled-components/native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize'

import Feather from 'react-native-vector-icons/Feather'

export const SearchInputContainer = styled.View`
  flex-direction: row;
  margin: -20px 24px 0 24px;
  padding: 5px 10px;
  border-radius: 5px;

  background-color: ${({ theme }) => theme.colors.shape};

`;

export const TextInput = styled.TextInput`
  flex: 1;
  font-size: ${RFValue(16)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.text_dark};

  /* background-color: ${({ theme }) => theme.colors.attention}; */
`

export const Icon = styled(Feather)`
  align-self: center;
  font-size: ${RFValue(20)}px;
  color: ${({ theme }) => theme.colors.text_dark};
`