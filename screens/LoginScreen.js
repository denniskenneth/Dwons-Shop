import React, { useState } from 'react';
import { View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

// IMPORT CUSTOM COMPONENTS
import { Formik } from 'formik';
import {
  Colors,
  StyledContainer,
  InnerContainer,
  PageLogo,
  PageTitle,
  SubTitle,
  StyledFormArea,
  LeftIcon,
  StyledInputLabel,
  StyledTextInput,
  RightIcon,
  StyledBtn,
  BtnText,
} from '../components/styles';
// Icns
import { Octicons, Ionicons } from '@expo/vector-icons';
// colors
const { brand, darklight } = Colors;

const LoginScreen = () => {
  const [hidepassword, setHidePassword] = useState(true);
  return (
    <StyledContainer>
      <StatusBar style='dark' />
      <InnerContainer>
        <PageLogo
          resizeMode='cover'
          source={require('../assets/img/imgLogo.png')}
        />
        <PageTitle>Dwon's Shop</PageTitle>
        <SubTitle>Account Login</SubTitle>
        <Formik
          initialValues={{ email: '', password: '' }}
          onSubmit={(values) => {
            console.log(`logged in with ${values}`);
          }}
        >
          {({ handleChange, handleBlur, handleSubmit, values }) => (
            <StyledFormArea>
              <CustomTextInput
                label='Email Address'
                icon='mail'
                placeholder='example@example.com'
                placeholderTextColor={darklight}
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
                keyboardType='email-address'
              />

              <CustomTextInput
                label='Password'
                icon='lock'
                placeholder='* * * * * * *'
                placeholderTextColor={darklight}
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
                secureTextEntry={hidepassword}
                isPassword={true}
                hidepassword={hidepassword}
                setHidePassword={setHidePassword}
              />

              <StyledBtn onPress={handleSubmit}>
                <BtnText>Login</BtnText>
              </StyledBtn>
            </StyledFormArea>
          )}
        </Formik>
      </InnerContainer>
    </StyledContainer>
  );
};

const CustomTextInput = ({
  label,
  icon,
  isPassword,
  hidepassword,
  setHidePassword,
  ...props
}) => {
  return (
    <View>
      <LeftIcon>
        <Octicons name={icon} size={30} color={brand} />
      </LeftIcon>
      <StyledInputLabel>{label}</StyledInputLabel>
      <StyledTextInput {...props} />
      {isPassword && (
        <RightIcon onPress={() => setHidePassword(!hidepassword)}>
          <Ionicons
            name={hidepassword ? 'md-eye-off' : 'md-eye'}
            size={30}
            color={darklight}
          />
        </RightIcon>
      )}
    </View>
  );
};

export default LoginScreen;
