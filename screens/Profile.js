import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { COLORS } from "../constants/colors";

const Profile = ({ navigation }) => {
  return (
    <View style={styles.container} >
      <Text>Hello this is the profile screen :)</Text>
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

export default Profile;
