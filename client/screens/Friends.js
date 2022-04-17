import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
} from "react-native";

import { FONT } from "../constants/font"

const Friends = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ marginTop: 75 }}>
        <Text style={FONT.h1}>Quotes of the day:</Text>
      </View>
      <View style={{width:275, marginTop: 50}}>
        <Text style={FONT.p1}>The costs of your good habits are in the present. The costs of your bad habits are in the future.</Text>
      </View>
      <View style={{width:275, marginTop: 50}}>
        <Text style={FONT.p1}>Goals are good for setting a direction, but systems are best for making progress.</Text>
      </View>
      <View style={{width:275, marginTop: 50}}>
        <Text style={FONT.p1}>Every action you take is a vote for the type of person you wish to become.</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  }
});

export default Friends;
