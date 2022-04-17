import {
  StyleSheet,
  SafeAreaView,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";

import HomeHeaderView from "../components/HomeHeaderView.js";
import { COLORS } from "../constants/colors";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import * as React from 'react';
import { Modal, Portal, Text, Button, Provider } from 'react-native-paper';

function Home(props) {
  const [visible, setVisible] = React.useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const containerStyle = {backgroundColor: 'white', padding: 20};
  // the HomeHeaderView is for testing rn
  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.container}>
        <HomeHeaderView style={styles.header} />
      </View>
      <Provider>
        <Portal>
          <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
            <Text>Example Modal.  Click outside this area to dismiss.</Text>
          </Modal>
          <TouchableOpacity onPress={showModal} style={styles.pog}>
            <View style={styles.add}>
              <Icon size={70} style={{ color: COLORS.primary }} name="plus" />
            </View>
          </TouchableOpacity>
        </Portal>
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

  pog: {
    position: 'absolute',
    right: 10,
    bottom: 10
  }
});

export default Home;
