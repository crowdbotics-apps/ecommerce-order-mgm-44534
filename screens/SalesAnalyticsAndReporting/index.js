import React from 'react';
import { SafeAreaView, View, Text, Image, StyleSheet, ScrollView } from 'react-native';

const SalesAnalyticsScreen = () => {
  const dummyData = {
    totalSales: 5000,
    averageOrderValue: 100,
    customerAcquisitionCost: 20,
    conversionRate: 2
  };
  return <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.card}>
          <Text style={styles.title}>Total Sales</Text>
          <Text style={styles.value}>{dummyData.totalSales}</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.title}>Average Order Value</Text>
          <Text style={styles.value}>{dummyData.averageOrderValue}</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.title}>Customer Acquisition Cost</Text>
          <Text style={styles.value}>{dummyData.customerAcquisitionCost}</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.title}>Conversion Rate</Text>
          <Text style={styles.value}>{dummyData.conversionRate}%</Text>
        </View>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={{
          uri: 'https://tinyurl.com/42evm3m3'
        }} />
        </View>
      </ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5'
  },
  card: {
    backgroundColor: '#FFFFFF',
    margin: 10,
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333333'
  },
  value: {
    fontSize: 16,
    color: '#666666',
    marginTop: 10
  },
  imageContainer: {
    margin: 10
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10
  }
});
export default SalesAnalyticsScreen;