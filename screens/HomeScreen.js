import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Image,
  FlatList,
  TextInput,
} from 'react-native';
import ProductCard from './../components/ProductCard';
import plants from '../data/plants';

import { Colors } from '../components/styles';

const { primary, secondary, brand, darklight, tertiary, green } = Colors;

// ICONS IMPORT
import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.headerSafeArea}>
      <View style={styles.header}>
        <View>
          <Text style={styles.welcomeTxt}>Welcome to</Text>
          <Text style={styles.shopTxt}>Dwon's Shop</Text>
        </View>
        <FontAwesome name='shopping-cart' size={24} color='black' />
      </View>
      <View
        style={{ marginTop: 30, flexDirection: 'row', paddingVertical: 10 }}
      >
        <View style={styles.searchContainer}>
          <FontAwesome
            name='search'
            size={25}
            style={{ marginLeft: 20 }}
            color='black'
          />
          <TextInput
            placeholder='Search'
            style={styles.searchInput}
          ></TextInput>
        </View>
        <View style={styles.sortBtn}>
          <MaterialIcons name='sort' size={24} color={primary} />
        </View>
      </View>
      {/* <ProductCard /> */}
      <FlatList
        numColumns={2}
        data={plants}
        renderItem={({ item }) => <ProductCard plant={item} />}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  headerSafeArea: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: primary,
  },
  header: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 5,
  },
  welcomeTxt: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  shopTxt: {
    fontSize: 38,
    fontWeight: 'bold',
    color: brand,
  },
  searchContainer: {
    height: 50,
    backgroundColor: secondary,
    borderRadius: 10,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchInput: {
    fontSize: 18,
    fontWeight: 'bold',
    color: tertiary,
    flex: 1,
  },
  sortBtn: {
    marginLeft: 10,
    height: 50,
    width: 50,
    backgroundColor: brand,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
});

export default HomeScreen;
