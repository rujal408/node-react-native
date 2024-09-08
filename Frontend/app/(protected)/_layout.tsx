import React from "react";
import { Redirect } from "expo-router";
import { Drawer } from "expo-router/drawer";

import { useSession } from "@/providers/SessionProvider";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Entypo, Ionicons, MaterialIcons } from "@expo/vector-icons";
import CustomDrawerContent from "@/components/layouts/CustomDrawerContent";

const ProtectedLayout = () => {
  const { isSignedIn } = useSession();

  if (!isSignedIn) {
    return <Redirect href="/(auth)" />;
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer drawerContent={CustomDrawerContent}>
        <Drawer.Screen
          name="dashboard"
          options={{
            drawerLabel: "Dashboard",
            headerTitle: "Dashboard",
            drawerIcon: ({ size, color }) => (
              <Ionicons size={size} color={color} name="home-outline" />
            ),
          }}
        />
        <Drawer.Screen
          name="malls"
          options={{
            drawerLabel: "Malls",
            headerTitle: "Malls",
            drawerIcon: ({ size, color }) => (
              <MaterialIcons name="local-mall" size={size} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="shops"
          options={{
            drawerLabel: "Shops",
            headerTitle: "Shops",
            drawerIcon: ({ size, color }) => (
              <Entypo name="shop" size={size} color={color} />
            ),
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
};

export default ProtectedLayout;
