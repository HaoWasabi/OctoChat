import { ThemeProvider } from "@react-navigation/native";

import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";

import SessionProvider from "@/components/Seesionprovider";

import "react-native-reanimated";

import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  Button,
} from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import type { Theme } from "@react-navigation/native";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

const styles = StyleSheet.create({
  text: {
    color: "red",
    textAlign: "center",
  },
});

const GreyTheme: Theme = {
  dark: true,
  colors: {
    primary: "rgb(10, 132, 255)",
    background: "#2B2D31",
    card: "rgb(18, 18, 18)",
    text: "rgb(229, 229, 231)",
    border: "rgb(39, 39, 41)",
    notification: "rgb(255, 69, 58)",
  },
};

export default function RootLayout() {
  return (
    <>
      <GestureHandlerRootView>
        <SessionProvider>
          <ThemeProvider value={GreyTheme}>
            <Stack>
              <Stack.Screen name="login" options={{ headerShown: false }} />
              <Stack.Screen
                name="register"
                options={{ headerShown: false, animation: "slide_from_bottom" }}
              />
              <Stack.Screen
                name="[user_id]"
                options={{ headerShown: false, animation: "none" }}
              />
              <Stack.Screen
                name="userInfo"
                options={{ headerShown: false, animation: "slide_from_right" }}
              />
              <Stack.Screen
                name="passwordChange"
                options={{ headerShown: false, animation: "slide_from_right" }}
              />
              <Stack.Screen name="+not-found" />
            </Stack>
          </ThemeProvider>
        </SessionProvider>
      </GestureHandlerRootView>
    </>
  );
}
