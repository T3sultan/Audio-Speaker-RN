import { Image, StyleSheet, View } from "react-native";
import React from "react";
import Text from "./text";
import { colors } from "../theme";

const BannerTitle = () => {
  return (
    <View style={styles.container}>
      <Image source={require("../../assets/images/audiophile.png")} />
    </View>
  );
};

export default BannerTitle;

const styles = StyleSheet.create({
  container: {
    height: 45,
    backgroundColor: colors.black,
    justifyContent: "center",
    alignItems: "center",
  },
});
