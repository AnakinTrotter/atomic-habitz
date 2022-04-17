import { StatusBar } from "expo-status-bar";
import { URLS } from "../constants/urls.js";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
import { COLORS } from "../constants/colors";
import { FONT } from "../constants/font";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onLoginPress = async () => {
    console.log("Login pressed: " + username.username + ", " + password.password);
    let route = URLS.base + 'api/auth/login';
    const response = await fetch(route, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: username.username,
        password: password.password
      }),
    });
  
    let responseData = await response.json();
    console.log(responseData);
  }

  return (
    <View style={styles.container}>

      <Text style={[FONT.h1b, styles.title]}>Habit Stack</Text>

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Username"
          placeholderTextColor={COLORS.secondary}
          onChangeText={(username) => setUsername({username})}
        />
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password"
          placeholderTextColor={COLORS.secondary}
          secureTextEntry={true}
          onChangeText={(password) => setPassword({password})}
        />
      </View>

      <TouchableOpacity style={styles.loginBtn} onPress={onLoginPress}>
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  image: {
    marginBottom: 40,
  },

  inputView: {
    backgroundColor: COLORS.primary,
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,

    alignItems: "center",
  },

  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },

  forgot_button: {
    height: 30,
    marginBottom: 30,
  },

  loginBtn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: COLORS.tertiary,
  },
  title: {
    paddingVertical: 70
  }
});