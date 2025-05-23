import { StyleSheet } from "react-native";

import { Theme } from "@/types/theme";

export const createStyle = (theme: Theme) =>
  StyleSheet.create({
    container: {
      borderWidth: 1,
      flexDirection: "row",
      alignItems: "center",
      gap: theme.spacing[3],
      padding: theme.spacing[3],
      borderRadius: theme.spacing[2],
      justifyContent: "space-between",
      borderColor: theme.colors.gray[400],
      backgroundColor: theme.colors.gray[500],
    },

    text: {
      flex: 1,
      fontSize: theme.spacing[3.5],
      color: theme.colors.gray[100],
      fontFamily: theme.fonts.regular,
    },

    textChecked: {
      color: theme.colors.gray[300],
      textDecorationLine: "line-through",
    },
  });
