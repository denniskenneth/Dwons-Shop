import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import colors from './res/colors';

// IMPORT SCREENS
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import SignupScreen from './screens/SignupScreen';

// const Stack = createNativeStackNavigator();
export default function App() {
  return <SignupScreen />; //<LoginScreen />;
}
