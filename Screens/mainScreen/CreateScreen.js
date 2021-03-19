import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function CreateScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>CreateScreen</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2f4f4f",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#fff",
    fontSize: 50,
  },
});
