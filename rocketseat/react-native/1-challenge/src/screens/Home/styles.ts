import { StyleSheet } from "react-native";

import { Theme } from "@/types/theme";

export const createStyle = (theme: Theme) =>
  StyleSheet.create({
    content: {
      flex: 4,
      padding: theme.spacing[6],
      backgroundColor: theme.colors.gray[600],
    },

    form: {
      alignItems: "center",
      flexDirection: "row",
      gap: theme.spacing[1],
      marginTop: -theme.spacing[12],
    },

    badgeContainer: {
      alignItems: "center",
      flexDirection: "row",
      gap: theme.spacing[1],
      marginTop: theme.spacing[8],
      justifyContent: "space-between",
      paddingBottom: theme.spacing[6],
    },
  });
