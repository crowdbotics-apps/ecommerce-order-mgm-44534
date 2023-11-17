import React from 'react';
import { SafeAreaView, View, Text, Image, StyleSheet, FlatList } from 'react-native';
const dummyData = [{
  id: '1',
  title: 'Automatic Order Routing',
  description: 'Automatically route orders to the appropriate fulfillment center.'
}, {
  id: '2',
  title: 'Real-time Inventory Updates',
  description: 'Get real-time updates on your inventory levels.'
}, {
  id: '3',
  title: 'Streamlined Shipping and Handling',
  description: 'Simplify your shipping and handling processes.'
}];

const Feature = ({
  title,
  description
}) => <View style={styles.featureContainer}>
    <Image style={styles.featureImage} source={{
    uri: 'https://tinyurl.com/42evm3m3'
  }} />
    <View style={styles.featureTextContainer}>
      <Text style={styles.featureTitle}>{title}</Text>
      <Text style={styles.featureDescription}>{description}</Text>
    </View>
  </View>;

const FulfillmentCenterIntegrationScreen = () => <SafeAreaView style={styles.container}>
    <Text style={styles.title}>Fulfillment Center Integration</Text>
    <FlatList data={dummyData} keyExtractor={item => item.id} renderItem={({
    item
  }) => <Feature title={item.title} description={item.description} />} />
  </SafeAreaView>;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F5F5F5'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20
  },
  featureContainer: {
    flexDirection: 'row',
    marginBottom: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    overflow: 'hidden'
  },
  featureImage: {
    width: 100,
    height: 100
  },
  featureTextContainer: {
    flex: 1,
    padding: 10
  },
  featureTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333'
  },
  featureDescription: {
    fontSize: 14,
    color: '#666'
  }
});
export default FulfillmentCenterIntegrationScreen;