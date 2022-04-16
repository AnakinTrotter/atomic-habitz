import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";

import HomeHeaderView from '../components/HomeHeaderView.js'

function HomeScreen(props) {
  // the HomeHeaderView is for testing rn
  return (
    <View style={styles.container}>
      <HomeHeaderView />
      <Text>Hi this is the home screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "green",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default HomeScreen;
