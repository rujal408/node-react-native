import { TextInput, StyleSheet, View, Text } from "react-native";
import React from "react";
import { Controller } from "react-hook-form";

interface IProps {
  name: string;
  control: any;
  secureTextEntry?: boolean;
  placeholder: string;
  label?: string;
  helperText?: string;
}

const Input: React.FC<IProps> = ({
  name,
  control,
  placeholder,
  secureTextEntry = false,
  label,
  helperText,
}) => (
  <View style={styles.view}>
    {label && <Text>{label}</Text>}
    <Controller
      name={name}
      control={control}
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
    {helperText && <Text style={styles.text}>{helperText}</Text>}
  </View>
);

const styles = StyleSheet.create({
  input: {
    width: "100%",
    height: 50,
    backgroundColor: "white",
    borderRadius: 8,
    paddingHorizontal: 15,
    color: "black",
    fontSize: 16,
  },
  view: {
    width: "100%",
    marginBottom: 20,
  },
  text:{
    color:'red'
  }
});

export default Input;
