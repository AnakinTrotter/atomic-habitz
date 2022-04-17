import React from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import HomeDateText from './HomeDateText';
import { FONT } from '../constants/font.js';
import { COLORS } from "../constants/colors";
import { SafeAreaView } from 'react-native-safe-area-context';


function HabitCreator({ setAddingHabit, setAddingStack }) {
    return (
        <View>
            <TouchableOpacity onPress={() => {setAddingHabit(false); setAddingStack(false)}}>
                <View>
                    <Icon size={30} style={{ color: COLORS.primary }} name="keyboard-backspace" />
                </View>
            </TouchableOpacity>
            <Text style={ FONT.h1b }>Habit Adder</Text>
            <TextInput size={30} placeholder="Habit Name"/>
            <TextInput size={30} placeholder="Stack to add to"/>
        </View>
    );
}

export default HabitCreator;