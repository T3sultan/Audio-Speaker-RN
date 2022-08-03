import { ActivityIndicator, StyleSheet, View } from "react-native";
import React, { useEffect } from "react";
import Text from "../common/text";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, selectStatus } from "../redux/productSlice";

const Home = () => {
  const dispatch = useDispatch();
  const status = useSelector(selectStatus);
  console.log("status", status);
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
    <View>
      <Text>Home</Text>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
