import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { FONT } from "../constants/font.js";
import { COLORS } from "../constants/colors.js";
import { URLS } from "../constants/urls.js";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import ProfileTreeView from "./ProfileTreeView.js";

const UserProfileView = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(async () => {
    let testData = {
      name: 'pog',
      desc: 'poggers',
      best: 420
    }
    let route = URLS.base + 'api/users'
    let res = await fetch(route)
    let data = await res.json()
    console.log(data)
    setData(data[0])
  }, []);

  return (
    <View style={styles.container}>
      <Icon name="account-circle" color={COLORS.brown} size={96} />
      <TouchableOpacity onPress={onPress} style={styles.settingsIcon}>
        <Icon color="gray" name="cog" size={48} />
      </TouchableOpacity>
      <View style={styles.nameText}>
        <Text style={FONT.h1b}>{data.name}</Text>
      </View>
      <View style={styles.divider}></View>
      <View style={styles.textBox}>
        <Text style={FONT.p1}>{data.desc}</Text>
      </View>
      <View style={styles.divider}></View>
      <View style={styles.textBox}>
        <Text style={FONT.p1b}>HIGHEST STREAK: 0 🔥</Text>
      </View>
      <View style={styles.divider}></View>
      <ProfileTreeView />
    </View>
  );
};

const onPress = () => {
  console.log("Settings pressed!");
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
