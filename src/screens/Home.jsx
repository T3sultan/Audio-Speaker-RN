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
import {
  selectStatus,
  fetchProducts,
  selectFeaturedProducts,
} from "../redux/productSlice";
import BannerTitle from "../common/BannerTitle";
import { colors, spacing } from "../theme";
import CartagoryBox from "../components/CartagoryBox";
import FeatureProducts from "../components/FeatureProducts";

const Home = ({ navigation }) => {
  const dispatch = useDispatch();
  const status = useSelector(selectStatus);
  const featureProducts = useSelector(selectFeaturedProducts);
  const { width, height } = useWindowDimensions();
  console.log("fe", featureProducts);

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
      <ScrollView showsVerticalScrollIndicator={false}>
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
            onPress={() => {
              navigation.navigate("HeadphoneTab");
            }}
            title="HEADPHONES"
            image={require("../../assets/images/home-headphone.png")}
          />
          <CartagoryBox
            title="SPEAKERS"
            image={require("../../assets/images/home-speaker.png")}
            onPress={() => {
              navigation.navigate("SpeakersTab");
            }}
          />
          <CartagoryBox
            onPress={() => {
              navigation.navigate("EarphoneTab");
            }}
            title="EARPHONES"
            image={require("../../assets/images/home-earphone.png")}
          />
        </View>
        <View style={styles.features}>
          {featureProducts.map(product => (
            <FeatureProducts
              key={product.id}
              name={product.name}
              category={product.category}
              image={product.featuredImage}
            />
          ))}
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
  features: {
    paddingVertical: spacing[8],
    paddingHorizontal: spacing[4],
  },
});
