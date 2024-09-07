import { TextInput, StyleSheet } from "react-native";
import React from "react";
import { Controller } from "react-hook-form";

interface IProps {
  name: string;
  control: any;
  secureTextEntry?: boolean;
  placeholder: string;
}

const Input: React.FC<IProps> = ({
  name,
  control,
  placeholder,
  secureTextEntry = false,
}) => (
  <Controller
    name={name}
    control={control}
    defaultValue=""
    render={({ field: { onChange, value } }) => (
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        value={value}
        onChangeText={onChange}
        secureTextEntry={secureTextEntry}
      />
    )}
  />
);

const styles = StyleSheet.create({
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
});

export default Input;
