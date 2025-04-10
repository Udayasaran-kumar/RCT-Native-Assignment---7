import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MessagesScreen = () => (
  <View style={styles.container}>
    <Text style={styles.heading}>Home Screen</Text>
  </View>
);

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  heading: { fontSize: 24, fontWeight: 'bold' },
});

export default MessagesScreen;
