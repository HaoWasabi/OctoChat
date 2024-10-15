import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import "react-native-reanimated";
import Header from "../../../../components/channel/Header";

import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  Button,
} from "react-native";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const styles = StyleSheet.create({
    text: {
      color: "red",
      textAlign: "center",
    },
  });

  return (
    <>
      <Header />
      <Stack>
        <Stack.Screen
          name="index"
          options={{
            headerShown: false,
          }}
        />
      </Stack>
    </>
  );
}
