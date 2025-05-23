import { TouchableOpacity } from "react-native";

import { theme } from "@/theme";
import { createStyle } from "./styles";
import { CheckboxProps } from "./types";
import Check from "@assets/icons/check.svg";

export function Checkbox({ value, onValueChange }: CheckboxProps) {
  const styles = createStyle(theme);

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={() => onValueChange(!value)}
      style={[styles.container, value && styles.checked]}
    >
      {value && <Check width={theme.spacing[4]} height={theme.spacing[4]} />}
    </TouchableOpacity>
  );
}
