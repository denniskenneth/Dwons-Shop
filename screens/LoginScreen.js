import React from 'react';
import { View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

// IMPORT CUSTOM COMPONENTS
import {
  StyledContainer,
  InnerContainer,
  PageLogo,
  PageTitle,
  SubTitle,
  StyledFormArea,
} from '../components/styles';

const LoginScreen = () => {
  return (
    <StyledContainer>
      <StatusBar style='dark' />
      <InnerContainer>
        <PageLogo
          resizeMode='cover'
          source={require('../assets/img/imgLogo.png')}
        />
        <PageTitle>Dwon's Shop</PageTitle>
      </InnerContainer>
    </StyledContainer>
  );
};

export default LoginScreen;
