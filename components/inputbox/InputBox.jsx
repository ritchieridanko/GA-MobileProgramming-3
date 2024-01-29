import React from "react";
import { View, Text } from "react-native";

import styles from "./inputbox.style";

const InputBox = ({ numbers }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        {numbers !== "" ? numbers : "Enter a number!"}
      </Text>
    </View>
  );
};

export default InputBox;
