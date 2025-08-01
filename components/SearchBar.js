import { View, TextInput, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const SearchBar = () => {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="What are you looking for?"
        style={styles.input}
      />
      <View style = {styles.iconContainer}>
      <Ionicons name="search" size={20} color="#fff" style={styles.icon} />
      </View>
    </View>

  );
};

const styles = StyleSheet.create({
  container: {
    margin: 16,
    flexDirection: 'row',
    backgroundColor: '#E5E5E5',
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  input: {
    flex: 1,
    paddingVertical: 10,
    color: '#fff',
    paddingHorizontal: 38,
  },
  icon: {
    width: 24,
    height:24,
  },
  iconContainer: {
    backgroundColor: '#FF8D23',
    width: 76,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25

  }
});

export default SearchBar;
