import {
  StyleSheet,
  SafeAreaView,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";

import HomeHeaderView from "../components/HomeHeaderView.js";
import { COLORS } from "../constants/colors";

function HomeScreen(props) {
  // the HomeHeaderView is for testing rn
  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.container}>
        <HomeHeaderView style={styles.header} />
      </View>
      <TouchableOpacity
        style={styles.add}
        onPress={() => {
          console.log("Button pressed");
        }}
      ></TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  container: {
    flex: 1,
    padding: 30,
  },
  header: {
    flex: 1,
  },

  add: {
    height: 80,
    width: 80,
    borderRadius: 80,
    marginRight: 10,
    backgroundColor: "white",
    shadowColor: "#171717",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
});

export default HomeScreen;
