import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { FieldErrors, FieldValues } from "react-hook-form";

interface IProps {
  errors: FieldErrors<FieldValues>;
  name: string;
}

const ErrorMessage: React.FC<IProps> = ({ name, errors }) => {
  return (
    <>
      {errors && errors[name] && errors[name].message && (
        <Text style={style.text}>Required</Text>
      )}
    </>
  );
};

const style = StyleSheet.create({
  text: {
    color: "red",
  },
});

export default ErrorMessage;
