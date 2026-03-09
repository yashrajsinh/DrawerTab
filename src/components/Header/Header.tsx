import { View, Text, Image, StyleSheet } from 'react-native';
import React from 'react';

const Header = () => {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a0a7586b-3d38-4293-9d13-75e10782ff57/dgvmsg8-5606c4fa-ebbd-4d60-9a6a-0fb1dd864167.png/v1/fit/w_816,h_770,q_70,strp/gentleman_cillian_murphy_png_image_by_ongpng_dgvmsg8-414w-2x.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzcwIiwicGF0aCI6Ii9mL2EwYTc1ODZiLTNkMzgtNDI5My05ZDEzLTc1ZTEwNzgyZmY1Ny9kZ3Ztc2c4LTU2MDZjNGZhLWViYmQtNGQ2MC05YTZhLTBmYjFkZDg2NDE2Ny5wbmciLCJ3aWR0aCI6Ijw9ODE2In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.CGzX1KwSi_VzPXpqJtZuAqKX0p2XJw8mtKvf_8mYXo8',
        }}
        style={styles.avatar}
      />

      <Text style={styles.greeting}>Good morning, Mr. Shelby</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#8494FF',
    alignItems: 'center',
    borderRadius: 20,
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
