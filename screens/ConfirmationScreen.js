import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Colors, TextLink, TextLinkContent } from '../components/styles';

// ICONS
import { AntDesign } from '@expo/vector-icons';

// COLOURS
const { primary, brand } = Colors;

const ConfirmationScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View>
        <AntDesign name='checkcircle' size={40} color={brand} />
      </View>
      <View>
        <Text style={styles.confirmTxt}>Order Confirmed</Text>
      </View>
      <TextLink onPress={() => navigation.navigate('Home')}>
        <TextLinkContent>Go Home</TextLinkContent>
      </TextLink>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: primary,
  },
  confirmTxt: {
    fontWeight: 'bold',
    fontSize: 30,
  },
});

export default ConfirmationScreen;
