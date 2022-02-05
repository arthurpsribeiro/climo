import React from 'react';

import {
  Container,
  Title,
  SubTitle
} from './styles';

export function SearchInstructions() {
  return (
    <Container>
      <Title>Parece que você ainda não{"\n"}buscou uma cidade</Title>
      <SubTitle>
        Tente pesquisar uma cidade usando o botão de busca
      </SubTitle>
    </Container>
  );
}