import { Theme } from "@/types/theme";
import { StyleSheet } from "react-native";

export const createStyle = (theme: Theme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: theme.colors.gray[700],
    },
  });
