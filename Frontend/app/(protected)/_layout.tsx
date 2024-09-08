import React from "react";
import { Redirect } from "expo-router";
import { Drawer } from "expo-router/drawer";

import { useSession } from "@/providers/SessionProvider";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const ProtectedLayout = () => {
  const { isSignedIn } = useSession();

  if (!isSignedIn) {
    return <Redirect href="/(auth)" />;
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer>
        <Drawer.Screen
          name="dashboard"
          options={{
            drawerLabel: "Dashboard",
            headerTitle: "Dashboard",
          }}
        />
        <Drawer.Screen
          name="malls"
          options={{
            drawerLabel: "Malls",
            headerTitle: "Malls",
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
};

export default ProtectedLayout;
