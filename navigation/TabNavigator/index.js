import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Home from '../../screens/Home';
import Friends from '../../screens/Friends';
import Profile from '../../screens/Profile';
import { COLORS } from '../../constants/colors';
import CustomTabBar from './CustomTabBar';


const Tab = createBottomTabNavigator();

const Options = (route, color) => {
  let iconName;

  switch (route.name) {
    case 'Home':
      iconName = 'home-city';
      break;
    case 'Friends':
      iconName = 'set-center';
      break;
    case 'Profile':
      iconName = 'pine-tree';
      break;
    default:
      break;
  }

  return <Icon name={iconName} color={color} size={24}/>;
};

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({color}) => Options(route, color),
        tabBarActiveTintColor: COLORS.secondary,
        tabBarInactiveTintColor: COLORS.secondary,
        tabBarActiveBackgroundColor: COLORS.accent,
        tabBarInactiveBackgroundColor: COLORS.primary,
        tabBarStyle: [
          {
            "display": "flex"
          },
          null
        ]
      })}
      tabBar={(props) => <CustomTabBar {...props} />}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Friends" component={Friends} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

export default TabNavigator;