import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link } from "expo-router";
import axios from "axios";
import { baseURL } from "@/utils/axiosConfig";
import * as SecureStore from "expo-secure-store";
import { useSession } from "@/providers/SessionProvider";
import Input from "@/components/elements/Input";
import ErrorMessage from "@/components/elements/ErrorMessage";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const signInSchema = z.object({
  username: z.string().min(1, { message: "Required" }),
  password: z.string().min(1, { message: "Required" }),
});

type TSignIn = z.infer<typeof signInSchema>;

const SignIn = () => {
  const { setIsSignedIn } = useSession();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<TSignIn>({
    resolver: zodResolver(signInSchema),
  });

  const handleLogin: SubmitHandler<TSignIn> = async (data) => {
    try {
      await axios.post(`${baseURL}/users/login`, data);
      try {
        await SecureStore.setItemAsync("token", "");
        setIsSignedIn(true);
      } catch (err) {
        // save error
      }
    } catch (err) {
      // err
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Log In</Text>
      <Input name="username" control={control} placeholder="Username" />
      <ErrorMessage errors={errors} name="username" />
      <Input
        name="password"
        control={control}
        secureTextEntry={true}
        placeholder="Password"
      />
      <ErrorMessage errors={errors} name="password" />
      <TouchableOpacity
        style={styles.button}
        onPress={handleSubmit(handleLogin)}
      >
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <Link style={styles.link} href="/(auth)/sign-up">
        <Text style={styles.buttonText}>Register?</Text>
      </Link>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#1E1E1E",
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 30,
  },
  input: {
    width: "100%",
    height: 50,
    backgroundColor: "white",
    borderRadius: 8,
    paddingHorizontal: 15,
    color: "black",
    marginBottom: 20,
    fontSize: 16,
  },
  button: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 10,
  },
  buttonText: {},
  link: {
    color: "white",
    marginTop: 5,
  },
});

export default SignIn;
