// import { View, Text, StyleSheet } from 'react-native';

// const CouponBanner = () => {
//   return (
//     <View style={styles.container}>

//       <View style={styles.banner}>
//         <View style={styles.content}>
//           <Text style={styles.superDiscount}>Super Discount</Text>
//           <Text style={styles.offText}>10% OFF</Text>
//           <Text style={styles.description}>Get 10% off on your first delivery!</Text>
//         </View>
        

//         <View style={styles.scissorsContainer}>
//           <Text style={styles.scissorsIcon}>✂</Text>
//         </View>
 
//         <View style={styles.dashedBorderTop} />
//         <View style={styles.dashedBorderBottom} />
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     // position: 'absolute',
//     width: 332,
//     height: 107,
//     // left: 29,
//     // top: 445,
//   },
//   banner: {
//     flex: 1,
//     backgroundColor: '#FFD700',
//     borderRadius: 12,
//     overflow: 'hidden',
//   },
//   content: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 16,
//   },
//   superDiscount: {
//     fontSize: 18,
//     fontWeight: '800',
//     color: '#333',
//     textTransform: 'uppercase',
//     letterSpacing: 0.5,
//   },
//   offText: {
//     fontSize: 32,
//     fontWeight: '900',
//     color: '#E40000',
//     marginVertical: 4,
//     textShadowColor: 'rgba(0,0,0,0.1)',
//     textShadowOffset: {width: 0, height: 1},
//     textShadowRadius: 2,
//   },
//   description: {
//     fontSize: 14,
//     fontWeight: '500',
//     color: '#333',
//     textAlign: 'center',
//     lineHeight: 18,
//   },
//   scissorsContainer: {
//     position: 'absolute',
//     top: -8,
//     right: 20,
//     backgroundColor: '#FFD700',
//     paddingHorizontal: 6,
//     transform: [{ rotate: '45deg' }],
//   },
//   scissorsIcon: {
//     fontSize: 16,
//     color: '#333',
//   },
//   dashedBorderTop: {
//     position: 'absolute',
//     top: 0,
//     left: 0,
//     right: 0,
//     height: 2,
//     borderTopWidth: 2,
//     borderStyle: 'dashed',
//     borderColor: '#C0C0C0',
//   },
//   dashedBorderBottom: {
//     position: 'absolute',
//     bottom: 0,
//     left: 0,
//     right: 0,
//     height: 2,
//     borderBottomWidth: 2,
//     borderStyle: 'dashed',
//     borderColor: '#C0C0C0',
//   },
// });

// export default CouponBanner;

import { View, Text, StyleSheet } from 'react-native';

const CouponBanner = () => (
  <View style={styles.container}>
    <Text style={styles.discount}>Super Discount</Text>
    <Text style={styles.percent}>10% OFF</Text>
    <Text style={styles.details}>Get 10% off on your first delivery!</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#BFE6FF',
    margin: 16,
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
  },
  discount: {
    color: '#FF7F00',
    fontWeight: '600',
  },
  percent: {
    fontSize: 24,
    fontWeight: '800',
    color: '#0077B6',
  },
  details: {
    fontSize: 14,
    color: '#333',
  },
});

export default CouponBanner;
