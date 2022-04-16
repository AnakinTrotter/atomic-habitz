import {
  StyleSheet,
  Text,
  SafeAreaView,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { COLORS } from "../constants/colors";
import UserProfileView from '../components/UserProfileView.js'

const Profile = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container} >
      <UserProfileView />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background
  },
});

export default Profile;
