import { Text, View } from "react-native";
import React from "react";
import { Link } from "expo-router";

const HomePage = () => {
  return (
    <View className="flex-1 items-center justify-center bg-red">
      <Text className="text-3xl">HomePage</Text>
      <Link href="/profile" className="text-blue-500">
        Go to profile
      </Link>
    </View>
  );
};

export default HomePage;
