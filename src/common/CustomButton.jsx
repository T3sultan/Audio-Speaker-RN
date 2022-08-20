import {
  StyleSheet,
  TouchableHighlight,
  TouchableNativeFeedback,
  View,
} from "react-native";
import React from "react";

import Text from "./text";
import { colors, spacing } from "../theme";

const CustomButton = ({
  title,
  onPress,
  style,
  outlinePrimary,
  outlineSecondary,
  secondary,
  width,
  height,
  color,
  noBorder,
  captionText,
  disable,
  fullWidth = false,
  primary,
  blue,

  exploreButton,
  centered,
  purple,
}) => {
  return (
    <TouchableNativeFeedback onPress={onPress}>
      <View
        style={[
          styles.container,
          outlinePrimary && styles.outlinePrimary,
          fullWidth && styles.fullWidth,
          width && { width },
          height && { height },
          secondary && { backgroundColor: colors.white },
          noBorder && { borderWidth: 0 },
          style,
          primary && { backgroundColor: colors.primary },
          blue && { backgroundColor: colors.blue },
          purple && { backgroundColor: colors.gry },
          exploreButton && { backgroundColor: colors.red },
          centered && { textAlign: "center" },
        ]}
      >
        <Text
          fwBold
          title
          centered
          caption={captionText}
          primaryColor={outlinePrimary}
          style={[styles.text]}
        >
          {title}
        </Text>
      </View>
    </TouchableNativeFeedback>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.superLightGrey,
    borderColor: colors.white,
    borderRadius: spacing[3],
    height: spacing[9],
    borderWidth: 1,
  },
  text: {
    width: "100%",
  },
  outlinePrimary: {
    borderColor: colors.primary,
    backgroundColor: "transparent",
    borderWidth: 1,
  },
  fullWidth: {
    width: "100%",
  },
});
