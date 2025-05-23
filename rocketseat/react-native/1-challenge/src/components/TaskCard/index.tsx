import { Text, View } from "react-native";

import { theme } from "@/theme";
import { Checkbox } from "../Checkbox";
import { createStyle } from "./styles";
import { TaskCardProps } from "./types";
import { ButtonIcon } from "../ButtonIcon";
import Trash from "@assets/icons/trash.svg";

export function TaskCard({
  onCheck,
  onDelete,
  isChecked,
  description,
}: TaskCardProps) {
  const styles = createStyle(theme);

  return (
    <View style={styles.container}>
      <Checkbox value={isChecked} onValueChange={onCheck} />

      <Text
        numberOfLines={2}
        ellipsizeMode="tail"
        style={[styles.text, isChecked && styles.textChecked]}
      >
        {description}
      </Text>

      <ButtonIcon
        variant="ghost"
        onPress={onDelete}
        icon={<Trash width={theme.spacing[4]} height={theme.spacing[4]} />}
      />
    </View>
  );
}
