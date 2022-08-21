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
import { colors } from "../theme";

import { useSelector } from "react-redux";
import { selectCartLength } from "../redux/CartSlice";

import {
  Ionicons,
  MaterialCommunityIcons,
  SimpleLineIcons,
} from "@expo/vector-icons";

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
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
      <HomeStack.Screen name="Home" component={Home} />
    </HomeStack.Navigator>
  );
}

const HeadPhoneStack = createNativeStackNavigator();
function HeadPhoneStackScreen() {
  return (
    <HeadPhoneStack.Navigator screenOptions={{ headerShown: false }}>
      <HeadPhoneStack.Screen name="HeadPhones" component={HeadPhone} />
      <HeadPhoneStack.Screen name="Details" component={ProductsDetails} />
    </HeadPhoneStack.Navigator>
  );
}
const EarPhoneStack = createNativeStackNavigator();
function EarPhoneStackScreen() {
  return (
    <EarPhoneStack.Navigator screenOptions={{ headerShown: false }}>
      <EarPhoneStack.Screen name="EarPhones" component={EarPhone} />
      <EarPhoneStack.Screen name="Details" component={ProductsDetails} />
    </EarPhoneStack.Navigator>
  );
}
const SpeakerStack = createNativeStackNavigator();
function SpeakerStackScreen() {
  return (
    <SpeakerStack.Navigator screenOptions={{ headerShown: false }}>
      <SpeakerStack.Screen name="Speakers" component={Speakers} />
      <SpeakerStack.Screen name="Details" component={ProductsDetails} />
    </SpeakerStack.Navigator>
  );
}
const CartStack = createNativeStackNavigator();
function CartStackScreen() {
  return (
    <CartStack.Navigator screenOptions={{ headerShown: false }}>
      <CartStack.Screen name="Cart" component={Cart} />
      <CartStack.Screen name="Checkout" component={Checkout} />
    </CartStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

function TabBarIcon({ fontFamily, name, color }) {
  if (fontFamily === "MaterialCommunityIcons") {
    return <MaterialCommunityIcons name={name} size={24} color={color} />;
  } else if (fontFamily === "Ionicons") {
    return <Ionicons name={name} size={24} color={color} />;
  } else if (fontFamily === "SimpleLineIcons") {
    return <SimpleLineIcons name={name} size={24} color={color} />;
  }
}

export default function Navigation() {
  const cartLength = useSelector(selectCartLength);
  return (
    <NavigationContainer theme={THEME}>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: colors.red,
        }}
      >
        <Tab.Screen
          options={{
            title: "Home",
            tabBarIcon: ({ color }) => (
              <TabBarIcon
                fontFamily={"MaterialCommunityIcons"}
                name="home"
                color={color}
              />
            ),
          }}
          name="HomeTab"
          component={HomeStackScreen}
        />
        <Tab.Screen
          options={{
            title: "Headphones",
            tabBarIcon: ({ color }) => (
              <TabBarIcon
                fontFamily={"MaterialCommunityIcons"}
                name="headphones"
                color={color}
              />
            ),
          }}
          name="HeadphoneTab"
          component={HeadPhoneStackScreen}
        />
        <Tab.Screen
          options={{
            title: "Speakers",
            tabBarIcon: ({ color }) => (
              <TabBarIcon
                fontFamily={"MaterialCommunityIcons"}
                name="speaker"
                color={color}
              />
            ),
          }}
          name="SpeakersTab"
          component={SpeakerStackScreen}
        />
        <Tab.Screen
          options={{
            title: "Earphones",
            tabBarIcon: ({ color }) => (
              <TabBarIcon
                fontFamily={"SimpleLineIcons"}
                name="earphones-alt"
                color={color}
              />
            ),
          }}
          name="EarphoneTab"
          component={EarPhoneStackScreen}
        />

        <Tab.Screen
          options={{
            title: "Cart",
            tabBarIcon: ({ color }) => (
              <TabBarIcon
                fontFamily={"Ionicons"}
                name="cart-outline"
                color={color}
              />
            ),
            tabBarBadge: cartLength > 0 ? cartLength : null,
          }}
          name="CartTab"
          component={CartStackScreen}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
