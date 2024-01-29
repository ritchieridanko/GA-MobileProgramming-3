import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../../constants";

const styles = StyleSheet.create({
  keypadContainer: {
    position: "absolute",
    bottom: 56,
    left: 0,
    right: 0,
    height: "60%",
    width: "100%",
    padding: 0,
    justifyContent: "space-evenly",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: COLORS.secondary,
  },
  keypadColumn: {
    height: "100%",
    width: "25%",
    flexDirection: "column",
    justifyContent: "space-evenly",
  },
  keypadBtn: {
    flex: 1,
    width: "100%",
    height: "34%",
    padding: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  keypadSaveBtn: {
    flex: 2,
    width: "100%",
    height: "66%",
    padding: 0,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.primary,
  },
  keypadBtnText: {
    fontFamily: FONT.medium,
    fontSize: SIZES.xxLarge,
    color: COLORS.primary,
  },
  keypadSaveBtnText: {
    fontFamily: FONT.medium,
    fontSize: SIZES.xxLarge,
    color: COLORS.secondary,
  },
});

export default styles;
