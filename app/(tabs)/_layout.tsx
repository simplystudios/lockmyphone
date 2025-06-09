// app/(tabs)/_layout.tsx
import { Tabs } from "expo-router";
import { useTheme } from "react-native-paper";
import { Platform } from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

export default function TabLayout() {
  const { colors } = useTheme();

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.primary, // Paper primary color
        tabBarInactiveTintColor: colors.onSurfaceVariant || "#888", // Paper's inactive color
        tabBarStyle: {
          backgroundColor: colors.surface, // Paper surface color
          borderTopWidth: 0,
          marginTop: 5,
          elevation: 4,
          ...Platform.select({
            ios: { position: "absolute" },
          }),
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={24} />
          ),
        }}
      />
      <Tabs.Screen
        name="pomodoro"
        options={{
          title: "Pomodoro",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="clock" color={color} size={24} />
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "Settings",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="cog" color={color} size={24} />
          ),
        }}
      />
    </Tabs>
  );
}
