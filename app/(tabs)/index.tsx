import { Image } from "expo-image";
import { Platform, StyleSheet, View, ScrollView, FlatList } from "react-native";
import { HelloWave } from "@/components/HelloWave";
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
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import Svg, { Circle } from "react-native-svg";
import * as React from "react";
import { Background } from "@react-navigation/elements";

const LeftContent = (props) => <Avatar.Icon {...props} icon="folder" />;

// Expressive Material You-style Circular Progress
const ExpressiveCircularProgress = ({
  size = 140,
  strokeWidth = 14,
  progress = 75, // percentage (0-100)
  accentColor,
  containerColor,
}) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (circumference * progress) / 100;

  return (
    <View style={styles.circularContainer}>
      <Svg width={size} height={size}>
        {/* Background track */}
        <Circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={containerColor}
          strokeWidth={strokeWidth}
          fill="none"
        />
        {/* Progress ring */}
        <Circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={accentColor}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray={`${circumference} ${circumference}`}
          strokeDashoffset={strokeDashoffset}
          fill="none"
          rotation="-90"
          originX={size / 2}
          originY={size / 2}
        />
      </Svg>
      {/* Centered percentage text */}
      <Text
        variant="titleLarge"
        style={{ position: "absolute", color: accentColor }}
      >
        {`${progress}`}
      </Text>
    </View>
  );
};

export default function HomeScreen() {
  const name = "Ansh";
  const [visible, setVisible] = React.useState(false);
  const [goal, setGoal] = React.useState();

  const goalFlow = () => {
    hideDialog();
  };

  const showDialog = () => setVisible(true);

  const hideDialog = () => setVisible(false);

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
            What's your goal today?
          </Text>
          <Text style={{ marginBottom: 30 }} variant="titleSmall">
            Choose from the options below
          </Text>
          <Searchbar
            style={{
              marginBottom: 20,
              backgroundColor: MD3Colors.neutralVariant30,
            }}
            placeholder="Search"
            mode="bar"
          />
          <Portal>
            <Dialog visible={visible} onDismiss={hideDialog}>
              <Dialog.Title>New Goal</Dialog.Title>
              <Dialog.Content>
                <Text style={{ marginBottom: 5 }} variant="bodyMedium">
                  Enter the goal name bellow and it will be added in the list of
                  your goals
                </Text>
                <TextInput
                  value={goal}
                  mode="outlined"
                  label={"Enter Goal Name"}
                />
              </Dialog.Content>
              <Dialog.Actions>
                <Button onPress={hideDialog}>Cancel</Button>
                <Button onPress={goalFlow}>Next</Button>
              </Dialog.Actions>
            </Dialog>
          </Portal>
          <View style={{ display: "none" }}>
            <Text style={{ marginBottom: 10 }} variant="titleMedium">
              Most Used Goal
            </Text>

            <Button style={{ marginBottom: 20 }} mode="contained-tonal">
              Study
            </Button>
          </View>
        </View>
        <View style={{ padding: 5 }}>
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
        </View>

        <FlatList
          style={{ marginTop: 0 }}
          data={[
            { key: "Study", emoji: "📚" },
            { key: "Work", emoji: "📚" },
            { key: "Yoga", emoji: "📚" },
            { key: "Running", emoji: "📚" },
          ]}
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
                description="Streak - 1 day"
                left={(props) => <List.Icon {...props} icon="bullseye-arrow" />}
              />
            </View>
          )}
        />

        <ActivityIndicator animating={true} color={MD2Colors.red800} />

        <Card>
          <Card.Cover source={{ uri: "https://picsum.photos/700" }} />
          {/* <Card.Title
              title="Card Title"
              subtitle="Card Subtitle"
              left={LeftContent}
            /> */}
          <Card.Content style={{ marginTop: 15 }}>
            <Text variant="titleLarge">Card title</Text>
            <Text variant="bodyMedium">Card content</Text>
          </Card.Content>
          <Card.Actions>
            <Button>Cancel</Button>
            <Button>Ok</Button>
          </Card.Actions>
        </Card>

        <ProgressBar
          style={{ borderRadius: 10 }}
          progress={0.5}
          color={MD3Colors.error50}
        />

        {/* Expressive M3 Circular Progress Example */}
        <ExpressiveCircularProgress
          progress={15}
          accentColor={theme.colors.primary}
          containerColor={theme.colors.surfaceVariant}
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
