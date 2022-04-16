import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { COLORS } from "../constants/colors";
import { FONT } from "../constants/font";

import HomeHeaderView from "../components/HomeHeaderView.js";

function HomeScreen(props) {
  // the HomeHeaderView is for testing rn
  return (
    <View style={styles.container}>
      <Text style={FONT.h1}>Hi this is the home screen</Text>
      <Text style={FONT.p1}>Noto Sans font</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primary,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default HomeScreen;
