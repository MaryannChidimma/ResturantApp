import { View, Text, Pressable, StyleSheet, Image } from "react-native";

export default function PrimaryButton({
  children,
  onPress,
  icon,
  defaultStyle = true,
}) {

  return (
    <Pressable onPress={onPress}>
      <View
        style={
          defaultStyle
            ? styles.buttonContainer
            : [styles.buttonContainer, styles.buttonContainer2]
        }
      >
        <Text
          style={
            defaultStyle
              ? styles.buttonText
              : [styles.buttonText, styles.buttonText2]
          }
        >
          {children}
        </Text>
        {icon ? <Image source={icon} style={styles.icon} /> : null}
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: "#FF8D23",
    flexDirection: "row",
    borderRadius: 25,
    width: 326,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
    marginBottom: 20,
  },

  buttonContainer2: {
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "#FF8D23",
  },

  buttonText: {
    font: "Poppins-Bold",
    weight: 400,
    fontSize: 14,
    color: "#FFFFFF",
    textAlign: "center",
  },
  buttonText2: {
    color: "black",
  },
  icon: {
    width: 20,
    height: 20,
    marginLeft: 42,
    resizeMode: "contain",
  },
});
