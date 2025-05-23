import { Text, View } from "react-native";

import { theme } from "@/theme";
import { Badge } from "../Badge";
import { createStyle } from "./styles";
import { IndicatorProps } from "./types";

export function Indicator({ label, value, color = "blue" }: IndicatorProps) {
  const styles = createStyle(theme, color);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <Badge value={value} />
    </View>
  );
}
