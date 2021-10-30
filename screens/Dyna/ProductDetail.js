import React from 'react';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';

// COLORS IMPORT
import { Colors } from './../../components/styles';

const { primary, secondary, brand, black } = Colors;

// ICONS IMPORT
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

const ProductDetail = ({ navigation, route }) => {
  const plant = route.params;
  console.log(plant);
  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <View style={styles.header}>
        <Ionicons
          name='arrow-back'
          size={28}
          color='black'
          onPress={() => navigation.goBack()}
        />
        <FontAwesome name='shopping-cart' size={28} color='black' />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
    backgroundColor: primary,
  },
  header: {
    paddingHorizontal: 20,
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default ProductDetail;
