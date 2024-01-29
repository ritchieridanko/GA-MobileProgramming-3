import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import * as SQLite from "expo-sqlite";

import styles from "./keypad.style";

const Keypad = ({ numbers, setNumbers }) => {
  const handleSaveBtn = () => {
    // open the database
    const db = SQLite.openDatabase("AppDB.db");

    const getDT = () => {
      const dt = new Date();

      const year = dt.getFullYear();
      const month = String(dt.getMonth() + 1).padStart(2, "0");
      const date = String(dt.getDate()).padStart(2, "0");
      const hours = String(dt.getHours()).padStart(2, "0");
      const minutes = String(dt.getMinutes()).padStart(2, "0");
      const seconds = String(dt.getSeconds()).padStart(2, "0");

      return `${year}-${month}-${date}T${hours}:${minutes}:${seconds}`;
    };

    const rightNow = getDT();

    // create table if it does not exist
    db.transaction((tx) => {
      tx.executeSql(
        "CREATE TABLE IF NOT EXISTS numbers (id INTEGER PRIMARY KEY AUTOINCREMENT, number TEXT, datetime TEXT)",
        [],
        (tx, results) => {
          console.log('Table "numbers" is successfully created.');
        },
        (error) => {
          console.error("Error creating table:", error);
        }
      );
    });

    // insert the data
    db.transaction((tx) => {
      tx.executeSql(
        "INSERT INTO numbers (number, datetime) VALUES (?, ?)",
        [numbers, rightNow],
        (tx, results) => {
          console.log("Record is successfully inserted.");
        },
        (error) => {
          console.error("Error inserting record:", error);
        }
      );
    });

    setNumbers("");
    alert("The number has been saved to the data.");
  };

  return (
    <View style={styles.keypadContainer}>
      <View style={styles.keypadColumn}>
        <TouchableOpacity
          style={styles.keypadBtn}
          onPress={() => setNumbers(numbers + "7")}
        >
          <Text style={styles.keypadBtnText}>7</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.keypadBtn}
          onPress={() => setNumbers(numbers + "4")}
        >
          <Text style={styles.keypadBtnText}>4</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.keypadBtn}
          onPress={() => setNumbers(numbers + "1")}
        >
          <Text style={styles.keypadBtnText}>1</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.keypadColumn}>
        <TouchableOpacity
          style={styles.keypadBtn}
          onPress={() => setNumbers(numbers + "8")}
        >
          <Text style={styles.keypadBtnText}>8</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.keypadBtn}
          onPress={() => setNumbers(numbers + "5")}
        >
          <Text style={styles.keypadBtnText}>5</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.keypadBtn}
          onPress={() => setNumbers(numbers + "2")}
        >
          <Text style={styles.keypadBtnText}>2</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.keypadColumn}>
        <TouchableOpacity
          style={styles.keypadBtn}
          onPress={() => setNumbers(numbers + "9")}
        >
          <Text style={styles.keypadBtnText}>9</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.keypadBtn}
          onPress={() => setNumbers(numbers + "6")}
        >
          <Text style={styles.keypadBtnText}>6</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.keypadBtn}
          onPress={() => setNumbers(numbers + "3")}
        >
          <Text style={styles.keypadBtnText}>3</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.keypadColumn}>
        <TouchableOpacity
          style={styles.keypadBtn}
          onPress={() => setNumbers(numbers + "0")}
        >
          <Text style={styles.keypadBtnText}>0</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.keypadSaveBtn} onPress={handleSaveBtn}>
          <Text style={styles.keypadSaveBtnText}>Save</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Keypad;
