import React, { useState } from "react";
import { StyleSheet, View, Button, FlatList } from "react-native";
import GoalInput from "./components/goalinput/Goalinput";
import Goalitem from "./components/goalitem/Goalitem";

export default function App() {
  const [updateGoals, setUpdateGoals] = useState([]);
  const [modalPopup, setModalPopup] = useState(false);

  const addGoals = (nextGoals) => {
    setUpdateGoals((currentGoals) => [
      ...currentGoals,
      { id: Math.random().toString(), value: nextGoals },
    ]);
    setModalPopup(false);
  };

  const cancelgoals = () => setModalPopup(false);

  const deleteItem = (goalId) => {
    setUpdateGoals((currentGoals) => {
      return currentGoals.filter((goal) => goal.id !== goalId);
    });
  };

  return (
    <View style={styles.screen}>
      <Button
        style={styles.btn}
        title="Add more goals"
        onPress={() => setModalPopup(true)}
      />
      <GoalInput
        visible={modalPopup}
        onAddGoals={addGoals}
        cancel={cancelgoals}
      />
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={updateGoals}
        renderItem={(itemData) => (
          <Goalitem
            id={itemData.item.id}
            onDelete={deleteItem}
            title={itemData.item.value}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
  btn: {
    marginTop: 50,
  },
});
