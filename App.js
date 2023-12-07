import React, { useState } from "react";
import { StyleSheet, AppRegistry, Text } from "react-native";
import LoginForm from "./components/LoginForm/LoginForm";
import {
  NativeBaseProvider,
  View,
  Center,
  Button,
  PresenceTransition,
} from "native-base";

export default function App() {
  const [password, setPassword] = useState("password");
  const [login, setLogin] = useState("login");
  const [isCorrect, setIsCorrect] = useState(null);
  const handleLogin = () => {
    users.some((val) => val.password == password && val.login == login)
      ? setIsCorrect(true)
      : setIsCorrect(false);
  };
  const users = [
    {
      login: "sanya@gmail.com",
      password: "12345678",
    },
  ];
  return (
    <NativeBaseProvider>
      <PresenceTransition
        visible={isCorrect != null}
        initial={{
          translateY: -100,
          opacity: 0,
        }}
        animate={{
          translateY: 0,
          opacity: 1,
          transition: {
            duration: 250,
          },
        }}
      >
        <Center
          bg={!isCorrect ? "blue.400" : "green.500"}
          rounded="md"
          w="100%"
          h="75"
          _text={{
            color: "white",
          }}
          textAlign={"center"}
        >
          {!isCorrect
            ? "Invalid password or login, try again"
            : "You are authorized"}
        </Center>
      </PresenceTransition>
      <View style={styles.container}>
        <View style={styles.inputsContainer}>
          <LoginForm
            inpData={login}
            setInpData={setLogin}
            type={"text"}
            label="Login"
            isCorrect={isCorrect}
          />
          <LoginForm
            inpData={password}
            setInpData={setPassword}
            type={"password"}
            label="Password"
            isCorrect={isCorrect}
          />
        </View>
        <Center style={styles.button}>
          <Button onPress={() => handleLogin()} width={"100%"} backgroundColor={"black"}>
            Login
          </Button>
        </Center>
      </View>
    </NativeBaseProvider>
  );
}

AppRegistry.registerComponent("MyApp", () => App);

const styles = StyleSheet.create({
  container: {
    margin: "auto",
    marginTop: 250,
    position: "relative",
  },
  inputsContainer: {
    height: 520,
  },
});
