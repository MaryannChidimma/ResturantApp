import { View, Text, ImageBackground, StyleSheet } from "react-native";

const MenuItem = ({ title, description, imageUrl, price, rating }) => (
  <ImageBackground
    source={{ uri: imageUrl }}
    style={styles.card}
    imageStyle={styles.image}
  >
    <View style={styles.overlay}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.desc}>{description}</Text>
      <View style={styles.footer}>
        <Text style={styles.price}>{price}</Text>
        <Text style={styles.rating}>★ {rating}</Text>
      </View>
    </View>
  </ImageBackground>
);

const styles = StyleSheet.create({
  card: {
    width: 180,
    height: 200,
    marginRight: 12,
    borderRadius: 12,
    overflow: "hidden",
  },
  image: {
    borderRadius: 12,
  },
  overlay: {
    flex: 1,
    justifyContent: "flex-end",
    padding: 10,
    backgroundColor: "rgba(0,0,0,0.3)",
  },
  title: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 15,
  },
  desc: {
    color: "#fff",
    fontSize: 12,
    marginBottom: 5,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  price: {
    color: "#fff",
    fontWeight: "600",
  },
  rating: {
    color: "#fff",
  },
});

export default MenuItem;
