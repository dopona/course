import { Text, View } from "react-native";

import { theme } from "@/theme";
import { BadgeProps } from "./types";
import { createStyle } from "./styles";

export function Badge({ value }: BadgeProps) {
  const styles = createStyle(theme);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{value}</Text>
    </View>
  );
}
