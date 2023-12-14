import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Onboarding from "./components/Onboarding";
import Greetings from "./components/Greetings";
import { useState } from "react";

export default function App() {
  const [animationFinished, setAnimationFinished] = useState(false);
  return (
    <>
      {animationFinished ? (
					<Onboarding/>
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
