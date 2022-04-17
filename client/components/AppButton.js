import {
  View,
  Button,
  StyleSheet,
  TouchableOpacity,
  Text,
  SafeAreaView,
} from "react-native";
import { COLORS } from "../constants/colors";

const AppButton = ({ onPress, title }) => (
  <TouchableOpacity onPress={onPress} style={styles.appButtonContainer}>
    <Text style={styles.appButtonText}>{title}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  appButtonContainer: {
    elevation: 8,
    backgroundColor: COLORS.tertiary,
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 5,
    marginBottom: 5,
  },
  appButtonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase",
  },
});

export default AppButton;
