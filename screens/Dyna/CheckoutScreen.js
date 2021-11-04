import React, { useState } from 'react';
import { View, Alert } from 'react-native';
import { StatusBar } from 'expo-status-bar';

// IMPORT CUSTOM COMPONENT
import KeyboardAvoidingWrapper from '../../components/KeyboardAvoidingWrapper';
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
  MsgBox,
  Line,
  ExtraText,
  ExtraView,
  TextLink,
  TextLinkContent,
} from '../../components/styles';
import { Formik } from 'formik';
import { Octicons, Ionicons, Fontisto, FontAwesome5 } from '@expo/vector-icons';

// COlors
const { brand, darklight, primary } = Colors;

const CheckoutScreen = ({ navigation }) => {
  // MESSAGE STATE
  const [message, setMessage] = useState();
  const [messageType, setMessageType] = useState();

  // FORM HANDLER
  const handleCheckout = () => {
    handleMessage(null);
    confirmOrder();
  };

  const handleMessage = (message, type = 'FAILED') => {
    setMessage(message);
    setMessageType(type);
  };

  // Prompt Function
  const confirmOrder = () =>
    Alert.alert('Confirm Order', 'Are You Sure You Wanna Checkout?', [
      {
        text: 'No',
        onPress: () => console.log('Cancel Pressed'),
      },
      { text: 'Yes', onPress: () => navigation.navigate('Confirm') },
    ]);

  return (
    <KeyboardAvoidingWrapper>
      {/* <StyledContainer style={{ padding: 100 }}> */}

      <InnerContainer style={{ paddingVertical: 30, marginTop: 50 }}>
        <StatusBar style='dark' />
        <PageTitle>Dwon's Shop</PageTitle>
        <SubTitle>Checkout Page</SubTitle>
        <Formik
          initialValues={{
            name: '',
            email: '',
            address: '',
            phone: '',
            cardNumber: '',
            expire: '',
            ccv: '',
          }}
          onSubmit={(values, { setSubmitting }) => {
            values = { ...values };
            if (
              values.name == '' ||
              values.email == '' ||
              values.address == '' ||
              (values.phone == '' &&
                (values.cardNumber == '' ||
                  values.expire == '' ||
                  values.ccv == ''))
            ) {
              handleMessage('Please fill all the fields');
              // setSubmitting(false);
            } else if (
              values.cardNumber == '' ||
              values.expire == '' ||
              values.ccv == ''
            ) {
              handleMessage('Please fill in all card detail field');
              // setSubmitting(false);
            } else {
              handleCheckout(values);
            }
            // else {
            // values.email.toLowerCase();
            // handleSignup(values, setSubmitting);
            // }
          }}
        >
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            isSubmitting,
          }) => (
            <StyledFormArea style={{}}>
              <CustomTextInput
                label='Full Name'
                icon='person'
                placeholder='John Doe'
                placeholderTextColor={darklight}
                onChangeText={handleChange('name')}
                onBlur={handleBlur('name')}
                value={values.name}
              />
              <CustomTextInput
                label='Email Address'
                icon='mail'
                placeholder='example@example.com'
                placeholderTextColor={darklight}
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email.toLowerCase()}
                keyboardType='email-address'
              />
              <CustomTextInput
                label='Address'
                icon='location'
                placeholder='12 UPSA Road'
                placeholderTextColor={darklight}
                onChangeText={handleChange('address')}
                onBlur={handleBlur('address')}
                value={values.address}
                // keyboardType='email-address'
              />
              <CustomTextInput
                label='Phone Number'
                icon='device-mobile'
                placeholder='0592324719'
                placeholderTextColor={darklight}
                onChangeText={handleChange('phone')}
                onBlur={handleBlur('phone')}
                value={values.phone}
                keyboardType='phone-pad'
              />
              {/* <Line /> */}
              {/* <View style={{ flexDirection: 'row', justifyContent: 'center' }}> */}
              {/* <SubTitle>Card Detail</SubTitle> */}
              {/* </View> */}
              <CustomTextInput
                label='Credit/Debit Card Number'
                icon='credit-card'
                placeholder='8728 9203 5283 9720'
                placeholderTextColor={darklight}
                onChangeText={handleChange('cardNumber')}
                onBlur={handleBlur('cardNumber')}
                value={values.cardNumber}
                keyboardType='number-pad'
              />
              <CustomTextInput
                label='Expiry Date'
                icon='calendar'
                placeholder='10/20'
                placeholderTextColor={darklight}
                onChangeText={handleChange('expire')}
                onBlur={handleBlur('expire')}
                value={values.expire}
                // keyboardType='numeric'
              />
              <CustomTextInput
                label='CCV'
                icon='credit-card'
                placeholder='097'
                placeholderTextColor={darklight}
                onChangeText={handleChange('ccv')}
                onBlur={handleBlur('ccv')}
                value={values.ccv}
                keyboardType='number-pad'
              />

              <MsgBox type={messageType}>{message}</MsgBox>
              <StyledBtn onPress={handleSubmit}>
                <BtnText>Pay</BtnText>
              </StyledBtn>
            </StyledFormArea>
          )}
        </Formik>
      </InnerContainer>
      {/* </StyledContainer> */}
    </KeyboardAvoidingWrapper>
  );
};

const CustomTextInput = ({
  label,
  icon,
  isPassword,
  hidepassword,
  setHidePassword,
  isDate,
  showDatePicker,
  ...props
}) => {
  return (
    <View>
      <LeftIcon>
        <Octicons name={icon} size={30} color={brand} />
      </LeftIcon>
      <StyledInputLabel>{label}</StyledInputLabel>
      {isDate && (
        <TouchableOpacity onPress={showDatePicker}>
          <StyledTextInput {...props} />
        </TouchableOpacity>
      )}
      {!isDate && <StyledTextInput {...props} />}

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

export default CheckoutScreen;
