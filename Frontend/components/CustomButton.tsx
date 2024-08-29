import { GestureResponderEvent, Text, TouchableOpacity } from "react-native";
import React from "react";

interface IProps {
  title: string;
  containerStyles: string;
  textStyles: string;
  handlePress: (e: GestureResponderEvent) => void;
  isLoading: boolean;
}

const CustomButton: React.FC<IProps> = ({
  title,
  containerStyles,
  handlePress,
  isLoading,
  textStyles
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      className={`bg-secondary rounded-xl min-h[62px] justify-center items-center ${containerStyles} ${
        isLoading ? "opacity-50" : ""
      }`}
      onPress={handlePress}
      disabled={isLoading}
    >
      <Text className={`text-primary font-psemibold text-lg ${textStyles}`}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
