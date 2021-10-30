import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  Dimensions,
} from 'react-native';

// COLORS IMPORT
import { Colors } from './../../components/styles';

const { primary, secondary, brand, black, tertiary, darklight } = Colors;

// ICONS IMPORT
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

const screenHeight = Dimensions.get('window').height;

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
        <FontAwesome
          name='shopping-cart'
          size={28}
          color='black'
          onPress={() => navigation.navigate('Cart')}
        />
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
          <Text
            style={{
              color: '#404040',
              fontSize: 16,
              lineHeight: 22,
              marginTop: 10,
            }}
          >
            {plant.about}
          </Text>
          <View
            style={{
              marginTop: 20,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}
          >
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <View style={styles.borderBtn}>
                <Text style={styles.borderBtnTxt}>-</Text>
              </View>
              <Text
                style={{
                  fontSize: 20,
                  marginHorizontal: 10,
                  fontWeight: 'bold',
                }}
              >
                1
              </Text>
              <View style={styles.borderBtn}>
                <Text style={styles.borderBtnTxt}>+</Text>
              </View>
            </View>
            <View style={styles.buyBtn}>
              <Text
                style={{ color: primary, fontSize: 18, fontWeight: 'bold' }}
              >
                Buy
              </Text>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
    backgroundColor: primary,
    // height: screenHeight,
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
  borderBtn: {
    borderColor: '#404040',
    borderRadius: 5,
    borderWidth: 1,
    height: 40,
    width: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  borderBtnTxt: {
    fontWeight: 'bold',
    fontSize: 28,
  },
  buyBtn: {
    width: 150,
    height: 50,
    backgroundColor: brand,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
  },
});

export default ProductDetail;
