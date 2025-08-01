import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";

const categories = [
  { id: "1", name: "Breakfast", icon: require("../assets/breakfast.png") },
  { id: "2", name: "Lunch", icon: require("../assets/lunch.png") },
  { id: "3", name: "Dinner", icon: require("../assets/dinner.png") },
];

const CategoryList = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Categories</Text>
      <FlatList
        data={categories}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style= {styles.itemContainer}>
          <TouchableOpacity style={styles.button}>
            <Image source={item.icon} style={styles.icon} />
            <Text>{item.name}</Text>
          </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 18,
  },
  itemContainer: {
    flex: 1,
    minWidth: 130,
  
  },
  button: {
    backgroundColor: "#fff",
    borderRadius: 8, 
    padding: 14,
    marginRight: 10,
    alignItems: "center",
    elevation: 2,
    backgroundColor: '#FF8D2330',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal:14,
   
  },
  icon: {
    width: 32,
    height: 32,
    marginBottom: 4,
  },
});

export default CategoryList;

