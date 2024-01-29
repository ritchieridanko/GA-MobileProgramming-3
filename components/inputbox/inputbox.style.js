import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../../constants";

const styles = StyleSheet.create({
  container: {
    height: SIZES.xxLarge + 170,
    width: "100%",
    justifyContent: "flex-end",
    alignItems: "flex-start",
    padding: SIZES.medium,
    backgroundColor: COLORS.secondary,
    borderRadius: SIZES.medium,
    borderWidth: SIZES.xxSmall - 2,
    borderColor: COLORS.primary,
  },
  text: {
    fontFamily: FONT.medium,
    fontSize: SIZES.xLarge,
    color: COLORS.primary,
  },
});

export default styles;
