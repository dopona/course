import { StyleSheet } from "react-native";

import { Theme } from "@/types/theme";

export const createStyle = (theme: Theme) =>
  StyleSheet.create({
    container: {
      borderWidth: 2,
      alignItems: "center",
      width: theme.spacing[6],
      height: theme.spacing[6],
      justifyContent: "center",
      borderRadius: theme.borderRadius.full,
      borderColor: theme.colors.blue[400],
    },

    checked: {
      borderColor: theme.colors.purple[600],
      backgroundColor: theme.colors.purple[600],
    },
  });
