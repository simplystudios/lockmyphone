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
        {/* <Searchbar
          style={{
            marginBottom: 4,
            marginTop: 10,
            backgroundColor: MD3Colors.neutralVariant30,
          }}
          onFocus={() => searchpress()}
          onBlur={() => setButdis(true)}
          placeholder="Search"
          mode="bar"
        /> */}
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
              <Text
                style={{ marginTop: 20, color: MD3Colors.neutralVariant60 }}
              >
                Features Settings
              </Text>
              <List.Item
                title="Prefrences"
                style={{
                  backgroundColor: MD3Colors.neutralVariant20,
                  padding: 5,
                  margin: 2,
                  marginTop: 20,
                  borderRadius: 24,
                }}
                description="Customize how the app works for you."
                left={(props) => <List.Icon {...props} icon="tune" />}
              />
              <List.Item
                title="Notifications"
                style={{
                  backgroundColor: MD3Colors.neutralVariant20,
                  padding: 5,
                  margin: 2,

                  borderRadius: 24,
                }}
                description="Control app alerts."
                left={(props) => <List.Icon {...props} icon="bell-outline" />}
              />

              {/*  <List.Item
                title="Privacy"
                style={{
                  backgroundColor: MD3Colors.neutralVariant20,
                  padding: 5,
                  margin: 2,

                  borderRadius: 24,
                }}
                description="lockmyphone's community"
                left={(props) => <List.Icon {...props} icon="shield-lock" />}
              />

              <List.Item
                title="Stats"
                style={{
                  backgroundColor: MD3Colors.neutralVariant20,
                  padding: 5,
                  margin: 2,

                  borderRadius: 24,
                }}
                description="lockmyphone's community"
                left={(props) => <List.Icon {...props} icon="chart-box" />}
              /> */}

              <List.Item
                title="Goals"
                style={{
                  backgroundColor: MD3Colors.neutralVariant20,
                  padding: 5,
                  margin: 2,

                  borderRadius: 24,
                }}
                description="Manage your goals."
                left={(props) => <List.Icon {...props} icon="bullseye-arrow" />}
              />
              <List.Item
                title="Pomodoro Timer"
                style={{
                  backgroundColor: MD3Colors.neutralVariant20,
                  padding: 5,
                  margin: 2,
                  borderRadius: 24,
                }}
                description="Timer setup."
                left={(props) => <List.Icon {...props} icon="clock-outline" />}
              />
              <List.Item
                title="Backup & Restore"
                style={{
                  backgroundColor: MD3Colors.neutralVariant20,
                  padding: 5,
                  margin: 2,

                  borderRadius: 24,
                }}
                description="Save or recover your data."
                left={(props) => <List.Icon {...props} icon="backup-restore" />}
              />

              <Text
                style={{ marginTop: 20, color: MD3Colors.neutralVariant60 }}
              >
                About LMP
              </Text>
              <List.Item
                title="About App"
                style={{
                  backgroundColor: MD3Colors.neutralVariant20,
                  padding: 5,
                  margin: 2,
                  marginTop: 20,
                  borderRadius: 24,
                }}
                description="App and contributors info."
                left={(props) => <List.Icon {...props} icon="information" />}
              />

              <List.Item
                title="Terms And Conditions"
                style={{
                  backgroundColor: MD3Colors.neutralVariant20,
                  padding: 5,
                  margin: 2,

                  borderRadius: 24,
                }}
                description="Review terms and conditions."
                left={(props) => (
                  <List.Icon {...props} icon="book-open-variant" />
                )}
              />
              <List.Item
                title="Open Source Licences"
                style={{
                  backgroundColor: MD3Colors.neutralVariant20,
                  padding: 5,
                  margin: 2,

                  borderRadius: 24,
                }}
                description="Open source licences"
                left={(props) => <List.Icon {...props} icon="license" />}
              />
              <List.Item
                title="Report a Bug"
                style={{
                  backgroundColor: MD3Colors.neutralVariant20,
                  padding: 5,
                  margin: 2,

                  borderRadius: 24,
                }}
                description="Report bugs or issues"
                left={(props) => <List.Icon {...props} icon="bug" />}
              />

              <Text
                style={{
                  textAlign: "center",
                  marginTop: 20,
                  color: MD3Colors.neutralVariant60,
                }}
              >
                Lockmyphone v1.0.0 alpha
              </Text>
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
