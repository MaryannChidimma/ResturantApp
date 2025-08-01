import { View, Text, StyleSheet } from "react-native";
import { signup } from "../api";
import React, { useState } from "react";
import PrimaryButton from "../components/PrimaryButton";
import FooterLink from "../components/Footer";
import LogoHeader from "../components/LogoHeader";
import CustomTextInput from "../components/CustomTextInput";
import { isValidPhoneNumber, isValidEmail } from "../utils/validation";

export default function SignupScreen({ navigation }) {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState("");

  const handleSignup = async () => {
    try {
      const response = await signup(email, password);
      console.log(response.data);
      navigation.replace("Login");
    } catch (err) {
      setError(err.response?.data?.message || "Signup failed.");
    }
  };

  return (
    <View style={styles.container}>
      <LogoHeader />
      <Text style={styles.headerText}>Create your account</Text>
      <Text style={styles.headerText2}>
        Please sign up to order your favourite recipe
      </Text>
      <View style={styles.input}>
        <CustomTextInput
          placeholder="FullName"
          value={fullName}
          onChangeText={setFullName}
        />
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
        <CustomTextInput
          value={phone}
          onChangeText={(text) => {
            setPhone(text);
            if (text.length > 9 && !isValidPhoneNumber(text)) {
              Alert.alert("Invalid phone number");
            }
          }}
          placeholder="Phone number"
          type="phone"
        />
      </View>

      {error ? <Text style={styles.error}>{error}</Text> : null}
      <PrimaryButton onPress={handleSignup}> Sign up </PrimaryButton>
      <PrimaryButton
        defaultStyle={false}
        textStyles={styles.button}
        onPress={handleSignup}
        icon={require("../assets/google.png")}
      >
        {" "}
        Sign up with Google
      </PrimaryButton>
      <FooterLink
        prompt="Already have an account?"
        linkText="Login"
        onPress={() => navigation.navigate("Login")}
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
  input: {
   padding: 10,
  },
  error: { color: "red", marginBottom: 10 },
  title: { fontSize: 24, marginBottom: 20, textAlign: "center" },
  footerStyle: {
    marginTop: 40,
  },
});
