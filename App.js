import { StyleSheet, Text, View } from "react-native";
<<<<<<< HEAD
import RootNavigator from "./navigation/RootNavigator";
=======
import { NavigationContainer } from "@react-navigation/native";
import BottomTab from "./navigation/BottomTab";
import {
  useFonts,
  NotoSans_400Regular,
  NotoSans_400Regular_Italic,
  NotoSans_700Bold,
  NotoSans_700Bold_Italic,
} from "@expo-google-fonts/noto-sans";
import AppLoading from "expo-app-loading";
>>>>>>> b7ca7cbe176fd9a9db0ff5c3a1bcb1a4c4db8bc6

export default function App() {
  let [fontsLoaded] = useFonts({
    NotoSans_400Regular,
    NotoSans_700Bold
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <RootNavigator />
  );
}
