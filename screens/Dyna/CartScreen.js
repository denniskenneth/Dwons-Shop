import React from 'react';
import { View, SafeAreaView, StyleSheet, Text, FlatList } from 'react-native';

// IMPORT COLORS
import { Colors } from './../../components/styles';

const { primary, brand, darklight, secondary } = Colors;

// ICONS IMPORT
import { FontAwesome, Ionicons } from '@expo/vector-icons';

// IMPORT COMPONENTS
import CartCard from '../../components/CartCard';
import { StyledBtn } from '../../components/styles';
import plants from './../../data/plants';

const CartScreen = ({ navigation }) => {

  return (
    <SafeAreaView style={{ backgroundColor: primary, flex: 1 }}>
      <View style={{ paddingHorizontal: 20, flex: 1 }}>
        <View style={{ flex: 2 }}>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={plants}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => <CartCard item={item} />}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginVertical: 15,
          }}
        >
          <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
            Total Price
          </Text>
          <Text style={{ fontSize: 18, fontWeight: 'bold' }}>$50</Text>
        </View>
        <View style={{ marginHorizontal: 30 }}>
          <StyledBtn onPress={() => navigation.navigate('Checkout')}>
            <Text
              style={{ color: primary, fontSize: 18, fontWeight: 'bold' }}
            >
              CHECKOUT
            </Text>
          </StyledBtn>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cartCard: {
    height: 100,
    elevation: 10,
    shadowOffset: {
      width: 10,
      height: 10,
    },
    shadowColor: 'black',
    borderRadius: 10,
    backgroundColor: secondary,
    marginVertical: 10,
    marginHorizontal: 20,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default CartScreen;
