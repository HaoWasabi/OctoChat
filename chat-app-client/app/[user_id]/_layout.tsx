import { Tabs, useSegments } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import "react-native-reanimated";

import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  Button,
} from "react-native";
import { TabBarIcon } from "@/components/navigation/TabBarIcon";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const styles = StyleSheet.create({
    text: {
      color: "red",
      textAlign: "center",
    },
    hidden: {
      display: "none",
    },
  });

  const segment = useSegments();
  // get the current page from the segment
  const page = segment[segment.length - 1];
  const pagesToHideTabBar = ["[channel_id]"];
  // console.log(page);

  return (
    <>
      <Tabs >
        <Tabs.Screen
          name="[server_id]"
          options={{
            title: "Home",
            headerShown: false,
            tabBarStyle: {
              display: pagesToHideTabBar.includes(page) ? "none" : "flex",
            },
            tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
          }}
        />
        <Tabs.Screen
          name="setting"
          options={{
            title: "Setting",
            headerShown: false,
            tabBarIcon: ({ color }) => (
              <TabBarIcon color={color} name="settings" />
            ),
          }}
        />
      </Tabs>
    </>
  );
}
