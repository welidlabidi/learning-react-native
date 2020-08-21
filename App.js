import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";

export default function App() {
  const [goals, setGoals] = useState("");
  const [updateGoals, setUpdateGoals] = useState([]);

  const goalInputHandler = (goals) => {
    setGoals(goals);
  };

  const addGoals = () => {
    setUpdateGoals((currentGoals) => [...updateGoals, goals]);
  };

  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Goals"
          style={styles.input}
          onChangeText={goalInputHandler}
          value={goals}
        />
        <Button title="ADD" onPress={addGoals} />
      </View>
      <View>
        {updateGoals.map((goal) => (
          <View style={styles.listitem}>
            <Text>{goal}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
  input: {
    width: "80%",
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  listitem: {
    padding: 10,
    borderColor: "black",
    backgroundColor: "#ccc",
    borderWidth: 1,
  },
});
