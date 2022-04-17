import { StyleSheet, Text, View } from "react-native";
import RootNavigator from "./navigation/RootNavigator";
import {
  useFonts,
  NotoSans_400Regular,
  NotoSans_400Regular_Italic,
  NotoSans_700Bold,
  NotoSans_700Bold_Italic,
} from "@expo-google-fonts/noto-sans";
import AppLoading from "expo-app-loading";
import Login from "./screens/Login";
import { useState, useEffect } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  const Stack = createStackNavigator();

  // let [fontsLoaded] = useFonts({
  //   NotoSans_400Regular,
  //   NotoSans_700Bold,
  // });

  // if (!fontsLoaded) {
  //   return <AppLoading />;
  // }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Tabs"
          component={RootNavigator}
          options={{ headerShown: true }}
        />
      </Stack.Navigator>
    </NavigationContainer>

    // <RootNavigator />
    // <Login />
  );
}
