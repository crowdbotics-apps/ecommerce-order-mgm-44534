import React from 'react';
import { SafeAreaView, View, Text, Image, FlatList, StyleSheet } from 'react-native';

const OrderDashboard = () => {
  const orders = [{
    id: '1',
    orderNumber: '12345',
    customerName: 'John Doe',
    productDetails: 'Product 1',
    paymentStatus: 'Paid',
    shippingStatus: 'Shipped'
  }, {
    id: '2',
    orderNumber: '12346',
    customerName: 'Jane Doe',
    productDetails: 'Product 2',
    paymentStatus: 'Pending',
    shippingStatus: 'Not Shipped'
  } // Add more orders as needed
  ];
  return <SafeAreaView style={styles.container}>
      <Image style={styles.image} source={{
      uri: 'https://tinyurl.com/42evm3m3'
    }} />
      <FlatList data={orders} keyExtractor={item => item.id} renderItem={({
      item
    }) => <View style={styles.orderItem}>
            <Text style={styles.orderText}>Order Number: {item.orderNumber}</Text>
            <Text style={styles.orderText}>Customer Name: {item.customerName}</Text>
            <Text style={styles.orderText}>Product Details: {item.productDetails}</Text>
            <Text style={styles.orderText}>Payment Status: {item.paymentStatus}</Text>
            <Text style={styles.orderText}>Shipping Status: {item.shippingStatus}</Text>
          </View>} />
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f5f5f5'
  },
  image: {
    width: '100%',
    height: 200,
    marginBottom: 20
  },
  orderItem: {
    backgroundColor: '#fff',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.3,
    shadowRadius: 1,
    elevation: 3
  },
  orderText: {
    fontSize: 16,
    marginBottom: 5
  }
});
export default OrderDashboard;