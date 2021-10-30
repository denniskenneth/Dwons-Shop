import React from 'react';
import { View, Text, SafeAreaView, StyleSheet, Image } from 'react-native';

// COLORS IMPORT
import { Colors } from './../../components/styles';

const { primary, secondary, brand, black, tertiary, darklight } = Colors;

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
      <View style={styles.imgContainer}>
        <Image source={plant.img} style={{ resizeMode: 'contain', flex: 1 }} />
      </View>
      <View style={styles.detailsContainer}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'flex-end',
            marginLeft: 20,
          }}
        >
          <View style={styles.line} />
          <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Best Choice</Text>
        </View>
        <View
          style={{
            marginLeft: 20,
            marginTop: 20,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Text style={{ fontSize: 22, fontWeight: 'bold' }}>{plant.name}</Text>
          <View style={styles.priceTag}>
            <Text style={styles.priceTxt}>${plant.price}</Text>
          </View>
        </View>
        <View style={{ paddingHorizontal: 20, marginTop: 10 }}>
          <Text style={{ fontSize: 20, fontWeight: 'bold' }}>About</Text>
          <Text style={{ color: 'grep' }}>{plant.about}</Text>
        </View>
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
  imgContainer: {
    flex: 0.45,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  detailsContainer: {
    flex: 0.55,
    backgroundColor: secondary,
    marginHorizontal: 7,
    borderRadius: 20,
    marginTop: 30,
    paddingTop: 30,
  },
  line: {
    width: 25,
    height: 2,
    backgroundColor: darklight,
    marginBottom: 5,
    marginRight: 3,
  },
  priceTag: {
    backgroundColor: brand,
    width: 80,
    height: 40,
    borderTopLeftRadius: 25,
    borderBottomLeftRadius: 25,
    justifyContent: 'center',
  },
  priceTxt: {
    marginLeft: 15,
    color: primary,
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default ProductDetail;
