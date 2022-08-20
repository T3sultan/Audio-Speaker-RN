import { Image, StyleSheet, View } from "react-native";
import React from "react";
import { colors, spacing } from "../theme";
import Text from "./text";
import { presets } from "./text.presets";

const Footer = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.footerImageStyle}
        source={require("../../assets/images/man-with-hp.png")}
      />
      <View style={styles.wrapper}>
        <Text centered preset="h4" style={{ textTransform: "uppercase" }}>
          Bringing you the
        </Text>
        <Text centered preset="h4" style={{ textTransform: "uppercase" }}>
          <Text preset="h4" textColor={colors.orange}>
            best
          </Text>{" "}
        </Text>
      </View>
      <Text textColor="#919191" centered>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque deserunt
        quaerat totam laboriosam quam eveniet fugit eligendi voluptas inventore
        doloribus praesentium rerum obcaecati, ad, magnam ex, aliquid
        reprehenderit officia! Similique.
      </Text>
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({
  container: {
    padding: spacing[5],
    alignItems: "center",
  },
  footerImageStyle: {
    alignSelf: "center",
  },
  wrapper: {
    paddingVertical: spacing[5],
  },
});
