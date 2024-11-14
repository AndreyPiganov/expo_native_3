import React from "react";
import { View, Text, StyleSheet } from "react-native";

const AboutMeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>О Себе</Text>
      <Text style={styles.content}>Привет меня зовут Андрей!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  content: {
    fontSize: 18,
    color: "#555",
  },
});

export default AboutMeScreen;
