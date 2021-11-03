import React from 'react';
import { View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

// IMPORT CUSTOM COMPONENT
import KeyboardAvoidingWrapper from '../../components/KeyboardAvoidingWrapper';
import { StyledContainer } from '../../components/styles';
import { Formik } from 'formik';

const CheckoutScreen = () => {
  return (
    <KeyboardAvoidingWrapper>
      <StyledContainer>
        <StatusBar style='dark' />
        <Formik
          initialValues={{
            name: '',
            email: '',
            dateOfBirth: '',
            password: '',
            confirmPassword: '',
          }}
        ></Formik>
      </StyledContainer>
    </KeyboardAvoidingWrapper>
  );
};

export default CheckoutScreen;
