import React from "react";
import { useEffect } from "react";
import { useLocalSearchParams, router } from "expo-router";
import { useNavigation } from "@react-navigation/native";
import { View, StyleSheet } from "react-native";
import {
  Text,
  Button,
  useTheme,
  Dialog,
  Portal,
  Appbar,
} from "react-native-paper";
import ExpressiveCircularProgress from "@/components/CircularProgress"; // adjust your path

export default function PomodoroScreen() {
  const theme = useTheme();
  const navigation = useNavigation();
  const [visible, setVisible] = React.useState(false);
  const { item } = useLocalSearchParams();
  const parsedItem = JSON.parse(item);

  const showDialog = () => setVisible(true);

  const hideDialog = () => setVisible(false);

  const timegivenbyuser = parsedItem.time;
  const initialTime = timegivenbyuser; // 30 minutes
  const [timeLeft, setTimeLeft] = React.useState(initialTime); // initialTime in seconds
  useEffect(() => {
    // Stop when reaches zero

    const interval = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(interval); // Clean up
  }, [timeLeft]);

  return (
    <View>
      <Appbar.Header elevated={true}>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Appbar.Content title={`${parsedItem.key} Timer`} />
        <Appbar.Action icon="information" onPress={() => {}} />
      </Appbar.Header>
      <View style={{ height: 700, display: "flex", justifyContent: "center" }}>
        <ExpressiveCircularProgress
          accentColor={theme.colors.primary}
          size={300}
          progress={timeLeft}
          maxprog={initialTime}
          strokeWidth={16}
          containerColor={theme.colors.surfaceVariant}
        />
        <View
          style={{
            width: "100%",
            padding: 30,
            alignItems: "center",

            position: "absolute",
            bottom: 0,
          }}
        >
          <Button mode="text" onPress={showDialog}>
            Learn About Pomodoro Timer
          </Button>
          <Portal>
            <Dialog visible={visible} onDismiss={hideDialog}>
              <Dialog.Title>Pomodoro Timer</Dialog.Title>
              <Dialog.Content>
                <Text style={{ marginBottom: 0 }} variant="bodyMedium">
                  The Pomodoro timer in our app is a convenient tool for
                  boosting productivity and maintaining focus. Located in the
                  navigation bar, this timer automatically starts a 30-minute
                  session when clicked, and once the countdown reaches zero, it
                  restarts without any extra steps. This aligns with the
                  Pomodoro Technique, a time management method that breaks work
                  into short, focused intervals to combat burnout and improve
                  concentration. Whether you're studying for exams, working on a
                  project, or tackling any task that requires sustained effort,
                  this tool can help you stay on track by creating a clear
                  structure and encouraging brief mental resets between work
                  sessions.
                </Text>
              </Dialog.Content>
              <Dialog.Actions>
                <Button onPress={hideDialog}>Ok</Button>
              </Dialog.Actions>
            </Dialog>
          </Portal>
        </View>
      </View>
    </View>
  );
}
