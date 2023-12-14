import React, { useState } from "react";
import {
  FlatList,
  View,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  TextInput,
  Button,
  Alert,
} from "react-native";

const getRandomColor = () => {
	const randomColor = `rgb(${Math.random() * 255},${Math.random() * 255},${Math.random() * 255})`
	return randomColor;
}

const DATA = [
  {
    id: "1",
    title: "First Item",
    color: getRandomColor(),
  },
  {
    id: "2",
    title: "Second Item",
    color: getRandomColor(),
  },
  {
    id: "3",
    title: "Third Item",
    color: getRandomColor(),
  },
];

const Item = ({ item, onPress }) => (
  <TouchableOpacity
    onPress={onPress}
    style={[
      styles.item,
      item.style , styles.middle,
      { backgroundColor: item.color },
    ]}
  >
    <Text style={[styles.title, { color: "black" }]}>{item.title}</Text>
  </TouchableOpacity>
);

const OrganizerApp = () => {
  const [selectedId, setSelectedId] = useState();
  const [newItemText, setNewItemText] = useState("");
  const [data, setData] = useState(DATA.map((item) => ({ ...item, style: styles.middle })));

  const removeItem = (itemId, itemTitle) => {
    Alert.alert(
      "Confirm Deletion",
      `Are you sure you want to remove "${itemTitle}"?`,
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "OK",
          onPress: () => {
            const updatedData = data.filter((item) => item.id !== itemId);
            setData(updatedData);
            setSelectedId(null);
          },
        },
      ],
      { cancelable: false }
    );
  };

  const addNewItem = () => {
    if (newItemText) {
      const newItem = {
        id: Date.now().toString(),
        title: newItemText,
        color: getRandomColor(),
        style: styles.middle,
      };
      setData([...data, newItem]);
      setNewItemText("");
    }
  };

  const renderItem = ({ item }) => {
    return (
      <View>
        <Item
          item={item}
          onPress={() => setSelectedId(item.id)}
        />
        <View style={styles.buttonContainer}>
          <Button
            title="Remove"
            onPress={() => removeItem(item.id, item.title)}
          />
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.listTitle}>List</Text>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
      />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Add something new"
          onChangeText={(text) => setNewItemText(text)}
          value={newItemText}
        />
        <Button title="Add" onPress={addNewItem} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  listTitle: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 10,
  },
  listContainer: {
    marginBottom: 10,
  },
  item: {
    padding: 20,
    marginVertical: 10,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
  middle: {
    flex: 0.3,
    borderWidth: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    marginBottom: 10,
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: "black",
    borderWidth: 1,
    marginRight: 10,
    paddingHorizontal: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "transparent",
  },
});

export default OrganizerApp;
