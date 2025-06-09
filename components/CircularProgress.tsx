import Svg, { Circle } from "react-native-svg";
import { View, StyleSheet } from "react-native";
import { Text } from "react-native-paper";

const ExpressiveCircularProgress = ({
  size = 140,
  strokeWidth = 14,
  progress = 75, // seconds remaining
  maxprog = 1800, // default max (30 mins in seconds)
  accentColor,
  containerColor,
}) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (circumference * progress) / maxprog;

  // Calculate hours, minutes, seconds from seconds
  const hours = Math.floor(progress / 3600);
  const minutes = Math.floor((progress % 3600) / 60);
  const seconds = progress % 60;

  // Format time to always include seconds
  let formattedTime;
  if (hours > 0) {
    formattedTime = `${hours}:${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  } else {
    formattedTime = `${minutes.toString()}:${seconds.toString().padStart(2, "0")}`;
  }

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
      <Text
        variant="displayLarge"
        style={{ position: "absolute", color: accentColor }}
      >
        {formattedTime}
      </Text>
    </View>
  );
};

export default ExpressiveCircularProgress;

const styles = StyleSheet.create({
  circularContainer: {
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
});
