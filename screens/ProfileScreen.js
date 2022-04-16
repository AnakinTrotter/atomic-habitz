import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";

function ProfileScreen(props) {
  return (
    <View style={styles.container}>
      <Text>Hi this is the profile screen</Text>
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
      <TouchableOpacity
        onPress={() => {
          props.navigation.navigate("FriendsScreen");
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
          Go to Friends Screen
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default ProfileScreen;
