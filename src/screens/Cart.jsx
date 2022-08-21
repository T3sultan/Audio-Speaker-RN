import {
  Alert,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  View,
} from "react-native";
import React from "react";
import Text from "../common/text";
import { colors, spacing } from "../theme";
import { useSelector, useDispatch } from "react-redux";
import {
  addToCart,
  deleteFromCart,
  reset,
  selectCart,
  selectTotalAmount,
} from "../redux/CartSlice";
import CounterButton from "../components/CounterButton";
import CustomButton from "../common/CustomButton";

const Cart = ({ navigation }) => {
  const cart = useSelector(selectCart);
  const totalAmount = useSelector(selectTotalAmount);
  const dispatch = useDispatch();

  const onAmountChange = (value, cartItem) => {
    if (value === 0) {
      return Alert.alert(
        "Remove Item?",
        "Do you want to remove this item from the cart?",
        [
          { text: "Cancel", style: "cancel", onPress: () => {} },
          {
            text: "Remove",
            onPress: () => dispatch(deleteFromCart({ id: cartItem.id })),
          },
        ]
      );
    }
    const cartProduct = {
      ...cartItem,
      quantityPrice: value * cartItem.price,
      amount: value,
    };
    dispatch(addToCart({ cartProduct }));
  };

  return (
    <View style={{ flex: 1 }}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ flexGrow: 1 }}
      >
        <View style={{ flex: 1, margin: spacing[5] }}>
          <View style={styles.container}>
            <Text preset="h6">{`Cart (${cart.length})`}</Text>
            <Pressable onPress={() => dispatch(reset())}>
              <Text
                centered
                textColor="#757575"
                style={{ textDecorationLine: "underline", fontWeight: "bold" }}
              >
                Remove all
              </Text>
            </Pressable>
          </View>
          <View style={{ marginVertical: spacing[5] }}>
            {cart.map(item => {
              const { featuredImage, name, quantityPrice, amount } = item;
              return (
                <View key={item.id} style={styles.wrapper}>
                  <View style={styles.cartStyle}>
                    <Image
                      style={{
                        height: spacing[7],
                        width: spacing[7],
                        resizeMode: "contain",
                      }}
                      source={featuredImage.source}
                    />
                  </View>
                  <View style={{ flex: 1, marginLeft: spacing[5] }}>
                    <Text preset="h6">{name}</Text>
                    <Text>{`$ ${quantityPrice}`}</Text>
                  </View>
                  <CounterButton
                    initialVal={amount}
                    setAmount={value => {
                      onAmountChange(value, item);
                    }}
                  />
                </View>
              );
            })}
            <View style={styles.totalText}>
              <Text preset="h6">Total</Text>
              <Text preset="h5">{`$${totalAmount}`}</Text>
            </View>
          </View>
        </View>
        <View style={styles.checkout}>
          <CustomButton
            onPress={() => navigation.navigate("checkout")}
            style={{ width: "100%" }}
            title={"CHECKOUT"}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  wrapper: {
    flexDirection: "row",
    alignItems: "center",
    padding: spacing[5],
  },
  cartStyle: {
    backgroundColor: colors.gry,
    borderRadius: spacing[3],
    alignItems: "center",
    justifyContent: "center",
    padding: spacing[5],
  },
  totalText: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    margin: spacing[5],
  },
  checkout: {
    flex: 1,
    justifyContent: "flex-end",
    margin: spacing[5],
  },
});
