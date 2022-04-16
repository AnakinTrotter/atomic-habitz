import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import FriendsScreen from "../screens/FriendsScreen";
import ProfileScreen from "../screens/ProfileScreen";


export default function BottomTab(props) {
    const AppBottomTabs = createBottomTabNavigator();
    
    return (
        <AppBottomTabs.Navigator>
            <AppBottomTabs.Screen
                name="Home"
                component={HomeScreen}
                options={{ headerShown: false }}
            />
            <AppBottomTabs.Screen
                name="Friends"
                component={FriendsScreen}
                options={{ headerShown: false }}
            />
            <AppBottomTabs.Screen
                name="Profile"
                component={ProfileScreen}
                options={{ headerShown: false }}
            />
        </AppBottomTabs.Navigator>
    )
}