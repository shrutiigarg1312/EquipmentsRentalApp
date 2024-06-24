import React from "react";
import { View, ActivityIndicator, StyleSheet } from "react-native";

const LoadingSpinner = () => (
  <View style={styles.container}>
    <ActivityIndicator size="large" color="#0000ff" />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    margin: 25,
    marginBottom: 40,
  },
});

export default LoadingSpinner;
