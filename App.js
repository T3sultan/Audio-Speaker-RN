import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { useFonts } from "expo-font";
import { Provider } from "react-redux";
import Text from "./src/common/text";
import FlashMessage from "react-native-flash-message";
import store from "./src/redux/index";
import Navigation from "./src/navigation";

export default function App() {
  let [fontsLoaded] = useFonts({
    "Manrope-Bold": require("./assets/fonts/Manrope-Bold.ttf"),
    "Manrope-Regular": require("./assets/fonts/Manrope-Regular.ttf"),
    "Manrope-Medium": require("./assets/fonts/Manrope-Medium.ttf"),
  });
  if (!fontsLoaded) {
    return null;
  } else {
    return (
      <Provider store={store}>
        <Navigation />
        <View>
          <StatusBar />
          <FlashMessage position="top" floating statusBarLight={30} />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    color: "#ffff",
    alignItems: "center",
    justifyContent: "center",
  },
});
