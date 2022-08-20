import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { colors, spacing } from "../theme";

const CartagoryBox = ({ title, image, onPress }) => {
  return (
    <Pressable onPress={onPress} style={styles.container}>
      <Image source={image} style={styles.imageStyle} />
      <View style={styles.wrapper}></View>
    </Pressable>
  );
};

export default CartagoryBox;

const styles = StyleSheet.create({
  container: {
    marginVertical: spacing[8],
    marginHorizontal: spacing[5],
    borderRadius: spacing[4],
    backgroundColor: colors.grey,
    alignItems: "center",
    padding: spacing[5],
  },
  imageStyle: {
    top: -50,
  },
  wrapper: {
    alignItems: "center",
    justifyContent: "center",
    top: -50,
  },
});
