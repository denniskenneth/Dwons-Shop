import React, { useState } from 'react';
import { View, TouchableOpacity, Platform } from 'react-native';
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
  MsgBox,
  Line,
  ExtraText,
  ExtraView,
  TextLink,
  TextLinkContent,
} from '../components/styles';
// Icns
import { Octicons, Ionicons, Fontisto } from '@expo/vector-icons';
// colors
const { brand, darklight, primary } = Colors;
// date picker
import DateTimePicker from '@react-native-community/datetimepicker';

const SignupScreen = () => {
  const [hidepassword, setHidePassword] = useState(true);
  const [show, setShow] = useState(false);
  const [mode, setMode] = useState('date');
  const [date, setDate] = useState(new Date(2000, 1, 1));
  //   user Date of Birth
  //   const [dob, setDob] = useState();

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    // setShow(false);
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
    // setDob(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatePicker = () => {
    showMode('date');
  };

  return (
    <StyledContainer>
      <StatusBar style='dark' />
      <InnerContainer>
        <PageTitle>Dwon's Shop</PageTitle>
        <SubTitle>Account Signup</SubTitle>

        {show && (
          <DateTimePicker
            testID='dateTimePicker'
            value={date}
            mode={mode}
            is24Hour={true}
            display='default'
            onChange={onChange}
          />
        )}

        <Formik
          initialValues={{
            fullName: '',
            email: '',
            dateOfBirth: '',
            password: '',
            confirmPassword: '',
          }}
          onSubmit={(values) => {
            console.log(`logged in with ${values}`);
          }}
        >
          {({ handleChange, handleBlur, handleSubmit, values }) => (
            <StyledFormArea>
              <CustomTextInput
                label='Full Name'
                icon='person'
                placeholder='John Doe'
                placeholderTextColor={darklight}
                onChangeText={handleChange('fullName')}
                onBlur={handleBlur('fullName')}
                value={values.fullName}
              />

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
                label='Date of Birth'
                icon='calendar'
                placeholder='YYYY - MM - DD'
                placeholderTextColor={darklight}
                onChangeText={handleChange('dateOfBirth')}
                onBlur={handleBlur('dateOfBirth')}
                value={date ? date.toDateString() : ''}
                isDate={true}
                editable={false}
                showDatePicker={showDatePicker}
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

              <CustomTextInput
                label='Confirm Password'
                icon='lock'
                placeholder='* * * * * * *'
                placeholderTextColor={darklight}
                onChangeText={handleChange('confirmPassword')}
                onBlur={handleBlur('confirmPassword')}
                value={values.confirmPassword}
                secureTextEntry={hidepassword}
                isPassword={true}
                hidepassword={hidepassword}
                setHidePassword={setHidePassword}
              />
              <MsgBox>...</MsgBox>
              <StyledBtn onPress={handleSubmit}>
                <BtnText>Login</BtnText>
              </StyledBtn>
              <Line />

              <ExtraView>
                <ExtraText>Already have an account?</ExtraText>
                <TextLink>
                  <TextLinkContent>Login</TextLinkContent>
                </TextLink>
              </ExtraView>
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

export default SignupScreen;
