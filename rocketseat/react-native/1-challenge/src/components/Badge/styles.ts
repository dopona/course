import { StyleSheet } from "react-native";

import { Theme } from "@/types/theme";

export const createStyle = (theme: Theme) =>
  StyleSheet.create({
    container: {
      paddingVertical: theme.spacing[1],
      paddingHorizontal: theme.spacing[3],
      borderRadius: theme.borderRadius.full,
      backgroundColor: theme.colors.gray[400],
    },

    text: {
      fontSize: theme.spacing[4],
      fontFamily: theme.fonts.bold,
      color: theme.colors.gray[200],
    },
  });
