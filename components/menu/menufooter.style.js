import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../../constants";

const styles = StyleSheet.create({
  menuContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: "8%",
    width: "100%",
    padding: 0,
    justifyContent: "space-evenly",
    alignItems: "center",
    flexDirection: "row",
  },
  menuBtn: (activePage, menu) => ({
    width: "50%",
    height: "100%",
    padding: 0,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: activePage === menu ? COLORS.primary : COLORS.secondary,
  }),
  menuWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    padding: 0,
    marginHorizontal: 0,
  },
  menuIcon: (activePage, icon) => ({
    height: "100%",
    width: "20%",
    marginRight: 7,
    tintColor: activePage === icon ? COLORS.secondary : COLORS.primary,
  }),
  menuText: (activePage, text) => ({
    fontFamily: FONT.medium,
    fontSize: SIZES.large,
    color: activePage === text ? COLORS.secondary : COLORS.primary,
    marginRight: 7,
  }),
});

export default styles;
