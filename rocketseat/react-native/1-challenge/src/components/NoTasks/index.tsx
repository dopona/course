import { Text, View } from "react-native";

import { theme } from "@/theme";
import { createStyle } from "./styles";
import Document from "@assets/icons/doc.svg";

export function NoTasks() {
  const styles = createStyle(theme);

  return (
    <View style={styles.container}>
      <Document width={theme.spacing[14]} height={theme.spacing[14]} />

      <View style={styles.textContainer}>
        <Text style={[styles.text, styles.bold]}>
          Você ainda não tem tarefas cadastradas
        </Text>

        <Text style={styles.text}>
          Crie tarefas e organize seus itens a fazer
        </Text>
      </View>
    </View>
  );
}
