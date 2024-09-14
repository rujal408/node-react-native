import { router } from "expo-router";
import React from "react";
import {
  Text,
  Image,
  FlatList,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  View,
} from "react-native";

const malls = [
  {
    id: "1",
    name: "Central Mall",
    image: "https://www.centralmultiplex.com.np/Upload/images/DSC_0080.JPG",
  },
  {
    id: "2",
    name: "Westfield",
    image:
      "https://www.pymnts.com/wp-content/uploads/2023/09/Westfield-malls.jpg",
  },
  {
    id: "3",
    name: "Metropolis",
    image:
      "https://metropolismall.com.cy/wp-content/uploads/2021/07/Facades-copper-1.jpg",
  },
  {
    id: "4",
    name: "Grand Plaza",
    image:
      "https://d27p8o2qkwv41j.cloudfront.net/wp-content/uploads/2015/12/dreamstime_m_25155855-e1451459894803.jpg",
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
    <View>
      <View style={{ margin: "auto" }}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => router.replace('/(protected)/malls/create-mall')}
        >
          <Text style={styles.buttonText}>+Create Malls</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={malls}
        renderItem={({ item }) => (
          <MallItem name={item.name} image={item.image} />
        )}
        keyExtractor={(item) => item.id}
        numColumns={2}
        contentContainerStyle={styles.grid}
      />
    </View>
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
  button: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 10,
    width: 110,
  },
  buttonText: {
    textAlign: "center",
  },
});

export default Malls;
