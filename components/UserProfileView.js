import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { FONT } from "../constants/font.js";
import { COLORS } from "../constants/colors.js";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import ProfileTreeView from "./ProfileTreeView.js";
import { Modal, Portal, Button, Provider } from "react-native-paper";

const UserProfileView = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [visible, setVisible] = useState(false);
  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const containerStyle = {
    backgroundColor: "white",
    padding: 20,
    flex: 0.2,
    width: 330,
    // alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
  };

  //onPress for Settings button
  const onPress = () => {
    // console.log("Settings pressed!");
    setVisible(true);
  };

  console.log(data);

  useEffect(() => {
    // fetch('https://raw.githubusercontent.com/adhithiravi/React-Hooks-Examples/master/testAPI.json')
    //   .then((response) => response.json())
    //   .then((json) => setData(json))
    //   .catch((error) => console.error(error))
    //   .finally(() => setLoading(false));
    let testData = {
      name: "xXJams69Xx",
      desc: "I like to play Minecraft bedwars with my friends!",
      best: 420,
    };
    setData(testData);
    setLoading(false);
  }, []);

  return (
    <View style={styles.container}>
      <Icon name="account-circle" color={COLORS.brown} size={96} />
      <TouchableOpacity onPress={showModal} style={styles.settingsIcon}>
        <Icon color="gray" name="cog" size={45} />
      </TouchableOpacity>

      <Modal
        transparent={true}
        visible={visible}
        onDismiss={hideModal}
        contentContainerStyle={containerStyle}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
        }}
      >
        <Text style={FONT.h1b}>Edit Profile</Text>
        <Text>test</Text>
      </Modal>

      <View style={styles.nameText}>
        <Text style={FONT.h1b}>{data.name}</Text>
      </View>
      <View style={styles.divider}></View>
      <View style={styles.textBox}>
        <Text style={FONT.p1}>{data.desc}</Text>
      </View>
      <View style={styles.divider}></View>
      <View style={styles.textBox}>
        <Text style={FONT.p1b}>HIGHEST STREAK: {data.best}🔥</Text>
      </View>
      <View style={styles.divider}></View>
      {/* <ProfileTreeView /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  divider: {
    width: 279,
    height: 2,
    backgroundColor: COLORS.secondary,
  },
  textBox: {
    width: 225,
    paddingTop: 10,
    paddingBottom: 10,
  },
  nameText: {
    marginBottom: 10,
  },
  settingsIcon: {
    position: "absolute",
    right: 10,
    top: 10,
  },
});

export default UserProfileView;
