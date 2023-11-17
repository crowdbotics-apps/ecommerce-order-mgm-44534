import React from 'react';
import { SafeAreaView, StyleSheet, View, Text, Image, FlatList } from 'react-native';
const paymentOptions = [{
  id: '1',
  name: 'Stripe',
  image: 'https://tinyurl.com/42evm3m3'
}, {
  id: '2',
  name: 'PayPal',
  image: 'https://tinyurl.com/42evm3m3'
}];

const PaymentOption = ({
  name,
  image
}) => <View style={styles.paymentOption}>
    <Image source={{
    uri: image
  }} style={styles.paymentImage} />
    <Text style={styles.paymentName}>{name}</Text>
  </View>;

const SecureTransactionsScreen = () => <SafeAreaView style={styles.container}>
    <Text style={styles.title}>Secure Transactions with Multiple Payment Options</Text>
    <FlatList data={paymentOptions} renderItem={({
    item
  }) => <PaymentOption {...item} />} keyExtractor={item => item.id} contentContainerStyle={styles.paymentList} />
  </SafeAreaView>;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20
  },
  paymentList: {
    paddingHorizontal: 20
  },
  paymentOption: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF',
    padding: 20,
    marginBottom: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 3
  },
  paymentImage: {
    width: 50,
    height: 50,
    marginRight: 20
  },
  paymentName: {
    fontSize: 18,
    color: '#333'
  }
});
export default SecureTransactionsScreen;