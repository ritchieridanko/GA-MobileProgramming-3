import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import * as SQLite from "expo-sqlite";

import styles from "./databox.style";

const DataBox = () => {
  const [data, setData] = useState([]);

  const parseDate = (dt) => {
    const dtInfo = new Date(dt);

    const year = dtInfo.getFullYear();
    const month = dtInfo.getMonth() + 1;
    const date = dtInfo.getDate();
    const hours = dtInfo.getHours();
    const minutes = dtInfo.getMinutes();
    const seconds = dtInfo.getSeconds();

    return `${year}-${month}-${date} at ${hours}:${minutes}:${seconds}`;
  };

  // open the database
  const db = SQLite.openDatabase("AppDB.db");

  useEffect(() => {
    db.transaction((tx) => {
      tx.executeSql(
        "CREATE TABLE IF NOT EXISTS numbers (id INTEGER PRIMARY KEY AUTOINCREMENT, number TEXT, datetime TEXT)"
      );
    });
  }, []);

  // read the data
  db.transaction((tx) => {
    tx.executeSql(
      "SELECT * FROM numbers",
      [],
      (tx, results) => {
        if (results.length !== 0) {
          setData(results.rows._array);
        }
      },
      (error) => {
        console.error("Error fetching data:", error);
      }
    );
  });

  return (
    <View style={styles.container}>
      {data?.map((num) => (
        <View style={styles.dataContainer}>
          <Text style={styles.text}>{num.number}</Text>
          <Text style={styles.dtText}>Saved On: {parseDate(num.datetime)}</Text>
        </View>
      ))}
    </View>
  );
};

export default DataBox;
