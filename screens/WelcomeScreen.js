import React from 'react';
import { StatusBar } from 'expo-status-bar';

// IMPORT CUSTOM COMPONENTS
import {
  InnerContainer,
  PageTitle,
  SubTitle,
  StyledFormArea,
  StyledBtn,
  BtnText,
  Line,
  WelcomeContainer,
  // WelcomeImage,
  Avatar,
} from '../components/styles';

const WelcomeScreen = ({ navigation }) => {
  return (
    <>
      <StatusBar style='dark' />
      <InnerContainer>
        <WelcomeContainer>
          <PageTitle welcome={true}>Welcome John</PageTitle>
          <SubTitle welcome={true}>John Doe</SubTitle>
          <SubTitle welcome={true}>JohnDoe@example.com</SubTitle>
          <StyledFormArea>
            <Avatar
              resizeMode='cover'
              source={require('../assets/img/imgLogo.png')}
            />
            <Line />
            <StyledBtn onPress={() => navigation.navigate('Login')}>
              <BtnText>Logout</BtnText>
            </StyledBtn>
          </StyledFormArea>
        </WelcomeContainer>
      </InnerContainer>
    </>
  );
};

export default WelcomeScreen;
