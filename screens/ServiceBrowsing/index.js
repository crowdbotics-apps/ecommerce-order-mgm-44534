import React from 'react';
import { SafeAreaView, View, Text, Image, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
const dummyData = [{
  id: '1',
  title: 'Product 1',
  price: '$100',
  rating: '4.5'
}, {
  id: '2',
  title: 'Product 2',
  price: '$200',
  rating: '4.0'
}, {
  id: '3',
  title: 'Product 3',
  price: '$300',
  rating: '4.8'
}, {
  id: '4',
  title: 'Product 4',
  price: '$400',
  rating: '4.2'
}];

const ProductScreen = () => {
  return <SafeAreaView style={styles.container}>
      <FlatList data={dummyData} keyExtractor={item => item.id} renderItem={({
      item
    }) => <TouchableOpacity style={styles.card}>
            <Image style={styles.image} source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} />
            <View style={styles.infoContainer}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.price}>{item.price}</Text>
              <Text style={styles.rating}>Rating: {item.rating}</Text>
            </View>
          </TouchableOpacity>} />
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5'
  },
  card: {
    flex: 1,
    flexDirection: 'row',
    margin: 10,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10
  },
  infoContainer: {
    flex: 1,
    padding: 10
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  price: {
    fontSize: 16,
    color: '#888',
    marginTop: 5
  },
  rating: {
    fontSize: 14,
    color: '#888',
    marginTop: 5
  }
});
export default ProductScreen;