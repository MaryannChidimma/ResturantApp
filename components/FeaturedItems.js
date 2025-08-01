
// import {
//   View,
//   Text,
//   FlatList,
//   ImageBackground,
//   StyleSheet,
//   TouchableOpacity,
// } from 'react-native';

// const featuredItems = [
//   {
//     id: '1',
//     title: 'Garnished Jellof Rice',
//     description: 'Nigerian garnished jellof rice with chicken laps',
//     imageUrl: 'https://example.com/jollof.jpg',
//     price: '₦1000',
//     rating: 4.6,
//   },
//   {
//     id: '2',
//     title: 'Ora Soup',
//     description: 'Nigerian jellof rice with chicken laps',
//     imageUrl: 'https://example.com/ora-soup.jpg',
//     price: '₦1000',
//     rating: 4.6,
//   },
// {
//     id: '2',
//     title: 'Ora Soup',
//     description: 'Nigerian jellof rice with chicken laps',
//     imageUrl: 'https://example.com/ora-soup.jpg',
//     price: '₦1000',
//     rating: 4.6,
//   },
//   {
//     id: '2',
//     title: 'Ora Soup',
//     description: 'Nigerian jellof rice with chicken laps',
//     imageUrl: 'https://example.com/ora-soup.jpg',
//     price: '₦1000',
//     rating: 4.6,
//   },
//   {
//     id: '2',
//     title: 'Ora Soup',
//     description: 'Nigerian jellof rice with chicken laps',
//     imageUrl: 'https://example.com/ora-soup.jpg',
//     price: '₦1000',
//     rating: 4.6,
//   },
//   {
//     id: '2',
//     title: 'Ora Soup',
//     description: 'Nigerian jellof rice with chicken laps',
//     imageUrl: 'https://example.com/ora-soup.jpg',
//     price: '₦1000',
//     rating: 4.6,
//   },
//   {
//     id: '2',
//     title: 'Ora Soup',
//     description: 'Nigerian jellof rice with chicken laps',
//     imageUrl: 'https://example.com/ora-soup.jpg',
//     price: '₦1000',
//     rating: 4.6,
//   },
// ];


// const FeaturedItems = ({Featured}) => {
//   return (
//     <View style={styles.container}>
//       <View style={styles.headerRow}>
//         <Text style={styles.sectionTitle}>Featured</Text>
//         <TouchableOpacity>
//           <Text style={styles.viewAll}>View All</Text>
//         </TouchableOpacity>
//       </View>

//       <FlatList
//         data={featuredItems}
//         horizontal
//         showsHorizontalScrollIndicator={false}
//         keyExtractor={(item) => item.id}
//         renderItem={({ item }) => (
//           <ImageBackground
//             source={{ uri: item.imageUrl }}
//             style={styles.card}
//             imageStyle={styles.image}
//           >
//             <View style={styles.overlay}>
//               <Text style={styles.title}>{item.title}</Text>
//               <Text style={styles.description}>{item.description}</Text>
//               <View style={styles.footer}>
//                 <Text style={styles.price}>{item.price}</Text>
//                 <Text style={styles.rating}>★ {item.rating}</Text>
//               </View>
//             </View>
//           </ImageBackground>
//         )}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     marginBottom: 20,
//   },
//   headerRow: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     paddingHorizontal: 16,
//     marginBottom: 10,
//     alignItems: 'center',
//   },
//   sectionTitle: {
//     fontSize: 18,
//     fontWeight: '600',
//   },
//   viewAll: {
//     fontSize: 14,
//     color: '#ff8800',
//     fontWeight: '500',
//     borderColor: '#ff8800',
//     borderWidth: 1,
//     borderRadius: 16,
//     paddingHorizontal: 10,
//     paddingVertical: 4,
//   },
//   card: {
//     width: 300,
//     height: 180,
//     borderRadius: 12,
//     overflow: 'hidden',
//     marginHorizontal: 8,
//   },
//   image: {
//     borderRadius: 12,
//   },
//   overlay: {
//     flex: 1,
//     justifyContent: 'flex-end',
//     padding: 10,
//     backgroundColor: 'rgba(0,0,0,0.4)',
//   },
//   title: {
//     color: 'white',
//     fontWeight: '700',
//     fontSize: 16,
//   },
//   description: {
//     color: 'white',
//     fontSize: 12,
//     marginBottom: 5,
//   },
//   footer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//   },
//   price: {
//     color: 'white',
//     fontWeight: '600',
//   },
//   rating: {
//     color: 'white',
//   },
// });

// export default FeaturedItems;

import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import MenuItem from './MenuItem';

const items = [
  {
    id: '1',
    title: 'Garnished Jellof Rice',
    description: 'Nigerian garnished jellof rice with chicken laps',
    imageUrl: 'https://example.com/jollof.jpg',
    price: '₦1000',
    rating: 4.6,
  },
  {
    id: '2',
    title: 'Ora Soup',
    description: 'Nigerian soup with chicken laps',
    imageUrl: 'https://example.com/ora.jpg',
    price: '₦1000',
    rating: 4.6,
  },
];

const FeaturedItems = () => (
  <View style={{ marginTop: 16 }}>
    <View style={styles.header}>
      <Text style={styles.title}>Popular Food</Text>
      <TouchableOpacity>
        <Text style={styles.viewAll}>View All</Text>
      </TouchableOpacity>
    </View>
    <FlatList
      data={items}
      horizontal
      keyExtractor={item => item.id}
      showsHorizontalScrollIndicator={false}
      renderItem={({ item }) => <MenuItem {...item} />}
      contentContainerStyle={{ paddingHorizontal: 16 }}
    />
  </View>
);

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
  },
  viewAll: {
    color: '#FF7F00',
    fontWeight: '500',
  },
});

export default FeaturedItems;
