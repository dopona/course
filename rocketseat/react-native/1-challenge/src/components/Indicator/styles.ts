import { StyleSheet } from "react-native";

import { Theme } from "@/types/theme";
import { IndicatorColor } from "./types";

export const createStyle = (theme: Theme, color: IndicatorColor = "blue") =>
  StyleSheet.create({
    container: {
      flexDirection: "row",
      alignItems: "center",
      gap: theme.spacing[2],
      justifyContent: "space-between",
    },
    label: {
      fontSize: theme.spacing[4],
      fontFamily: theme.fonts.bold,
      color:
        color === "blue" ? theme.colors.blue[400] : theme.colors.purple[400],
    },
  });
