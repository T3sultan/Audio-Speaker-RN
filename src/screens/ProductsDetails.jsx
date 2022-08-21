import { Image, Pressable, ScrollView, StyleSheet, View } from "react-native";
import React, { useState } from "react";
import Text from "../common/text";
import { useSelector, useDispatch } from "react-redux";
import { selectProductsById } from "../redux/productSlice";
import BannerTitle from "../common/BannerTitle";
import { Ionicons } from "@expo/vector-icons";
import { spacing, colors } from "../theme";
import CustomButton from "../common/CustomButton";
import CounterButton from "../components/CounterButton";

const ProductsDetails = ({ navigation, route }) => {
  const id = route.params.id;
  const product = useSelector(state => selectProductsById(state, id));
  const dispatch = useDispatch();
  const [amount, setAmount] = useState(0);
  const {
    featuredImage,
    name,
    price,
    description,
    category,
    features,
    included,
    images,
  } = product;
  return (
    <View style={{ flex: 1 }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <BannerTitle />
        <Pressable onPress={() => navigation.goBack()}>
          <Ionicons
            style={{ margin: spacing[4] }}
            name="arrow-back-sharp"
            size={24}
            color="black"
          />
        </Pressable>
        <View style={styles.container}>
          <View style={styles.wrapper}>
            <Image source={featuredImage.source} />
          </View>
          <View style={{ marginVertical: spacing[5] }}>
            <Text preset="h4">{name}</Text>
            <Text uppercase preset="h4">
              {category}
            </Text>
            <Text style={{ marginTop: spacing[4] }} textColor="#7d7d7d">
              {description}
            </Text>
            <Text preset="h6" style={{ marginTop: spacing[3] }}>
              $ {price}
            </Text>
          </View>

          <View style={styles.buttonContainer}>
            <CounterButton amount={amount} setAmount={setAmount} />
            <CustomButton
              title={"Add to Cart"}
              style={{ marginLeft: spacing[3], width: "40%", height: 40 }}
            />
          </View>
          <View style={{ marginVertical: spacing[5] }}>
            <Text preset="h4">FEATURES</Text>
            <Text
              textColor="#7d7d7d"
              preset="h8"
              style={{ marginTop: spacing[3] }}
            >
              {features}
            </Text>
          </View>
          {included && (
            <View style={{ marginVertical: spacing[5] }}>
              <Text preset="h4">IN THE BOX</Text>
              {included?.map(item => (
                <View key={item.name} style={styles.includedStyle}>
                  <Text preset="6" textColor={colors.primary}>
                    {item.amount}x
                  </Text>
                  <Text textColor="#7d7d7d" style={{ marginLeft: spacing[3] }}>
                    {item.name}
                  </Text>
                </View>
              ))}
            </View>
          )}
          <View style={{ marginVertical: spacing[8] }}>
            {images.map((image, index) => {
              return (
                <View
                  style={{ marginVertical: spacing[3], overflow: "hidden" }}
                  key={index.toString()}
                >
                  <Image style={styles.imageStyle} source={image.source} />
                </View>
              );
            })}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default ProductsDetails;

const styles = StyleSheet.create({
  container: {
    margin: spacing[5],
  },
  wrapper: {
    backgroundColor: colors.gry,
    borderRadius: spacing[4],
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: spacing[8],
    paddingHorizontal: spacing[8],
    marginTop: -spacing[4],
  },
  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: spacing[6],
  },
  includedStyle: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: spacing[3],
  },
  imageStyle: {
    alignSelf: "center",
    width: "100%",
    borderRadius: spacing[3],
  },
});
