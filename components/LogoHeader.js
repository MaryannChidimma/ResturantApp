import { View, Image, StyleSheet } from 'react-native';

export default function LogoHeader() {
  return (
    <View style={styles.logoContainer}>
      <Image source={require('../assets/logo.png')} style={styles.logo} />
    </View>
  );
}

const styles = StyleSheet.create({
  logoContainer: {
  marginTop: 24,
  },

  logo: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },
});
