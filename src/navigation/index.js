import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import HeadPhone from "../screens/HeadPhone";
import ProductsDetails from "../screens/ProductsDetails";
import EarPhone from "../screens/EarPhone";
import Speakers from "../screens/Speakers";
import Cart from "../screens/Cart";
import Checkout from "../screens/Checkout";

const THEME = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "white",
  },
};

const HomeStack = createNativeStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={Home} />
    </HomeStack.Navigator>
  );
}

const HeadPhoneStack = createNativeStackNavigator();
function HeadPhoneStackScreen() {
  return (
    <HeadPhoneStack.Navigator>
      <HeadPhoneStack.Screen name="HeadPhones" component={HeadPhone} />
      <HeadPhoneStack.Screen name="Details" component={ProductsDetails} />
    </HeadPhoneStack.Navigator>
  );
}
const EarPhoneStack = createNativeStackNavigator();
function EarPhoneStackScreen() {
  return (
    <EarPhoneStack.Navigator>
      <EarPhoneStack.Screen name="EarPhones" component={EarPhone} />
      <EarPhoneStack.Screen name="Details" component={ProductsDetails} />
    </EarPhoneStack.Navigator>
  );
}
const SpeakerStack = createNativeStackNavigator();
function SpeakerStackScreen() {
  return (
    <SpeakerStack.Navigator>
      <SpeakerStack.Screen name="Speakers" component={Speakers} />
      <SpeakerStack.Screen name="Details" component={ProductsDetails} />
    </SpeakerStack.Navigator>
  );
}
const CartStack = createNativeStackNavigator();
function CartStackScreen() {
  return (
    <CartStack.Navigator>
      <CartStack.Screen name="Cart" component={Cart} />
      <CartStack.Screen name="Checkout" component={Checkout} />
    </CartStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <NavigationContainer theme={THEME}>
      <Tab.Navigator>
        <Tab.Screen name="HomeTab" component={HomeStackScreen} />
        <Tab.Screen name="HeadphoneTab" component={HeadPhoneStackScreen} />
        <Tab.Screen name="EarphoneTab" component={EarPhoneStackScreen} />
        <Tab.Screen name="SpeakerTab " component={SpeakerStackScreen} />
        <Tab.Screen name="CartTab" component={CartStackScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
