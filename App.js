import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Onboarding from "./components/Onboarding";
import Greetings from "./components/Greetings";
import { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import OrganizerApp from "./components/OrganizerApp";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Click from "./components/Click";

export default function App() {
  const [animationFinished, setAnimationFinished] = useState(false);
  const Tab = createBottomTabNavigator();
  return (
    <>
      {animationFinished ? (
        <NavigationContainer>
          <Tab.Navigator>
            <Tab.Screen
              options={{
                tabBarIcon: () => (
                  <MaterialCommunityIcons name="home" color="#000" size={30} />
                ),
              }}
              name="Home"
              component={Onboarding}
            />
            <Tab.Screen
              options={{
                tabBarIcon: () => (
                  <MaterialCommunityIcons name="seal" color="#000" size={30} />
                ),
              }}
              name="OrganizerApp"
              component={OrganizerApp}
            />
            <Tab.Screen
              options={{
                tabBarIcon: () => (
                  <MaterialCommunityIcons
                    name="clippy"
                    color="#000"
                    size={30}
                  />
                ),
              }}
              name="Click"
              component={Click}
            />
          </Tab.Navigator>
        </NavigationContainer>
      ) : (
        <Greetings onAnimationFinish={() => setAnimationFinished(true)} />
      )}
      <StatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
