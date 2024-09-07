import React from "react";
import { Redirect, Stack } from "expo-router";
import { useSession } from "@/providers/SessionProvider";

const AuthLayout = () => {
  const { isSignedIn } = useSession();

  if (!isSignedIn) {
    return <Redirect href="/(auth)" />;
  }
  
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{ headerShown: false, title: "Sign In" }}
      />
      <Stack.Screen
        name="sign-up"
        options={{ headerShown: false, title: "Sign Up" }}
      />
    </Stack>
  );
};

export default AuthLayout;
