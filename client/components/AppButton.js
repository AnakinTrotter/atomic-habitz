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
    backgroundColor: COLORS.accent,
    borderRadius: 15,
    paddingVertical: 10,
    paddingHorizontal: 5,
    marginTop: 10,
    width: 250,
    height: 50,
    justifyContent: "center",
    alignItems: "center"
  },
  appButtonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    textTransform: "uppercase",
  },
});

export default AppButton;
