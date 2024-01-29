import { useState } from "react";
import { View, SafeAreaView, ScrollView } from "react-native";
import { Stack } from "expo-router";

import { COLORS, SIZES } from "../constants";
import { InputBox, DataBox, Keypad, MenuFooter } from "../components";
import Layout from "./_layout";

const Home = () => {
  Layout();

  const [numbers, setNumbers] = useState("");
  const [activePage, setActivePage] = useState("home");

  const DisplayContent = () => {
    switch (activePage) {
      case "home":
        return <InputBox numbers={numbers} />;
      case "data":
        return <DataBox />;
      default:
        break;
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFF" }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.primary },
          headerShadowVisible: false,
          headerTitle: "Numberz",
          headerTitleAlign: "center",
          headerTintColor: COLORS.secondary,
        }}
      />

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ flex: 1, padding: SIZES.xSmall }}>
          {DisplayContent()}
        </View>
      </ScrollView>

      {activePage === "home" && (
        <Keypad numbers={numbers} setNumbers={setNumbers} />
      )}

      <MenuFooter activePage={activePage} setActivePage={setActivePage} />
    </SafeAreaView>
  );
};

export default Home;
