import React from 'react';
import { SafeAreaView, View, Text, Image, FlatList, Button, StyleSheet } from 'react-native';
const dummyData = [{
  id: '1',
  customer: 'John Doe',
  product: 'Product 1',
  status: 'Pending'
}, {
  id: '2',
  customer: 'Jane Doe',
  product: 'Product 2',
  status: 'Approved'
}, {
  id: '3',
  customer: 'Bob Smith',
  product: 'Product 3',
  status: 'Denied'
} // Add more dummy data as needed
];

const ReturnRefundScreen = () => {
  const renderItem = ({
    item
  }) => <View style={styles.itemContainer}>
      <Image style={styles.image} source={{
      uri: 'https://tinyurl.com/42evm3m3'
    }} />
      <View style={styles.textContainer}>
        <Text style={styles.text}>{item.customer}</Text>
        <Text style={styles.text}>{item.product}</Text>
        <Text style={styles.text}>{item.status}</Text>
      </View>
      <Button title="Process Refund" onPress={() => {}} />
    </View>;

  return <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Return and Refund Management</Text>
      <FlatList data={dummyData} renderItem={renderItem} keyExtractor={item => item.id} />
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#F5F5F5'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10
  },
  textContainer: {
    flex: 1
  },
  text: {
    fontSize: 16,
    color: '#333'
  }
});
export default ReturnRefundScreen;