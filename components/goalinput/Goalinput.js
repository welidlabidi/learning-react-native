import React, { useState } from "react";
import { View, TextInput, StyleSheet, Button, Modal } from "react-native";

const GoalInput = (props) => {
  const [goals, setGoals] = useState("");

  const goalInputHandler = (goals) => {
    setGoals(goals);
  };

  const addGoalHandeler = () => {
    props.onAddGoals(goals);
    setGoals("");
  };

  const cancelGoalHandeler = () => {
    props.cancel(goals);
    setGoals("");
  };

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Goals"
          style={styles.input}
          onChangeText={goalInputHandler}
          value={goals}
        />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-evenly",
            width: "50%",
          }}
        >
          <View style={{ width: "40%" }}>
            <Button color="red" title="CANCEL" onPress={cancelGoalHandeler} />
          </View>
          <View style={{ width: "40%" }}>
            <Button title="ADD" onPress={addGoalHandeler} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    width: "80%",
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
  },
});

export default GoalInput;
