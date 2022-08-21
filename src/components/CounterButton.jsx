import { Pressable, StyleSheet, View } from "react-native";
import React, { useState } from "react";
import Text from "../common/text";
import { colors, spacing } from "../theme";

const CounterButton = ({ amount, style, setAmount }) => {
  const onIncrement = () => {
    setAmount(amount + 1);
  };
  const onDecrement = () => {
    if (amount > 0) {
      setAmount(amount - 1);
    }
  };
  return (
    <View style={[styles.container, style]}>
      <Pressable onPress={onDecrement} style={styles.Btn}>
        <Text style={styles.btnTextStyle} textColor="#c4c4c4">
          -
        </Text>
      </Pressable>
      <Text>{amount}</Text>
      <Pressable onPress={onIncrement} style={styles.Btn}>
        <Text style={styles.btnTextStyle} textColor="#c4c4c4">
          +
        </Text>
      </Pressable>
    </View>
  );
};

export default CounterButton;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    width: 120,
    height: 40,
    flexDirection: "row",
    backgroundColor: colors.gry,
    borderRadius: spacing[3],
  },
  btnTextStyle: {
    fontWeight: "bold",
  },
  Btn: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
