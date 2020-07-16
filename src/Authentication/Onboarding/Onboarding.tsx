import * as React from "react";
import { Text, View, StyleSheet } from "react-native";

interface OnboardingProps {}

const Onboarding = (props: OnboardingProps) => {
  return (
    <View style={styles.container}>
      <Text>Onboarding</Text>
    </View>
  );
};

export default Onboarding;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "cyan",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
