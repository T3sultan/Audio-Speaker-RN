import { Image, Pressable, StyleSheet, View } from "react-native";
import React from "react";
import { colors, spacing } from "../theme";
import Text from "../common/text";
import { AntDesign } from "@expo/vector-icons";

const CartagoryBox = ({ title, image, onPress }) => {
  return (
    <Pressable onPress={onPress} style={styles.container}>
      <Image source={image} style={styles.imageStyle} />
      <View style={styles.wrapper}>
        <Text preset="h6">{title}</Text>
      </View>
      <View style={styles.rowType}>
        <Text
          preset="subtitle"
          textColor="#7c7c7c"
          centered
          style={{ marginRight: spacing[3] }}
        >
          SHOP
        </Text>
        <AntDesign name="right" color={colors.primary} />
      </View>
    </Pressable>
  );
};

export default CartagoryBox;

const styles = StyleSheet.create({
  container: {
    marginVertical: spacing[8],
    marginHorizontal: spacing[5],
    borderRadius: spacing[4],
    backgroundColor: colors.gry,
    alignItems: "center",
    padding: spacing[5],
  },
  imageStyle: {
    top: -50,
  },
  wrapper: {
    alignItems: "center",
    justifyContent: "center",
    top: -20,
  },
  rowType: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: spacing[4],
  },
});
