import { StyleSheet } from "react-native";

import { Theme } from "@/types/theme";

export const createStyle = (theme: Theme) =>
  StyleSheet.create({
    bottomBar: {
      width: "100%",
      backgroundColor: theme.colors.gray[600],
    },
  });
