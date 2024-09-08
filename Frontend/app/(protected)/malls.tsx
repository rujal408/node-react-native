import React from "react";
import {
  Text,
  Image,
  FlatList,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";

const malls = [
  {
    id: "1",
    name: "Central Mall",
    image: "https://www.centralmultiplex.com.np/Upload/images/DSC_0080.JPG",
  },
  { id: "2", name: "Westfield", image: "https://www.centralmultiplex.com.np/Upload/images/DSC_0080.JPG" },
  { id: "3", name: "Metropolis", image: "https://www.centralmultiplex.com.np/Upload/images/DSC_0080.JPG" },
  {
    id: "4",
    name: "Grand Plaza",
    image: "https://www.centralmultiplex.com.np/Upload/images/DSC_0080.JPG",
  },
  // Add more malls as needed
];

const { width } = Dimensions.get("window");
const itemWidth = (width - 30) / 2; // 30 is the total horizontal padding

const MallItem = ({ name, image }: { name: string; image: string }) => (
  <TouchableOpacity style={styles.itemContainer}>
    <Image source={{ uri: image }} style={styles.image} />
    <Text style={styles.name}>{name}</Text>
  </TouchableOpacity>
);

const Malls = () => {
  return (
    <FlatList
      data={malls}
      renderItem={({ item }) => (
        <MallItem name={item.name} image={item.image} />
      )}
      keyExtractor={(item) => item.id}
      numColumns={2}
      contentContainerStyle={styles.grid}
    />
  );
};

const styles = StyleSheet.create({
  grid: {
    padding: 10,
  },
  itemContainer: {
    width: itemWidth,
    margin: 5,
    borderRadius: 10,
    overflow: "hidden",
    backgroundColor: "#fff",
    elevation: 3, // for Android shadow
    shadowColor: "#000", // for iOS shadow
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  image: {
    width: "100%",
    height: 120,
    resizeMode: "cover",
  },
  name: {
    padding: 10,
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default Malls;
