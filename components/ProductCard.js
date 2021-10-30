import React from 'react';

import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

// COLORS IMPORT
import { Colors } from './styles';

const { primary, secondary, brand } = Colors;

// WIDTH OF SCREEEN
const width = Dimensions.get('screen').width / 2 - 30;

const ProductCard = ({ item }) => {
  return <View style={styles.cardContainer}></View>;
};

const styles = StyleSheet.create({
  cardContainer: {
    height: 225,
    backgroundColor: secondary,
    width,
    marginHorizontal: 2,
    borderRadius: 10,
    marginBottom: 20,
    padding: 15,
  },
});

export default ProductCard;
