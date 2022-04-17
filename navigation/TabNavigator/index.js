import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import Home from "../../screens/Home";
import Friends from "../../screens/Friends";
import Profile from "../../screens/Profile";
import Login from "../../screens/Login";
import LoginToSee from "../../screens/LoginToSee";
import { AUTHENTICATION } from "../../constants/authentication";
import { COLORS } from "../../constants/colors";
import CustomTabBar from "./CustomTabBar";

const Tab = createBottomTabNavigator();

const Options = (route, color) => {
  let iconName;

  switch (route.name) {
    case "Home":
      iconName = "home-city";
      break;
    case "Friends":
      iconName = "set-center";
      break;
    case "Profile":
      iconName = "pine-tree";
      break;
    default:
      break;
  }

  return <Icon name={iconName} color={color} size={24} />;
};

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color }) => Options(route, color),
        tabBarActiveTintColor: COLORS.secondary,
        tabBarInactiveTintColor: COLORS.grey,
        tabBarStyle: [
          {
            display: "flex",
            paddingBottom: 15,
            backgroundColor: COLORS.primary,
          },
          null,
        ],
        headerShown: false,
      })}
      tabBar={(props) => <CustomTabBar {...props} />}
    >
      <Tab.Screen name="Home" component={AUTHENTICATION.loggedIn ? Home : LoginToSee} />
      <Tab.Screen name="Friends" component={AUTHENTICATION.loggedIn ? Friends : LoginToSee} />
      <Tab.Screen name="Profile" component={AUTHENTICATION.loggedIn ? Profile : Login} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
