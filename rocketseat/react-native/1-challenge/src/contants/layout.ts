import { Platform } from "react-native";

import { theme } from "@/theme";

export const BOTTOM_INSET = Platform.OS === "ios" ? theme.spacing[2] : 0;
