import { StyleSheet, Text, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { baseURL } from "@/utils/axiosConfig";

const SignIn = () => {
  const [data, setData] = useState({ username: "", password: "" });

  const handleLogin = async () => {
    try {
      const res = await axios.post(`${baseURL}/users/login`, data);
      console.log(res);
      try {
        await AsyncStorage.setItem("token", "");
      } catch (err) {
        // save error
      }
    } catch (err) {
      // err
    }
  };

  const handleChange = (text: string) => {
    return (name: string) => {
      setData({ ...data, [name]: text });
    };
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Log In</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        onChangeText={handleChange("username")}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry={true}
        onChangeText={handleChange("password")}
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
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
