import { useEffect } from "react";
import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import * as SplashScreen from "expo-splash-screen";
import { SafeAreaView, Platform, View } from "react-native";
import { Inter_400Regular, Inter_700Bold } from "@expo-google-fonts/inter";

import { theme } from "@/theme";
import { createStyle } from "./styles";
import { Home } from "./src/screens/Home";
import { BOTTOM_INSET } from "@/contants";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const styles = createStyle(theme);

  const [loaded, error] = useFonts({
    Inter_400Regular,
    Inter_700Bold,
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <>
      <StatusBar style="light" />

      <SafeAreaView style={{ backgroundColor: theme.colors.gray[700] }} />

      <Home />

      {Platform.OS === "ios" && (
        <View style={[styles.bottomBar, { height: BOTTOM_INSET }]} />
      )}
    </>
  );
}
