import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";

function HomeScreen(props) {
  return (
    <View style={styles.container}>
      <Text>Hi this is the home screen</Text>
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
