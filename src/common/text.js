import { StyleSheet, View, Text as RNText } from "react-native";
import React from "react";
import { presets } from "./text.presets";
import { colors } from "../theme";

const text = props => {
  const {
    children,
    preset = "default",
    style: styleOverride,
    centered,
    white,
    textColor,
    uppercase,
    ...rest
  } = props;
  const style = presets[preset] || presets.bold;
  const styles = [style, styleOverride];

  return (
    <RNText
      {...rest}
      style={[
        styles,
        textColor && { color: textColor },
        centered && { textAlign: "center" },
        white && { color: colors.white },
        uppercase && { textTransform: "uppercase" },
      ]}
    >
      {children}
    </RNText>
  );
};

export default text;

const styles = StyleSheet.create({});
