import { StyleSheet, View } from "react-native";
import React from "react";
import Text from "../common/text";
import { colors, spacing } from "../theme";

const CatagoryTitle = ({ title }) => {
  return (
    <View style={styles.container}>
      <Text centered white preset="h5">
        {title}
      </Text>
    </View>
  );
};

export default CatagoryTitle;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.black,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: spacing[3],
    borderTopWidth: 0.3,
    borderTopColor: "#979797",
  },
});
