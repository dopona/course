import { TouchableOpacity } from "react-native";

import { theme } from "@/theme";
import { ButtonProps } from "./types";
import { createStyles } from "./styles";

export function ButtonIcon({ icon, variant = "solid", ...props }: ButtonProps) {
  const styles = createStyles(theme);

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={[variant === "solid" ? styles.button : styles.ghost]}
      {...props}
    >
      {icon}
    </TouchableOpacity>
  );
}
