import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../../constants";

const styles = StyleSheet.create({
  container: {
    height: SIZES.xxLarge + 585,
    width: "100%",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    gap: SIZES.xxSmall,
    padding: SIZES.small,
    backgroundColor: COLORS.secondary,
    borderRadius: SIZES.xSmall,
    borderWidth: SIZES.xxSmall - 2,
    borderColor: COLORS.primary,
  },
  dataContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    width: "100%",
  },
  text: {
    fontFamily: FONT.medium,
    fontSize: SIZES.xLarge,
    color: COLORS.primary,
  },
  dtText: {
    fontFamily: FONT.medium,
    fontSize: SIZES.medium,
    color: COLORS.primary,
  },
});

export default styles;
