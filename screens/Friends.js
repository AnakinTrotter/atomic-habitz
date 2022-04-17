import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
} from "react-native";

import { COLORS } from "../constants/colors";

const Friends = ({ navigation }) => {
  const data = [
    {
      name: "Euglo",
    },
    {
      name: "Anakin",
    },
    {
      name: "Jakob",
    },
  ];

  const Item = ({ name }) => (
    <View style={styles.item}>
      <Text>{name}</Text>
    </View>
  );

  const renderItem = ({ item }) => <Item name={item.name} />;

  return (
    <SafeAreaView style={styles.container}>
      <Text style={{ padding: 50 }}>Hello this is the friends screen :)</Text>
      <FlatList
        // style={{ backgroundColor: "red" }}
        data={data}
        renderItem={renderItem}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    // alignItems: "center",
    // justifyContent: "center",
  },

  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
});

export default Friends;
