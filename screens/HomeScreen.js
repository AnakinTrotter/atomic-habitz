import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import HabitStackView from "../components/HabitCardView";

function HomeScreen(props) {
  return (
    <View style={styles.container}>
      <Text>Hi this is the home screen</Text>
      <HabitStackView habits={["1", "2", "3"]} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default HomeScreen;
