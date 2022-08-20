import {
  Image,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from "react-native";
import React from "react";
import { colors, spacing } from "../theme";

const FeatureProducts = ({ name, category, image }) => {
  const { width, height } = useWindowDimensions();
  return (
    <View style={styles.container}>
      <View style={[styles.wrapper, { width: width - 40 }]}>
        <View style={[styles.wrapper1, { width: width - 70 }]}>
          <Image style={styles.imageStyle} source={image.source} />
        </View>
      </View>
    </View>
  );
};

export default FeatureProducts;

const styles = StyleSheet.create({
  container: {
    marginVertical: spacing[5],
    backgroundColor: colors.darkGray,
    borderRadius: spacing[4],
    alignItems: "center",
    justifyContent: "center",
  },
  wrapper: {
    borderWidth: 1,
    borderColor: "#d8d8d8",
    borderRadius: 400,
    height: 320,
    justifyContent: "center",
    alignItems: "center",
  },
  wrapper1: {
    borderWidth: 1,
    borderColor: "#d8d8d8",
    borderRadius: 400,
    height: 280,
    justifyContent: "center",
    alignItems: "center",
  },
  imageStyle: {
    height: 172,
    width: 180,
    resizeMode: "contain",
  },
});
