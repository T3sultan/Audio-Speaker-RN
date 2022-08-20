import {
  ActivityIndicator,
  Image,
  ScrollView,
  StyleSheet,
  useWindowDimensions,
  View,
} from "react-native";
import React, { useEffect } from "react";
import Text from "../common/text";
import { useDispatch, useSelector } from "react-redux";
import { selectStatus, fetchProducts } from "../redux/productSlice";
import BannerTitle from "../common/BannerTitle";
import { colors, spacing } from "../theme";
import CartagoryBox from "../components/CartagoryBox";

const Home = () => {
  const dispatch = useDispatch();
  const status = useSelector(selectStatus);
  const { width, height } = useWindowDimensions();

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchProducts());
    }
  }, []);

  if (status === "loading") {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator />
      </View>
    );
  }
  return (
    <View style={{ backgroundColor: colors.white }}>
      <ScrollView>
        <BannerTitle />
        <View style={styles.container}>
          <Image
            style={styles.bannerImage}
            source={require("../../assets/images/home-banner.png")}
          />
          <View style={styles.backgroundText}>
            <Text white centered style={styles.mainText} preset="h2">
              Welcome
            </Text>
            <Text textColor={colors.grey} centered>
              Experience natural, lifelike audio and exceptional build quality
              made fore the passionate music enthusiast.
            </Text>
          </View>
        </View>
        <View style={styles.container2}>
          <CartagoryBox
            title="HEADPHONES"
            image={require("../../assets/images/home-headphone.png")}
          />
          <CartagoryBox
            title="SPEAKERS"
            image={require("../../assets/images/home-speaker.png")}
          />
          <CartagoryBox
            title="EARPHONES"
            image={require("../../assets/images/home-earphone.png")}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.black,
  },
  bannerImage: {
    alignSelf: "center",
    width: "100%",
    resizeMode: "cover",
  },
  backgroundText: {
    position: "absolute",
    width: "100%",
    top: 200,
  },
  container2: {
    paddingVertical: spacing[8],
  },
});
