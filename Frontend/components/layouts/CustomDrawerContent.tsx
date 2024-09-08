import React from "react";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { router } from "expo-router";
import * as SecureStore from "expo-secure-store";
import { useSession } from "@/providers/SessionProvider";
import { Text, TouchableOpacity, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const CustomDrawerContent = (props: any) => {
  const session = useSession();
  const { bottom } = useSafeAreaInsets();

  const handleLogout = async () => {
    await SecureStore.deleteItemAsync("token");
    session.setIsSignedIn(false);
    router.replace("/(auth)");
  };

  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
      <View
        style={{
          paddingBottom: bottom,
          paddingLeft: 20,
          borderTopWidth: 1,
          borderColor: "red",
        }}
      >
        <TouchableOpacity onPress={handleLogout}>
          <Text>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CustomDrawerContent;
