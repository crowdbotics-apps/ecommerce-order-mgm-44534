import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, Image, TextInput, Button, Alert } from 'react-native';

const SecurePaymentScreen = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');

  const handlePayment = () => {
    Alert.alert('Payment Successful', 'Your transaction has been processed successfully.');
  };

  return <SafeAreaView style={styles.container}>
      <Image style={styles.image} source={{
      uri: 'https://tinyurl.com/42evm3m3'
    }} />
      <Text style={styles.title}>Secure Payment Processing</Text>
      <TextInput style={styles.input} onChangeText={setCardNumber} value={cardNumber} placeholder="Card Number" keyboardType="numeric" />
      <TextInput style={styles.input} onChangeText={setExpiryDate} value={expiryDate} placeholder="Expiry Date" keyboardType="numeric" />
      <TextInput style={styles.input} onChangeText={setCvv} value={cvv} placeholder="CVV" keyboardType="numeric" secureTextEntry />
      <Button title="Confirm Payment" onPress={handlePayment} />
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F5F5F5'
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingLeft: 10
  }
});
export default SecurePaymentScreen;