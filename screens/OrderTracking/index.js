import React, { useState } from 'react';
import { SafeAreaView, View, Text, Image, FlatList, StyleSheet } from 'react-native';

const OrderTrackingScreen = () => {
  const [orders, setOrders] = useState([{
    id: '1',
    status: 'Placed',
    time: '10:00 AM'
  }, {
    id: '2',
    status: 'Packing',
    time: '10:30 AM'
  }, {
    id: '3',
    status: 'Shipped',
    time: '11:00 AM'
  }, {
    id: '4',
    status: 'Delivered',
    time: '12:00 PM'
  }]);
  return <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Order Tracking</Text>
        <Image style={styles.image} source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} />
      </View>
      <FlatList data={orders} keyExtractor={item => item.id} renderItem={({
      item
    }) => <View style={styles.orderItem}>
            <Text style={styles.orderStatus}>{item.status}</Text>
            <Text style={styles.orderTime}>{item.time}</Text>
          </View>} />
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5'
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#FFFFFF'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  image: {
    width: 50,
    height: 50
  },
  orderItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#DDDDDD',
    backgroundColor: '#FFFFFF'
  },
  orderStatus: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  orderTime: {
    fontSize: 16,
    color: '#888888'
  }
});
export default OrderTrackingScreen;