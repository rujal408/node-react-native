import React from "react";
import { Redirect, Stack } from "expo-router";
import { useSession } from "@/providers/SessionProvider";

const ProtectedLayout = () => {
  const { isSignedIn } = useSession();

  if (!isSignedIn) {
    return <Redirect href="/(auth)" />;
  }
  return (
    <Stack>
      <Stack.Screen name="dashboard" options={{ headerShown: false }} />
    </Stack>
  );
};

export default ProtectedLayout;
