import { View } from "react-native";

import { theme } from "@/theme";
import { createStyle } from "./styles";
import Logo from "@assets/logo/logo.svg";

export function Header() {
  const styles = createStyle(theme);

  return (
    <View style={styles.container}>
      <Logo />
    </View>
  );
}
