import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";

import styles from "./menufooter.style";
import { icons } from "../../constants";

const Menu = ({ activePage, setActivePage }) => {
  return (
    <View style={styles.menuContainer}>
      <TouchableOpacity
        style={styles.menuBtn(activePage, "home")}
        onPress={() => setActivePage("home")}
      >
        <View style={styles.menuWrapper}>
          <Image
            source={
              activePage === "home" ? icons.homeFilled : icons.homeOutlined
            }
            resizeMode="contain"
            style={styles.menuIcon(activePage, "home")}
          />
          <Text style={styles.menuText(activePage, "home")}>HOME</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.menuBtn(activePage, "data")}
        onPress={() => setActivePage("data")}
      >
        <View style={styles.menuWrapper}>
          <Image
            source={
              activePage === "data" ? icons.dataFilled : icons.dataOutlined
            }
            resizeMode="contain"
            style={styles.menuIcon(activePage, "data")}
          />
          <Text style={styles.menuText(activePage, "data")}>DATA</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Menu;
