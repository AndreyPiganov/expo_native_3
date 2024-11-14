import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AboutMeScreen from "./src/screens/AboutMeScreen";
import ProgrammingLanguagesScreen from "./src/screens/ProgrammingLanguagesScreen";
import NotFoundScreen from "./src/screens/NotFoundScreen";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="О Себе" component={AboutMeScreen} />
        <Tab.Screen
          name="Мои языки программирования"
          component={ProgrammingLanguagesScreen}
        />
        <Tab.Screen name="Не найдено" component={NotFoundScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
