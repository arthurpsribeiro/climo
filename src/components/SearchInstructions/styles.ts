import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background_primary};
`;

export const Title = styled.Text` 
  font-family: ${({ theme }) => theme.fonts.medium};
  text-align: center;
  margin-top: ${RFValue(20)}px;
  margin-bottom: ${RFValue(10)}px;
  font-size: ${RFValue(18)}px;
  color: ${({ theme }) => theme.colors.main};

`;

export const SubTitle = styled.Text` 
  font-family: ${({ theme }) => theme.fonts.medium};
  text-align: center;
  margin-bottom: ${RFValue(8)}px;
  font-size: ${RFValue(18)}px;
  color: ${({ theme }) => theme.colors.main};


`;
