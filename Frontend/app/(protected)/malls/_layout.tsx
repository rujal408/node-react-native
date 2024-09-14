import { router, Stack, useFocusEffect } from "expo-router";
import React, { useCallback } from "react";

const MallLayout = () => {
  useFocusEffect(
    useCallback(() => {
      // Navigate to the 'index' screen when the 'Malls' screen is focused
      router.replace("/(protected)/malls");
    }, [])
  );

  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="create-mall" options={{ headerShown: false }} />
    </Stack>
  );
};

export default MallLayout;
