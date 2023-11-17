import { StyleSheet } from "react-native";
import React, { useState } from 'react';
import { SafeAreaView, View, Text, Image, FlatList, Button, TextInput, ScrollView } from 'react-native';

const ShoppingCartScreen = () => {
  const [customerInfo, setCustomerInfo] = useState({
    name: '',
    address: '',
    email: ''
  });
  const [shippingMethod, setShippingMethod] = useState('Standard');
  const [paymentMethod, setPaymentMethod] = useState('Credit Card');
  const dummyData = [{
    id: '1',
    title: 'Product 1',
    price: 10,
    quantity: 1
  }, {
    id: '2',
    title: 'Product 2',
    price: 20,
    quantity: 2
  }, {
    id: '3',
    title: 'Product 3',
    price: 30,
    quantity: 3
  }];
  const totalCost = dummyData.reduce((total, item) => total + item.price * item.quantity, 0);
  return <SafeAreaView style={_styles.MrKaFwUe}>
      <ScrollView>
        <FlatList data={dummyData} keyExtractor={item => item.id} renderItem={({
        item
      }) => <View style={_styles.VLcSbGgd}>
              <Image source={{
          uri: 'https://tinyurl.com/42evm3m3'
        }} style={_styles.KZzEFmKE} />
              <Text>{item.title}</Text>
              <Text>{item.quantity} x ${item.price}</Text>
            </View>} />
        <Text style={_styles.fWTHYsBx}>Total: ${totalCost}</Text>
        <View style={_styles.OVGscPQr}>
          <Text style={_styles.qbXWcHYK}>Customer Information</Text>
          <TextInput placeholder="Name" value={customerInfo.name} onChangeText={text => setCustomerInfo({ ...customerInfo,
          name: text
        })} style={_styles.FpJSVXkt} />
          <TextInput placeholder="Address" value={customerInfo.address} onChangeText={text => setCustomerInfo({ ...customerInfo,
          address: text
        })} style={_styles.waGYuBct} />
          <TextInput placeholder="Email" value={customerInfo.email} onChangeText={text => setCustomerInfo({ ...customerInfo,
          email: text
        })} style={_styles.nVWjnWaB} />
        </View>
        <View style={_styles.mQUmrADE}>
          <Text style={_styles.chgkNVGq}>Shipping Method</Text>
          <Button title="Standard" onPress={() => setShippingMethod('Standard')} />
          <Button title="Express" onPress={() => setShippingMethod('Express')} />
        </View>
        <View style={_styles.wzXUNBkt}>
          <Text style={_styles.wJANeXgT}>Payment Method</Text>
          <Button title="Credit Card" onPress={() => setPaymentMethod('Credit Card')} />
          <Button title="PayPal" onPress={() => setPaymentMethod('PayPal')} />
        </View>
        <Button title="Checkout" onPress={() => alert('Checkout Processed')} />
      </ScrollView>
    </SafeAreaView>;
};

export default ShoppingCartScreen;

const _styles = StyleSheet.create({
  MrKaFwUe: {
    flex: 1,
    backgroundColor: "#fff"
  },
  VLcSbGgd: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10
  },
  KZzEFmKE: {
    width: 50,
    height: 50
  },
  fWTHYsBx: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "right",
    padding: 10
  },
  OVGscPQr: {
    padding: 10
  },
  qbXWcHYK: {
    fontSize: 20,
    fontWeight: "bold"
  },
  FpJSVXkt: {
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 10,
    marginVertical: 10
  },
  waGYuBct: {
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 10,
    marginVertical: 10
  },
  nVWjnWaB: {
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 10,
    marginVertical: 10
  },
  mQUmrADE: {
    padding: 10
  },
  chgkNVGq: {
    fontSize: 20,
    fontWeight: "bold"
  },
  wzXUNBkt: {
    padding: 10
  },
  wJANeXgT: {
    fontSize: 20,
    fontWeight: "bold"
  }
});