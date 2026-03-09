import { View, Text, Image, StyleSheet } from 'react-native';
import React from 'react';

const Header = () => {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://i.pravatar.cc/150?img=12' }}
        style={styles.avatar}
      />

      <Text style={styles.greeting}>Good morning, John</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#4F46E5',
    alignItems: 'center',
  },

  avatar: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginBottom: 10,
  },

  greeting: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
