import { StyleSheet, Text, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link } from "expo-router";
import axiosInstance from "../utils/axiosConfig";

const SignUp = () => {
  const [data, setData] = useState({
    name: "",
    username: "",
    password: "",
  });

  const handleRegister = async () => {
    try {
      const res = await axiosInstance.post("/users/register", data);
    } catch (err) {
      // handle error
    }
  };

  const handleChange = (text: string) => {
    return (name: string) => {
      setData({ ...data, [name]: text });
    };
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>
      <TextInput
        style={styles.input}
        placeholder="Full Name"
        onChangeText={handleChange("name")}
      />
      <TextInput
        style={styles.input}
        placeholder="Username"
        onChangeText={handleChange("username")}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={handleChange("email")}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        onChangeText={handleChange("password")}
        secureTextEntry={true}
      />
      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <Link style={styles.link} href="/(auth)">
        <Text style={styles.buttonText}>Login?</Text>
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

export default SignUp;
