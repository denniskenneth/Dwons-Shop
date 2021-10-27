import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import colors from './res/colors';

// Navigator Stack Import
import Stack from './routes/navigators/Stack';

// const Stack = createNativeStackNavigator();
export default function App() {
  return <Stack style={{ flex: 1 }} />;
}
