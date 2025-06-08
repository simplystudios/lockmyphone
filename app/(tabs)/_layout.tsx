import { Tabs } from "expo-router";
import React from "react";
import { Platform } from "react-native";

import { HapticTab } from "@/components/HapticTab";
import { IconSymbol } from "@/components/ui/IconSymbol";
import TabBarBackground from "@/components/ui/TabBarBackground";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";

import {
  PaperProvider,
  MD3LightTheme,
  MD3DarkTheme,
  Icon,
} from "react-native-paper";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  // Choose the appropriate Paper theme
  const paperTheme = colorScheme === "dark" ? MD3DarkTheme : MD3LightTheme;

  return (
    <PaperProvider theme={paperTheme}>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
          headerShown: false,
          tabBarButton: HapticTab,
          tabBarBackground: TabBarBackground,
          tabBarStyle: Platform.select({
            ios: {
              position: "absolute",
            },
            default: {},
          }),
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: "Home",
            tabBarIcon: ({ color }) => (
              <Icon source="home" color={color} size={26} />
            ),
          }}
        />
        <Tabs.Screen
          name="pomodoro"
          options={{
            title: "Pomodoro",
            tabBarIcon: ({ color }) => (
              <Icon source="clock" color={color} size={26} />
            ),
          }}
        />
        <Tabs.Screen
          name="settings"
          options={{
            title: "Settings",
            tabBarIcon: ({ color }) => (
              <Icon source="cog" color={color} size={26} />
            ),
          }}
        />
      </Tabs>
    </PaperProvider>
  );
}
