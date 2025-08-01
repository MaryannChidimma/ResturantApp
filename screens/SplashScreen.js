import React, { useEffect } from "react";
import { View, ImageBackground, Image, StyleSheet } from "react-native";

function SplashScreen({ navigation }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace("Login");
    }, 3000);
    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/splash-bg-img.png")}
        resizeMode="cover"
        style={styles.image}
      >
        <Image
          source={require("../assets/splash-img.png")}
          style={styles.innerImage}
        />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  innerImage: {
    marginTop: 260,
    width: 400,
    height: 600,

    resizeMode: "contain",
  },
});

export default SplashScreen;
