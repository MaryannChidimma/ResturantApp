import {
    View,
    Text,
    FlatList,
    TouchableOpacity,
    StyleSheet,
    ImageBackground,
} from "react-native";

const offers = [
    {
        id: "1",
        title: "Garnished Jellof Rice",
        description: "Nigerian garnished jellof rice with chicken laps",
        imageUrl: "https://example.com/jollof.jpg",
        price: "₦1000",
        rating: 4.6,
        discount: "-10%",
    },
    {
        id: "2",
        title: "Ora Soup",
        description: "Nigerian soup with chicken laps",
        imageUrl: "https://example.com/ora.jpg",
        price: "₦1000",
        rating: 4.6,
        discount: "-5%",
    },
];

const SpecialOffers = () => (
    <View style={{ marginTop: 16 }}>
        <View style={styles.header}>
            <Text style={styles.title}>Special Offers</Text>
            <TouchableOpacity>
                <Text style={styles.viewAll}>View All</Text>
            </TouchableOpacity>
        </View>
        <FlatList
            data={offers}
            horizontal
            keyExtractor={(item) => item.id}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingHorizontal: 16 }}
            renderItem={({ item }) => (
                <ImageBackground
                    source={{ uri: item.imageUrl }}
                    style={styles.card}
                    imageStyle={styles.image}
                >
                    <View style={styles.discountTag}>
                        <Text style={styles.discountText}>{item.discount}</Text>
                    </View>
                    <View style={styles.overlay}>
                        <Text style={styles.titleText}>{item.title}</Text>
                        <Text style={styles.desc}>{item.description}</Text>
                        <View style={styles.footer}>
                            <Text style={styles.price}>{item.price}</Text>
                            <Text style={styles.rating}>★ {item.rating}</Text>
                        </View>
                    </View>
                </ImageBackground>
            )}
        />
    </View>
);

const styles = StyleSheet.create({
    header: {
        paddingHorizontal: 16,
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 10,
    },
    title: {
        fontSize: 18,
        fontWeight: "600",
    },
    viewAll: {
        color: "#FF7F00",
        fontWeight: "500",
    },
    card: {
        width: 180,
        height: 200,
        marginRight: 12,
        borderRadius: 12,
        overflow: "hidden",
        position: "relative",
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
    titleText: {
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
    discountTag: {
        position: "absolute",
        top: 10,
        right: 10,
        backgroundColor: "#FF7F00",
        borderRadius: 6,
        paddingHorizontal: 6,
        paddingVertical: 2,
        zIndex: 10,
    },
    discountText: {
        color: "#fff",
        fontSize: 12,
        fontWeight: "700",
    },
});

export default SpecialOffers;
