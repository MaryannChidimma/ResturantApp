import { Text, StyleSheet, View } from "react-native";

export default function FooterLink({ prompt, linkText, onPress, style }) {
  return (
    <View style={[styles.container, style]}>
      <Text style={styles.text}>
        {prompt}{" "}
        <Text style={styles.link} onPress={onPress}>
          {linkText}
        </Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    paddingVertical: 20,
  },
  text: {
    fontSize: 16,
    fontFamily: "Poppins",
    fontWeight: 400,
    lineHeight:24,
  },

  link: {
    color: "#FF8D23",
    lineHeight:24,
  },
});
