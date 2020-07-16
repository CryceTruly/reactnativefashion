import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Onboarding from "./src/Authentication/Onboarding";
import LoadAssets from "./src/components";

const fonts = {
  // "SFProText-Bold": require("./assets/fonts/JosefinSans-Bold.ttf"),
  // "SFProText-Semibold": require("./assets/fonts/JosefinSans-SemiBold.ttf"),
  // "SFProText-Regular": require("./assets/fonts/JosefinSans-Light.ttf"),
};

const AuthenticationStack = createStackNavigator();

const AuthenticationNavigator = () => {
  return (
    <AuthenticationStack.Navigator headerMode="none">
      <AuthenticationStack.Screen name="OnBoarding" component={Onboarding} />
    </AuthenticationStack.Navigator>
  );
};

export default function App() {
  return (
    <LoadAssets {...{ fonts }}>
      <AuthenticationNavigator />
    </LoadAssets>
  );
}
