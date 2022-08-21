import { Image, ScrollView, StyleSheet, View } from "react-native";
import React from "react";
import Text from "../common/text";
import { useSelector } from "react-redux";
import { selectSpeakers } from "../redux/productSlice";
import BannerTitle from "../common/BannerTitle";
import CatagoryTitle from "../components/CatagoryTitle";
import { colors, spacing } from "../theme";
import CustomButton from "../common/CustomButton";
import Footer from "../common/Footer";

const Speakers = () => {
  const speakers = useSelector(selectSpeakers);
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <BannerTitle />
        <CatagoryTitle title={"Earphones"} />
        <View style={styles.wrapper}>
          {speakers.map(speaker => {
            return (
              <View key={speaker.name} style={{ marginBottom: spacing[9] }}>
                <View style={styles.wrapper1}>
                  <Image source={speaker.featuredImage.source} />
                </View>
                <View style={{ marginTop: spacing[5] }}>
                  <Text centered preset="h5">
                    {speaker.name}
                  </Text>
                  <Text centered preset="h6">
                    speakers
                  </Text>
                  <Text
                    centered
                    textColor="#919191"
                    style={{
                      marginTop: spacing[4],
                      marginHorizontal: spacing[4],
                    }}
                  >
                    {speaker.description}
                  </Text>
                </View>
                <View style={{ marginTop: spacing[2] }}>
                  <CustomButton
                    onPress={() => {}}
                    purple
                    title={"SEE PRODUCT"}
                  />
                </View>
              </View>
            );
          })}
        </View>
        <Footer />
      </ScrollView>
    </View>
  );
};

export default Speakers;

const styles = StyleSheet.create({
  container: {},
  wrapper: {
    margin: spacing[5],
  },
  wrapper1: {
    backgroundColor: colors.gry,
    borderRadius: spacing[4],
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: spacing[5],
  },
});
