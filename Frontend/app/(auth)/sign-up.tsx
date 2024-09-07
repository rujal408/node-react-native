import { Alert, StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link, router } from "expo-router";
import { baseURL } from "@/utils/axiosConfig";
import axios from "axios";
import Input from "@/components/elements/Input";
import { SubmitHandler, useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import ErrorMessage from "@/components/elements/ErrorMessage";

const signUpSchema = z.object({
  name: z.string().min(1, { message: "Required" }),
  username: z.string().min(1, { message: "Required" }),
  password: z.string().min(1, { message: "Required" }),
  email: z.string().min(1, { message: "Required" }),
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
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>
      <Input name="name" control={control} placeholder="Full Name" />
      {errors && errors.name && errors.name.message && (
        <ErrorMessage errors={errors} name="name" />
      )}
      <Input name="username" control={control} placeholder="Username" />
      <ErrorMessage errors={errors} name="username" />

      <Input name="email" control={control} placeholder="Email" />
      <ErrorMessage errors={errors} name="email" />

      <Input
        name="password"
        control={control}
        secureTextEntry={true}
        placeholder="Password"
      />
      <ErrorMessage errors={errors} name="password" />

      <TouchableOpacity
        style={styles.button}
        onPress={handleSubmit(handleRegister)}
      >
        <Text>Sign Up</Text>
      </TouchableOpacity>
      <Link style={styles.link} href="/(auth)">
        <Text>Login?</Text>
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
