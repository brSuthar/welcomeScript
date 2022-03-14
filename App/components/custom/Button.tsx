import React from "react";
import { StyleProp, Text, TextStyle, TouchableOpacity, ViewStyle } from "react-native";

type ButtonProps = {
  title: string, 
  style: StyleProp<ViewStyle>, 
  titleStyle: StyleProp<TextStyle>, 
}

const Button: React.FC<ButtonProps> = (props: ButtonProps) =>{
  return <TouchableOpacity>
    <Text>{props.title}</Text>
  </TouchableOpacity>
}

export default Button;