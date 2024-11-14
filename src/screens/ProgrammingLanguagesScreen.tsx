import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { programmingLanguages } from "../../data";
import ProgrammingLanguageItem from "../components/ProgrammingLanguageItem";

const ProgrammingLanguagesScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Мои языки программирования</Text>
      <FlatList
        data={programmingLanguages}
        renderItem={({ item }) => (
          <ProgrammingLanguageItem
            name={item.name}
            experience={item.experience}
            logo={item.logo}
          />
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
});

export default ProgrammingLanguagesScreen;
