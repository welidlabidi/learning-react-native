import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const Goalitem = (props) => {
  return (
    <TouchableOpacity onPress={props.onDelete.bind(this, props.id)}>
      <View style={styles.listitem}>
        <Text>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listitem: {
    padding: 10,
    borderColor: "black",
    marginVertical: 10,
    backgroundColor: "#ccc",
    borderWidth: 1,
  },
});

export default Goalitem;
