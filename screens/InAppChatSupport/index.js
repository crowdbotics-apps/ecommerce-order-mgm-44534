import React from 'react';
import { SafeAreaView, View, Text, Image, TextInput, Button, StyleSheet, ScrollView } from 'react-native';

const ChatScreen = () => {
  const messages = [{
    id: 1,
    role: 'seller',
    text: 'Hello, how can I assist you today?'
  }, {
    id: 2,
    role: 'buyer',
    text: 'I have a question about the product.'
  }, {
    id: 3,
    role: 'seller',
    text: 'Sure, I would be happy to help.'
  }];
  return <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.profileImage} source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} />
        <Text style={styles.headerText}>Chat with Seller</Text>
      </View>
      <ScrollView style={styles.chatContainer}>
        {messages.map(message => <View key={message.id} style={message.role === 'seller' ? styles.sellerMessage : styles.buyerMessage}>
            <Text style={styles.messageText}>{message.text}</Text>
          </View>)}
      </ScrollView>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder="Type your message here..." />
        <Button title="Send" onPress={() => {}} />
      </View>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5'
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#FFF'
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  chatContainer: {
    flex: 1,
    padding: 10
  },
  sellerMessage: {
    alignSelf: 'flex-start',
    backgroundColor: '#FFF',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10
  },
  buyerMessage: {
    alignSelf: 'flex-end',
    backgroundColor: '#0084FF',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10
  },
  messageText: {
    color: '#000'
  },
  inputContainer: {
    flexDirection: 'row',
    padding: 10,
    backgroundColor: '#FFF'
  },
  input: {
    flex: 1,
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 10,
    marginRight: 10,
    padding: 10
  }
});
export default ChatScreen;