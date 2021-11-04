import React from 'react';
import { View, SafeAreaView, StyleSheet, Text, Image } from 'react-native';
// IMPORT COLORS
import { Colors } from './styles';

const { primary, brand, darklight, secondary } = Colors;

// ICONS IMPORT
import { AntDesign } from '@expo/vector-icons';

const CartCard = ({ item }) => {
  return (
    <View style={styles.cartCard}>
      <Image source={item.img} style={{ height: 80, width: 80 }} />
      <View>
        <Text style={{ fontWeight: '700', fontSize: 17 }}>{item.name}</Text>
        <Text style={{ fontSize: 14, color: darklight, marginVertical: 5 }}>50 x 20 cm</Text>
        <Text style={{ fontSize: 17, fontWeight: '600' }}>${item.price}</Text>
      </View>
      <View style={{ alignItems: 'center' }}>
        <Text style={{ fontWeight: 'bold', fontSize: 18 }}>3</Text>
        <View style={styles.actionBtn}>
          <AntDesign name='minus' size={24} color='white' />
          <AntDesign name='plus' size={24} color='white' />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cartCard: {
    borderRadius: 10,
    backgroundColor: secondary,
    marginVertical: 15,
    marginHorizontal: 20,
    paddingHorizontal: 20,
    paddingVertical: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.4,
    shadowRadius: 3.84,
    elevation: 5,
  },
  actionBtn: {
    width: 80,
    height: 30,
    backgroundColor: brand,
    borderRadius: 20,
    paddingHorizontal: 10,
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default CartCard;
