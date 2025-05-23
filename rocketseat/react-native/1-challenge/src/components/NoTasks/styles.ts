import { StyleSheet } from "react-native";

import { Theme } from "@/types/theme";

export const createStyle = (theme: Theme) =>
  StyleSheet.create({
    container: {
      borderTopWidth: 1,
      alignItems: "center",
      justifyContent: "center",
      paddingVertical: theme.spacing[12],
      borderColor: theme.colors.gray[400],
    },

    textContainer: {
      alignItems: "center",
      gap: theme.spacing[1],
      marginTop: theme.spacing[4],
    },

    text: {
      fontSize: theme.spacing[3.5],
      color: theme.colors.gray[300],
      fontFamily: theme.fonts.regular,
    },

    bold: {
      fontFamily: theme.fonts.bold,
    },
  });
