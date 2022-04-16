import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";

function FriendsScreen(props) {
  return (
    <View style={styles.container}>
      <Text>This is the friends screen</Text>
      <TouchableOpacity
        onPress={() => {
          props.navigation.navigate("ProfileScreen");
        }}
      >
        <Text
          style={{
            backgroundColor: "blue",
            color: "white",
            padding: 10,
            marginTop: 20,
          }}
        >
          Go to Profile Screen
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          props.navigation.navigate("HomeScreen");
        }}
      >
        <Text
          style={{
            backgroundColor: "blue",
            color: "white",
            padding: 10,
            marginTop: 20,
          }}
        >
          Go to Home Screen
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "yellow",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default FriendsScreen;
