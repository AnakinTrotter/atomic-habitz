import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";

import { COLORS } from '../constants/colors'

const Friends = ({ navigation }) => {
  return (
    <View style={styles.container} >
      <Text>Hello this is the friends screen :)</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Friends;
