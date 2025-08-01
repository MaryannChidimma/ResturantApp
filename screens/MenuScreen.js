// import MenuItem from '../components/MenuItem';
// import CouponBanner from '../components/CouponBanner';
// import { FlatList, SafeAreaView } from 'react-native';
// import CategoryList from '../components/CategoryList';
// import FeaturedItems from '../components/FeaturedItems';
// <FeaturedItems />

// const MenuScreen = () => {
//   const menuItems = [
//     {
//       id: '1',
//       imageUrl: 'https://example.com/egusi-soup.jpg',
//       rating: 4.6,
//       title: 'Egusi Soup with assorted meat',
//       price: '₦1,500'
//     },
//     {
//       id: '2',
//       imageUrl: 'https://example.com/jollof-rice.jpg',
//       rating: 4.8,
//       title: 'Jollof Rice with chicken',
//       price: '₦2,000'
//     },
//     {
//       id: '3',
//       imageUrl: 'https://example.com/afang-soup.jpg',
//       rating: 4.5,
//       title: 'Afang Soup with fish',
//       price: '₦1,800'
//     },
//   ];

//   return (
//     <SafeAreaView style={{ flex: 1, backgroundColor: '#F8F8F8' }}>
//       <FlatList
//         data={menuItems}
//         keyExtractor={item => item.id}
//         renderItem={({ item }) => (
//           <MenuItem
//             imageUrl={item.imageUrl}
//             rating={item.rating}
//             title={item.title}
//             price={item.price}
//             onPress={() => console.log('Selected:', item.title)}
//           />
//         )}
//         ListHeaderComponent={
//           <>
//            <CategoryList />
//            <FeaturedItems></FeaturedItems>
//            <CouponBanner></CouponBanner>
//            <FeaturedItems></FeaturedItems>
//           </>
//         }
//         contentContainerStyle={{ padding: 16 }}
//       />
//     </SafeAreaView>
//   );
// };

// export default MenuScreen;

import { SafeAreaView, ScrollView } from "react-native";
import SearchBar from "../components/SearchBar";
import CategoryList from "../components/CategoryList";
import FeaturedItems from "../components/FeaturedItems";
import CouponBanner from "../components/CouponBanner";
import SpecialOffers from "../components/SpecialOffers";

const MenuScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <SearchBar />
        <CategoryList />
        <FeaturedItems />
        <CouponBanner />
        <SpecialOffers />
      </ScrollView>
    </SafeAreaView>
  );
};

export default MenuScreen;
