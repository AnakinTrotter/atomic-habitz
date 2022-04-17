import {
  ScrollView,
  StyleSheet,
  SafeAreaView,
  View,
  TextInput,
  Text,
  TouchableOpacity,
  FlatList,
} from "react-native";

import HomeHeaderView from "../components/HomeHeaderView.js";
import { COLORS } from "../constants/colors";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import HabitStackView from "../components/HabitStackView.js";
import { render } from "react-dom";

function Home(props) {
  const data = [
    {
      habits: ["one", "two", "three"],
      name: "One",
    },
    {
      habits: ["one", "two", "three"],
      name: "Two",
    },
    {
      habits: ["one", "two", "three"],
      name: "Three",
    },
  ];

  const renderItem = ({ item }) => <HabitStackView habits={item.habits} />;
  // const renderItem = ({item}) => <Text>{item.name}</Text>

  // the HomeHeaderView is for testing rn
  return (
    <SafeAreaView style={styles.safeContainer}>
      <ScrollView style={styles.container}>
        <HomeHeaderView style={styles.header} />
        <HabitStackView habits={data[0].habits} />
        <HabitStackView habits={data[0].habits} />
        <HabitStackView habits={data[0].habits} />
        {/* <FlatList style={{flex: 1}} data={data} renderItem={renderItem} keyExtractor={(item, index) => index.toString()} /> */}
      </ScrollView>
      <TouchableOpacity
        style={{
          height: 80,
          width: 80,
          borderRadius: 80,
          justifyContent: "center",
          marginBottom: 30,
          marginRight: 30,
          alignSelf: "flex-end",
        }}
        onPress={() => {
          console.log("Button pressed");
        }}
      >
        <View style={styles.add}>
          <Icon size={70} style={{ color: COLORS.primary }} name="plus" />
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  container: {
    flex: 1,
    padding: 30,
  },
  header: {
    flex: 1,
  },

  add: {
    height: 80,
    width: 80,
    borderRadius: 80,
    backgroundColor: "white",
    shadowColor: "#171717",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    alignSelf: "flex-end",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Home;
