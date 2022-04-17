import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import HomeDateText from "./HomeDateText";
import { FONT } from "../constants/font.js";
import { COLORS } from "../constants/colors";
import { SafeAreaView } from "react-native-safe-area-context";

const styles = StyleSheet.create({
  inputSimpleBorder: {
    marginTop: 15,
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: COLORS.accent,
    padding: 10,
    fontSize: 20,
    borderRadius: 5,
    width: 250,
    height: 50
  },
  container: {
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    paddingVertical: 30
  }
});

function StackCreator({ setAddingHabit, setAddingStack }) {
  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          setAddingHabit(false);
          setAddingStack(false);
        }}
      >
        <View>
          <Icon
            size={30}
            style={{ color: COLORS.primary }}
            name="keyboard-backspace"
          />
        </View>
      </TouchableOpacity>
      <View style={styles.container}>
        <Text style={FONT.h1b}>Stack Adder</Text>
        <TextInput
          style={styles.inputSimpleBorder}
          size={30}
          placeholder="Stack Name"
        />
        <TextInput
          style={styles.inputSimpleBorder}
          size={30}
          placeholder="Time To Begin Stack"
        />
      </View>
    </View>
  );
}

export default StackCreator;
