import { StyleSheet } from "react-native";

import { Theme } from "@/types/theme";

export const createStyle = (theme: Theme) =>
  StyleSheet.create({
    input: {
      flex: 1,
      borderWidth: 1,
      height: theme.spacing[14],
      padding: theme.spacing[4],
      fontSize: theme.spacing[4],
      color: theme.colors.gray[100],
      fontFamily: theme.fonts.regular,
      borderRadius: theme.borderRadius.md,
      borderColor: theme.colors.gray[700],
      backgroundColor: theme.colors.gray[500],
    },

    focused: {
      borderColor: theme.colors.purple[600],
    },
  });
