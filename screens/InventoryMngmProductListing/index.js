import React, { useState } from 'react';
import { SafeAreaView, View, Text, TextInput, Button, Image, FlatList, StyleSheet } from 'react-native';

const InventoryScreen = () => {
  const [products, setProducts] = useState([{
    id: '1',
    name: 'Product 1',
    price: '10',
    description: 'This is product 1',
    image: 'https://tinyurl.com/42evm3m3'
  }, {
    id: '2',
    name: 'Product 2',
    price: '20',
    description: 'This is product 2',
    image: 'https://tinyurl.com/42evm3m3'
  }]);

  const renderItem = ({
    item
  }) => <View style={styles.item}>
      <Image source={{
      uri: item.image
    }} style={styles.image} />
      <Text style={styles.title}>{item.name}</Text>
      <Text style={styles.price}>{item.price}</Text>
      <Text style={styles.description}>{item.description}</Text>
      <Button title="Edit" onPress={() => {}} />
      <Button title="Delete" onPress={() => {}} />
    </View>;

  return <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Inventory Management</Text>
      <FlatList data={products} renderItem={renderItem} keyExtractor={item => item.id} />
      <View style={styles.inputContainer}>
        <TextInput placeholder="Product Name" style={styles.input} />
        <TextInput placeholder="Price" style={styles.input} />
        <TextInput placeholder="Description" style={styles.input} />
        <Button title="Add Product" onPress={() => {}} />
      </View>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5'
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20
  },
  item: {
    backgroundColor: '#fff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 10
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  price: {
    fontSize: 16,
    color: '#888'
  },
  description: {
    fontSize: 14,
    color: '#666'
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 10
  },
  inputContainer: {
    padding: 20
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10
  }
});
export default InventoryScreen;