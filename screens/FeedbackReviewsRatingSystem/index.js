import React from 'react';
import { SafeAreaView, View, Text, Image, FlatList, StyleSheet } from 'react-native';
const data = [{
  id: '1',
  user: 'User 1',
  review: 'Great product!',
  rating: 5
}, {
  id: '2',
  user: 'User 2',
  review: 'Not as expected.',
  rating: 2
} // Add more reviews as needed
];

const ReviewScreen = () => {
  return <SafeAreaView style={styles.container}>
      <FlatList data={data} keyExtractor={item => item.id} renderItem={({
      item
    }) => <View style={styles.reviewCard}>
            <Image style={styles.userImage} source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} />
            <View style={styles.reviewContent}>
              <Text style={styles.userName}>{item.user}</Text>
              <Text style={styles.userReview}>{item.review}</Text>
              <Text style={styles.userRating}>Rating: {item.rating}/5</Text>
            </View>
          </View>} />
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5'
  },
  reviewCard: {
    flexDirection: 'row',
    margin: 10,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 10
  },
  userImage: {
    width: 50,
    height: 50,
    borderRadius: 25
  },
  reviewContent: {
    marginLeft: 10
  },
  userName: {
    fontWeight: 'bold',
    fontSize: 16
  },
  userReview: {
    marginTop: 5,
    fontSize: 14
  },
  userRating: {
    marginTop: 5,
    fontWeight: 'bold',
    color: '#FFA500'
  }
});
export default ReviewScreen;