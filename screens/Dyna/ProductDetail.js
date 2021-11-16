import React, { useState } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
  Animated,
  Easing,
} from 'react-native';

// COLORS IMPORT
import { Colors } from './../../components/styles';

const { primary, secondary, brand, black, tertiary, darklight } = Colors;

// ICONS IMPORT
import { FontAwesome, Ionicons } from '@expo/vector-icons';

const screenHeight = Dimensions.get('window').height;

const ProductDetail = ({ navigation, route }) => {
  const [amount, setAmount] = useState(1);

  let heightValue = new Animated.Value(0);

  Animated.timing(heightValue, {
    toValue: 1,
    duration: 1000,
    delay: 100,
    easing: Easing.ease,
    useNativeDriver: true,
  }).start();

  const height = heightValue.interpolate({
    inputRange: [1, 2],
    outputRange: [0, -50],
  });

  const plant = route.params;

  const handleAdd = () => {
    setAmount(amount + 1)
  }

  const handleMinus = () => {
    if (amount > 1) {
      setAmount(amount - 1)
    }
  }

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
        <Image
          source={plant.img}
          style={{ resizeMode: 'contain', height: 350, width: 350 }}
        />
      </View>
      <View style={{ marginTop: 10 }}>
        <Animated.View
          style={{
            backgroundColor: 'gold',
            width: 180,
            height: 25,
            alignItems: 'center',
            justifyContent: 'center',
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
            flexDirection: 'row',
            marginLeft: 50,
            transform: [
              {
                translateY: height,
              },
            ],
          }}
        >
          <FontAwesome
            name='star'
            size={14}
            color='black'
            style={{
              marginRight: 5,
            }}
          />
          <FontAwesome
            name='star'
            size={14}
            color='black'
            style={{
              marginRight: 5,
            }}
          />
          <FontAwesome name='star' size={14} color='black' />
          <Text style={{ fontSize: 16, fontWeight: '500', marginLeft: 10 }}>
            Best Choice
          </Text>
        </Animated.View>
        <View style={styles.detailsContainer}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <Text style={{ fontSize: 24, fontWeight: 'bold' }}>
              {plant.name}
            </Text>
            <View style={styles.priceTag}>
              <Text style={styles.priceTxt}>${plant.price}</Text>
            </View>
          </View>
          <View style={{ marginTop: 15 }}>
            <Text style={{ fontSize: 20, fontWeight: '600', color: darklight }}>
              About
            </Text>
            <Text
              style={{
                color: '#404040',
                fontSize: 18,
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
                <TouchableOpacity style={styles.borderBtn} onPress={handleMinus}>
                  <FontAwesome name='minus' size={20} color='black' />
                </TouchableOpacity>
                <Text
                  style={{
                    fontSize: 20,
                    marginHorizontal: 20,
                    fontWeight: 'bold',
                  }}
                >
                  {amount}
                </Text>
                <TouchableOpacity style={styles.borderBtn} onPress={handleAdd}>
                  <FontAwesome name='plus' size={20} color='black' />
                </TouchableOpacity>
              </View>
              <TouchableOpacity style={styles.buyBtn}>
                <Text
                  style={{ color: primary, fontSize: 18, fontWeight: 'bold' }}
                >
                  Add to cart
                </Text>
              </TouchableOpacity>
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
  },
  header: {
    paddingHorizontal: 20,
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  imgContainer: {
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  detailsContainer: {
    backgroundColor: secondary,
    margin: 20,
    marginTop: 0,
    padding: 20,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.4,
    shadowRadius: 3.84,
    elevation: 5,
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
    height: 30,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  priceTxt: {
    color: primary,
    fontWeight: 'bold',
    fontSize: 16,
  },
  borderBtn: {
    borderColor: '#404040',
    borderRadius: 10,
    borderWidth: 1,
    height: 50,
    width: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buyBtn: {
    width: 150,
    height: 50,
    backgroundColor: brand,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
});

export default ProductDetail;
