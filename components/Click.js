import { Alert, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const Click = () => {
  const handleText = () => {
    Alert.alert("xD", "Get rumbled, stay humbled", [
      { text: "OK", style: "OK" },
      { text: "CANCEL", style: "CANCEL" },
      { text: "DECLINE", style: "DECLINE" },
    ]);
  };
  return (
    <View>
      <Text onPress={handleText}>Click here</Text>
      <TouchableOpacity style={styles.button} onPress={handleText}>
        <Text style={{ fontSize: 25 }}>Rumbling</Text>
      </TouchableOpacity>
    </View>
  );
};
export default Click;

const styles = StyleSheet.create({
  button: {
    backgroundColor: "maroon",
		margin: 5,
    paddingHorizontal: 60,
    paddingVertical: 15,
    borderRadius: 10,
  },
});
