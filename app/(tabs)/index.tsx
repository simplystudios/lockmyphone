import { Image } from "expo-image";
import { Platform, StyleSheet, View, FlatList, ScrollView } from "react-native";
import ExpressiveCircularProgress from "@/components/CircularProgress"; // adjust your path
import { useNavigation } from "@react-navigation/native";
import { TimerPickerModal } from "react-native-timer-picker";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { LinearGradient } from "expo-linear-gradient"; // or `import LinearGradient from "react-native-linear-gradient"`
import { router } from "expo-router";
import {
  PaperProvider,
  Snackbar,
  TextInput,
  FAB,
  Searchbar,
  MD3Colors,
  Button,
  Appbar,
  List,
  Dialog,
  Portal,
  Text,
  useTheme,
} from "react-native-paper";
import Svg, { Circle, Rect } from "react-native-svg";
import * as React from "react";
import { useEffect } from "react";
import { Background } from "@react-navigation/elements";
const saveGoals = async (goals) => {
  try {
    await AsyncStorage.setItem("userGoals", JSON.stringify(goals));
  } catch (e) {
    console.error("Failed to save goals", e);
  }
};

// Load data
const loadGoals = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem("userGoals");
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    console.error("Failed to load goals", e);
    return null;
  }
};

// Helper function to format time object to string like "HH:MM:SS" or "MM:SS"
const formatTime = ({
  hours,
  minutes,
  seconds,
}: {
  hours?: number;
  minutes?: number;
  seconds?: number;
}) => {
  const timeParts = [];

  if (hours !== undefined) {
    timeParts.push(hours.toString().padStart(2, "0"));
  }
  if (minutes !== undefined) {
    timeParts.push(minutes.toString().padStart(2, "0"));
  }
  if (seconds !== undefined) {
    timeParts.push(seconds.toString().padStart(2, "0"));
  }

  return timeParts.join(":");
};

export default function HomeScreen() {
  const name = "Ansh";
  const [defaultime, setDefaulttime] = React.useState(30);
  const [visiblesnbar, setVisiblesnbar] = React.useState(false);

  const onToggleSnackBar = () => setVisiblesnbar(true);

  const onDismissSnackBar = () => setVisiblesnbar(false);

  useEffect(() => {
    async function fetchGoals() {
      const storedGoals = await loadGoals();
      if (storedGoals) {
        setGoalist(storedGoals);
      }
    }
    fetchGoals();
  }, []);

  // React states inside the component
  const [showPicker, setShowPicker] = React.useState(false);
  const [alarmString, setAlarmString] = React.useState<string | null>(null);
  const [visible, setVisible] = React.useState(false);
  const [visible2, setVisible2] = React.useState(false);
  const [addbutdis, setButdis] = React.useState(false);
  const [goal, setGoal] = React.useState("");
  const [goaltime, setGoaltime] = React.useState(defaultime * 60); // defaultime in minutes, so multiply by 60
  const [goalist, setGoalist] = React.useState([
    { key: "Study", streak: 0, time: 1800 },
    { key: "Workout", streak: 0, time: 1800 },
    { key: "Yoga", streak: 0, time: 1800 },
    { key: "Running", streak: 0, time: 1800 },
  ]);

  const theme = useTheme();
  const nav = useNavigation();

  const closedopend = () => {
    if (goal.trim().length > 0) {
      hideDialog();
      showDialog2();
    }
  };

  const goalFlow = async () => {
    hideDialog2();
    if (goal.trim() !== "") {
      const newGoalList = [
        ...goalist,
        { key: goal, streak: 0, time: goaltime },
      ];
      setGoalist(newGoalList);
      setGoal("");
      setAlarmString(null);
      await saveGoals(newGoalList);
      onToggleSnackBar();
    }
  };

  const searchpress = () => {
    setButdis(false);
  };

  const showDialog = () => setVisible(true);
  const hideDialog = () => setVisible(false);
  const showDialog2 = () => setVisible2(true);
  const hideDialog2 = () => setVisible2(false);

  const goTo = (item: { key: string; time: number; streak: number }) => {
    router.push({
      pathname: "/timer",
      params: { item: JSON.stringify(item) },
    });
  };

  return (
    <PaperProvider>
      <Appbar.Header elevated={true}>
        <Appbar.Content title="Lock My Phone" />
        <Appbar.Action icon="information" onPress={() => {}} />
      </Appbar.Header>

      <FAB icon="plus" style={styles.fab} onPress={() => showDialog()} />

      <ScrollView
        contentContainerStyle={{ justifyContent: "space-evenly" }}
        style={{ flex: 1, padding: 10, marginTop: 0 }}
      >
        <View
          style={{
            backgroundColor: MD3Colors.neutralVariant20,
            padding: 30,
            margin: 5,
            marginTop: 8,
            marginBottom: 0,
            borderRadius: 30,
          }}
        >
          <Text style={{ marginBottom: 5, marginTop: 10 }} variant="bodyLarge">
            Welcome, {name}
          </Text>

          <Text style={{ marginBottom: 10 }} variant="displayMedium">
            What's your Goal today?
          </Text>
          <Text style={{ marginBottom: 30 }} variant="titleSmall">
            Choose from the options below
          </Text>

          <Searchbar
            style={{
              marginBottom: 20,
              backgroundColor: MD3Colors.neutralVariant30,
            }}
            onFocus={() => searchpress()}
            onBlur={() => setButdis(true)}
            placeholder="Search"
            mode="bar"
          />

          <Portal>
            <Dialog visible={visible} onDismiss={hideDialog}>
              <Dialog.Title>New Goal</Dialog.Title>
              <Dialog.Content>
                <Text style={{ marginBottom: 10 }} variant="bodyMedium">
                  Enter the goal name below and it will be added in the list of
                  your goals
                </Text>
                <TextInput
                  value={goal}
                  onChangeText={setGoal}
                  mode="outlined"
                  label={"Enter Goal Name"}
                />
              </Dialog.Content>
              <Dialog.Actions>
                <Button onPress={hideDialog}>Cancel</Button>
                <Button onPress={closedopend}>Next</Button>
              </Dialog.Actions>
            </Dialog>
          </Portal>

          <Portal>
            <Dialog visible={visible2} onDismiss={hideDialog2}>
              <Dialog.Title>Set time for {goal}</Dialog.Title>
              <Dialog.Content>
                <Text style={{ marginBottom: 10 }} variant="bodyMedium">
                  Enter the time you want to spend for this goal and it will be
                  saved. Whenever you click this goal, a Pomodoro session will
                  start with the time you gave. Note: time is in mins and
                  default time is 30 mins.
                </Text>
                <Text
                  style={{
                    fontSize: 18,
                    marginTop: 10,
                    marginBottom: 10,
                    textAlign: "center",
                    color: "#F1F1F1",
                  }}
                >
                  {alarmString !== null
                    ? `Goal Timer set for ${alarmString}`
                    : "No alarm set"}
                </Text>
                <Button
                  onPress={() => setShowPicker(true)}
                  mode="contained-tonal"
                  style={{ marginTop: 10, marginBottom: 10 }}
                >
                  Set Goal Time
                </Button>

                <TimerPickerModal
                  visible={showPicker}
                  setIsVisible={setShowPicker}
                  onConfirm={(pickedDuration) => {
                    // pickedDuration should be {hours, minutes, seconds}
                    setAlarmString(formatTime(pickedDuration));

                    // Update goaltime state in minutes
                    const totalSeconds =
                      (pickedDuration.hours ?? 0) * 3600 +
                      (pickedDuration.minutes ?? 0) * 60 +
                      (pickedDuration.seconds ?? 0);

                    setGoaltime(totalSeconds || defaultime * 60); // defaultime in minutes, so multiply
                    setShowPicker(false);
                  }}
                  modalTitle="Set Time For Goal"
                  onCancel={() => setShowPicker(false)}
                  closeOnOverlayPress
                  LinearGradient={LinearGradient}
                  styles={{
                    theme: "dark",
                  }}
                  modalProps={{
                    overlayOpacity: 0.2,
                  }}
                />
              </Dialog.Content>
              <Dialog.Actions>
                <Button onPress={hideDialog2}>Cancel</Button>
                <Button onPress={goalFlow}>Next</Button>
                <Snackbar
                  visible={visiblesnbar}
                  onDismiss={onDismissSnackBar}
                  action={{
                    label: "Undo",
                    onPress: () => {
                      // Do something
                    },
                  }}
                >
                  Hey there! I'm a Snackbar.
                </Snackbar>
              </Dialog.Actions>
            </Dialog>
          </Portal>
        </View>

        <View style={{ padding: 5 }}>
          {addbutdis && (
            <Button
              style={{
                marginBottom: 10,
                marginTop: 12,
                padding: 12,
                borderRadius: 20,
              }}
              mode="contained-tonal"
              onPress={showDialog}
            >
              Set New Goal
            </Button>
          )}
        </View>

        <FlatList
          style={{ marginTop: 0, marginBottom: 50 }}
          data={goalist}
          keyExtractor={(item) => item.key}
          renderItem={({ item }) => (
            <View>
              <List.Item
                title={item.key}
                style={{
                  backgroundColor: MD3Colors.neutralVariant20,
                  padding: 5,
                  margin: 2,
                  borderRadius: 24,
                }}
                onPress={() => goTo(item)}
                description={`${item.streak} Day Streak`}
                left={(props) => <List.Icon {...props} icon="bullseye-arrow" />}
                right={() => (
                  <Text
                    style={{
                      textAlign: "center",
                      marginTop: "auto",
                      marginBottom: "auto",
                      marginRight: 10,
                    }}
                  >
                    {(() => {
                      const totalSeconds = item.time; // Now directly seconds!
                      const hours = Math.floor(totalSeconds / 3600);
                      const minutes = Math.floor((totalSeconds % 3600) / 60);
                      const seconds = totalSeconds % 60;

                      if (hours > 0) {
                        return `${hours}h ${minutes.toString().padStart(2, "0")}m ${seconds.toString().padStart(2, "0")}s`;
                      } else {
                        return `${minutes}m ${seconds.toString().padStart(2, "0")}s`;
                      }
                    })()}
                  </Text>
                )}
              />
            </View>
          )}
        />
      </ScrollView>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  fab: {
    position: "absolute",
    margin: 16,
    padding: 2,
    right: 0,
    bottom: 0,
    zIndex: 100,
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
  circularContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 20,
    elevation: 4, // subtle shadow
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
});
