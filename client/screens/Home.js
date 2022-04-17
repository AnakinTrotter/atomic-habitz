import {
  ScrollView,
  StyleSheet,
  SafeAreaView,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
} from "react-native";

import HomeHeaderView from "../components/HomeHeaderView";
import StackChooser from "../components/StackChooser";
import StackAdder from "../components/StackAdder";
import HabitAdder from "../components/HabitAdder";
import { COLORS } from "../constants/colors";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import HabitStackView from "../components/HabitStackView.js";
import { render } from "react-dom";
import * as React from 'react';
import { Modal, Portal, Text, Button, Provider } from 'react-native-paper';

function Home(props) {
  const [visible, setVisible] = React.useState(false);
  const [addingHabit, setAddingHabit] = React.useState(false);
  const [addingStack, setAddingStack] = React.useState(false);

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

  const showModal = () => setVisible(true);
  const hideModal = () => {
    setVisible(false);
    setAddingHabit(false);
    setAddingStack(false);
  }
  const containerStyle = {backgroundColor: 'white', padding: 20};
  // the HomeHeaderView is for testing rn
  return (
    <SafeAreaView style={styles.safeContainer}>
      <Provider>
        <Portal>
          <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
            {!(addingHabit || addingStack) ? <StackChooser setAddingStack={setAddingStack} setAddingHabit={setAddingHabit}/> : null}
            {addingHabit && !addingStack ? <HabitAdder setAddingStack={setAddingStack} setAddingHabit={setAddingHabit} /> : null}
            {addingStack && !addingHabit ? <StackAdder setAddingStack={setAddingStack} setAddingHabit={setAddingHabit} /> : null}
          </Modal>
        </Portal>
        <ScrollView style={styles.container}>
          <HomeHeaderView style={styles.header} />
          {data.map((item, i) => <HabitStackView key={i} habits={item.habits} />)}
        </ScrollView>
        <TouchableOpacity onPress={showModal} style={styles.addButton}>
          <View style={styles.add}>
            <Icon size={70} style={{ color: COLORS.primary }} name="plus" />
          </View>
        </TouchableOpacity>
      </Provider>
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
    flexDirection: 'column',
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
    alignItems: "center",
    justifyContent: "center",
  },
  addButton: {
    position: 'absolute',
    right: 10,
    bottom: 10
  }
});

export default Home;