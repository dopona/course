import { useState } from "react";
import {
  Keyboard,
  TextInput,
  NativeSyntheticEvent,
  TextInputFocusEventData,
} from "react-native";

import { theme } from "@/theme";
import { InputProps } from "./types";
import { createStyle } from "./styles";

export function Input({ onFocus, onBlur, ...props }: InputProps) {
  const [focused, setFocused] = useState(false);

  const styles = createStyle(theme);

  function handleFocus(e: NativeSyntheticEvent<TextInputFocusEventData>) {
    setFocused(true);
    onFocus?.(e);
  }

  function handleBlur(e: NativeSyntheticEvent<TextInputFocusEventData>) {
    setFocused(false);
    onBlur?.(e);
  }

  return (
    <TextInput
      onBlur={handleBlur}
      onFocus={handleFocus}
      onSubmitEditing={() => Keyboard.dismiss()}
      placeholderTextColor={theme.colors.gray[300]}
      style={[styles.input, focused && styles.focused]}
      {...props}
    />
  );
}
