import { View, Text, ScrollView, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "@/constants";

const SignIn = () => {
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View className="w-full h-full justify-center min-h-[85vh] px-4 my-6">
          <Image source={images.logo} resizeMode="contain" />
          <Text className="text-2xl text-white text-semibold mt-10 font-psemibold">Log in to Aora</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
