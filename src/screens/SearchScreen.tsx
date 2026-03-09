import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

export default function SearchScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>🔎 Search</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});
