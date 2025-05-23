import { TouchableOpacityProps } from "react-native";

export type ButtonVariant = "solid" | "ghost";

export type ButtonProps = TouchableOpacityProps & {
  icon?: React.ReactNode;
  variant?: ButtonVariant;
};
