import React, {Component} from 'react';

import {
  Container,
  TypeTitle,
  TypeImage,
  TypeDescription,
  RequestButton,
  RequestButtonText
} from './styles';

import UberX from '../../assets/uberx.png'

export default class Details extends Component {
  render() {
    return (
      <Container>
        <TypeTitle>Popular</TypeTitle>
        <TypeDescription>Viagens baratas</TypeDescription>
        <TypeImage source={UberX}/>
        <TypeTitle>UberX</TypeTitle>
        <TypeDescription>R$6,50</TypeDescription>

        <RequestButton onPress={()=>{}}>
            <RequestButtonText>
                Solicitar UberX
            </RequestButtonText>
        </RequestButton>
      </Container>
    );
  }
}
