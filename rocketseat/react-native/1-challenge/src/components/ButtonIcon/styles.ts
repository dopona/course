import { StyleSheet } from "react-native";

import { Theme } from "@/types/theme";

export const createStyles = (theme: Theme) => {
  const base = {
    alignItems: "center" as const,
    justifyContent: "center" as const,
  };

  return StyleSheet.create({
    button: {
      ...base,
      width: theme.spacing[14],
      height: theme.spacing[14],
      padding: theme.spacing[4],
      borderRadius: theme.borderRadius.md,
      backgroundColor: theme.colors.blue[800],
    },

    ghost: {
      ...base,
      backgroundColor: "transparent",
    },
  });
};
