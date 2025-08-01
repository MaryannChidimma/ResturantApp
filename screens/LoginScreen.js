import React, { useState } from "react";
import { View, Text, StyleSheet, AsyncStorage } from "react-native";
import LogoHeader from "../components/LogoHeader";
import { login } from "../api";
import PrimaryButton from "../components/PrimaryButton";
import FooterLink from "../components/Footer";
import CustomTextInput from "../components/CustomTextInput";

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async () => {
    try {
      const response = await login(email, password);
      const token = response.data.token;
      await AsyncStorage.setItem("authToken", token);
      navigation.replace("Home");
    } catch (err) {
      setError(err.response?.data?.message || "Login failed.");
    }
  };

  return (
    <View style={styles.container}>
      <LogoHeader />
      <Text style={styles.headerText}>Welcome back</Text>
      <Text style={styles.headerText2}>
        Please log in to order your favourite recipe
      </Text>
      <View style={{ padding: 10 }}>
        <CustomTextInput
          value={email}
          onChangeText={setEmail}
          placeholder="Email"
          type="email"
        />
        <CustomTextInput
          value={password}
          onChangeText={setPassword}
          placeholder="Password"
          type="password"
          eyeIconVisible={require("../assets/eyeOpen.png")}
          eyeIconHidden={require("../assets/eyeOpen.png")}
        />
      </View>

      {error ? <Text style={styles.error}>{error}</Text> : null}
      <Text style={styles.forgotPassword}> Forgot password? </Text>
      <PrimaryButton onPress={handleLogin}> Sign in </PrimaryButton>
      <PrimaryButton
        defaultStyle={false}
        icon={require("../assets/google.png")}
      >
        {" "}
        Sign in with Google{" "}
      </PrimaryButton>

      <FooterLink
        prompt="Don't have an account?"
        linkText="Sign up"
        style={styles.footerStyle}
        onPress={() => navigation.navigate("Signup")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, margin: 24, fontFamily: "Poppins" },
  headerText: {
    marginTop: 6,
    fontFamily: "Poppins",
    fontWeight: 600,
    fontSize: 28,
    marginBottom: 20,
  },
  headerText2: {
    fontFamily: "Poppins",
    fontWeight: 400,
    fontSize: 16,
    marginBottom: 30,
    fontWeight: 400,
    lineHeight: 20,
  },

  error: { color: "red", marginBottom: 10 },
  title: { fontSize: 24, marginBottom: 20, textAlign: "center" },
  footerStyle: {
    marginTop: 40,
  },
  forgotPassword: {
    color: "#FF8D23",
    marginBottom: 30,
  },
});
