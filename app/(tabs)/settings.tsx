import { Image } from "expo-image";
import { Platform, StyleSheet, View, ScrollView, FlatList } from "react-native";
import * as React from "react";

import { Collapsible } from "@/components/Collapsible";
import { ExternalLink } from "@/components/ExternalLink";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { IconSymbol } from "@/components/ui/IconSymbol";
import {
  PaperProvider,
  Icon,
  Divider,
  Searchbar,
  List,
  Portal,
  Dialog,
  MD3Colors,
  Text,
  Appbar,
  Button,
  Checkbox,
  Switch,
  RadioButton,
  Tooltip,
} from "react-native-paper";
// import { View } from "react-native-reanimated/lib/typescript/Animated";

export default function TabTwoScreen() {
  const name = "ansh";
  const goalist = [{}];
  return (
    <PaperProvider>
      <Appbar.Header elevated={true}>
        <Appbar.Content title="Settings" />
      </Appbar.Header>
      <ScrollView
        contentContainerStyle={{ justifyContent: "space-evenly" }}
        style={{ flex: 1, padding: 10, marginTop: 0 }}
      >
        <Searchbar
          style={{
            marginBottom: 20,
            marginTop: 10,
            backgroundColor: MD3Colors.neutralVariant30,
          }}
          onFocus={() => searchpress()}
          onBlur={() => setButdis(true)}
          placeholder="Search"
          mode="bar"
        />
        {/* <View
          style={{
            backgroundColor: MD3Colors.neutralVariant20,
            padding: 30,
            marginTop: 8,
            marginBottom: 0,
            borderRadius: 30,
          }}
        >
          <Text style={{ marginBottom: 20 }} variant="headlineLarge">
            Notifications
          </Text>
        </View> */}

        <FlatList
          style={{ marginTop: 0, marginBottom: 50 }}
          data={goalist}
          renderItem={({ item }) => (
            <View>
              <List.Item
                title="Prefrences"
                style={{
                  backgroundColor: MD3Colors.neutralVariant20,
                  padding: 5,
                  margin: 2,
                  marginBottom: 20,
                  borderRadius: 24,
                }}
                description="settings related to your prefrences"
                left={(props) => <List.Icon {...props} icon="tune" />}
              />
              <Divider />
              <Text style={{ marginTop: 20 }}>Features Settings</Text>
              <List.Item
                title="Notifications"
                style={{
                  backgroundColor: MD3Colors.neutralVariant20,
                  padding: 5,
                  margin: 2,
                  marginTop: 20,
                  borderRadius: 24,
                }}
                description="settings related to notifications"
                left={(props) => <List.Icon {...props} icon="bell" />}
              />
              <List.Item
                title="Pomodoro Timer"
                style={{
                  backgroundColor: MD3Colors.neutralVariant20,
                  padding: 5,
                  margin: 2,
                  borderRadius: 24,
                }}
                description="settings related to pomodoro timer"
                left={(props) => <List.Icon {...props} icon="clock" />}
              />
            </View>
          )}
        />
      </ScrollView>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: "#808080",
    bottom: -90,
    left: -59,
    position: "absolute",
  },
  titleContainer: {
    flexDirection: "row",
    gap: 8,
  },
});
