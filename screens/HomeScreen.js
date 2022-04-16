import {
  StyleSheet,
  SafeAreaView,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";

import HomeHeaderView from '../components/HomeHeaderView.js'
import { COLORS } from '../constants/colors'

function HomeScreen(props) {
  // the HomeHeaderView is for testing rn
  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.container}>
        <HomeHeaderView style={styles.header} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: COLORS.background
  },
  container: {
    flex: 1,
    padding: 30
  },
  header: {
    flex: 1
  }
});

export default HomeScreen;
