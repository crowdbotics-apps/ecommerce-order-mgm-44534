import React from 'react';
import { SafeAreaView, View, Text, Image, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
const dummyData = [{
  id: '1',
  status: 'Processing',
  customer: 'John Doe'
}, {
  id: '2',
  status: 'Shipped',
  customer: 'Jane Doe'
}, {
  id: '3',
  status: 'Delivered',
  customer: 'Jim Doe'
} // Add more dummy data as needed
];

const OrderScreen = () => {
  const renderItem = ({
    item
  }) => <View style={styles.itemContainer}>
      <Image style={styles.image} source={{
      uri: 'https://tinyurl.com/42evm3m3'
    }} />
      <View style={styles.textContainer}>
        <Text style={styles.text}>Order ID: {item.id}</Text>
        <Text style={styles.text}>Customer: {item.customer}</Text>
        <Text style={styles.text}>Status: {item.status}</Text>
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Update Status</Text>
      </TouchableOpacity>
    </View>;

  return <SafeAreaView style={styles.container}>
      <FlatList data={dummyData} renderItem={renderItem} keyExtractor={item => item.id} />
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5'
  },
  itemContainer: {
    flexDirection: 'row',
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
    backgroundColor: '#fff',
    borderRadius: 10,
    alignItems: 'center'
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25
  },
  textContainer: {
    flex: 1,
    marginLeft: 10
  },
  text: {
    fontSize: 16
  },
  button: {
    padding: 10,
    backgroundColor: '#4CAF50',
    borderRadius: 5
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold'
  }
});
export default OrderScreen;