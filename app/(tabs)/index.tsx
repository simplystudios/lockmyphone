import { Image } from "expo-image";
import { Platform, StyleSheet, View, FlatList, ScrollView } from "react-native";
import ExpressiveCircularProgress from "@/components/CircularProgress"; // adjust your path
import {
  PaperProvider,
  ActivityIndicator,
  MD2Colors,
  TextInput,
  ProgressBar,
  Searchbar,
  MD3Colors,
  Button,
  Appbar,
  Card,
  List,
  Dialog,
  Portal,
  Avatar,
  Text,
  useTheme,
} from "react-native-paper";
import Svg, { Circle, Rect } from "react-native-svg";
import * as React from "react";
import { Background } from "@react-navigation/elements";

// Expressive Material You-style Circular Progress

export default function HomeScreen() {
  const name = "Ansh";
  const defaultime = 30;
  const [visible, setVisible] = React.useState(false);
  const [visible2, setVisible2] = React.useState(false);
  const [goal, setGoal] = React.useState("");
  const [goaltime, setGoaltime] = React.useState(defaultime);
  const [goalist, setGoalist] = React.useState([
    { key: "Study", streak: 0, time: 30 },
    { key: "Workout", streak: 0, time: 30 },
    { key: "Yoga", streak: 0, time: 30 },
    { key: "Running", streak: 0, time: 30 },
  ]);
  const [addbutdis, setButdis] = React.useState(true);

  const closedopend = () => {
    hideDialog();
    showDialog2();
  };

  const goalFlow = () => {
    hideDialog2();
    if (goal.trim() !== "") {
      setGoalist((prev) => [...prev, { key: goal, streak: 0, time: goaltime }]);
      setGoal("");
      setGoaltime(defaultime);
    }
  };

  const searchpress = () => {
    setButdis(false);
  };

  const showDialog = () => setVisible(true);

  const hideDialog = () => setVisible(false);

  const showDialog2 = () => setVisible2(true);

  const hideDialog2 = () => setVisible2(false);

  // const [text, setText] = React.useState("");
  const theme = useTheme();

  return (
    <PaperProvider>
      <Appbar.Header elevated={true}>
        <Appbar.Content title="Lock My Phone" />
        <Appbar.Action icon="information" onPress={() => {}} />
      </Appbar.Header>
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
          if (goal.)
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
                  Enter the goal name bellow and it will be added in the list of
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
              <Dialog.Title>set time for {goal}</Dialog.Title>
              <Dialog.Content>
                <Text style={{ marginBottom: 10 }} variant="bodyMedium">
                  Enter the time you wanna spend for this goal and it will be
                  saved and whenever you click this goal a pomodoro session will
                  start with the time you gave Note: time is in mins and default
                  time is 30 mins you can change it in settings
                </Text>
                <TextInput
                  value={goaltime}
                  onChangeText={setGoaltime}
                  mode="outlined"
                  inputMode="decimal"
                  label={"Enter Goal Time"}
                />
              </Dialog.Content>
              <Dialog.Actions>
                <Button onPress={hideDialog}>Cancel</Button>
                <Button onPress={goalFlow}>Next</Button>
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
                description={`${item.streak} Day Streak`}
                left={(props) => <List.Icon {...props} icon="bullseye-arrow" />}
                right={(props) => (
                  <Text
                    style={{
                      textAlign: "center",
                      marginTop: "auto",
                      marginBottom: "auto",
                    }}
                  >
                    {item.time} mins
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
