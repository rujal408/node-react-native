import { Alert, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link, router } from "expo-router";
import { baseURL } from "@/utils/axiosConfig";
import axios from "axios";
import Input from "@/components/elements/Input";
import { SubmitHandler, useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const signUpSchema = z.object({
  name: z.string().min(1, { message: "Name required" }),
  username: z.string().min(1, { message: "Username required" }),
  password: z.string().min(1, { message: "Password required" }),
  email: z.string().min(1, { message: "Email Required" }),
});

type TSignUp = z.infer<typeof signUpSchema>;

const SignUp = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<TSignUp>({
    resolver: zodResolver(signUpSchema),
  });

  const handleRegister: SubmitHandler<TSignUp> = async (data) => {
    try {
      await axios.post(`${baseURL}/users/register`, data);
      router.replace("/(auth)");
    } catch (err) {
      Alert.alert(JSON.stringify(err));
    }
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.title}>Sign Up</Text>
        <Input
          name="name"
          control={control}
          placeholder="Full Name"
          helperText={errors && errors.name && errors.name.message}
        />

        <Input
          name="username"
          control={control}
          placeholder="Username"
          helperText={errors && errors.username && errors.username.message}
        />

        <Input
          name="email"
          control={control}
          placeholder="Email"
          helperText={errors && errors.email && errors.email.message}
        />

        <Input
          name="password"
          control={control}
          secureTextEntry={true}
          placeholder="Password"
          helperText={errors && errors.password && errors.password.message}
        />

        <TouchableOpacity
          style={styles.button}
          onPress={handleSubmit(handleRegister)}
        >
          <Text>Sign Up</Text>
        </TouchableOpacity>
        <Link style={styles.link} href="/(auth)">
          <Text>Login?</Text>
        </Link>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "#1E1E1E",
    paddingHorizontal: 20,
    height:'100%'
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 30,
  },
  button: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 10,
  },
  link: {
    color: "white",
    marginTop: 5,
  },
});

export default SignUp;
