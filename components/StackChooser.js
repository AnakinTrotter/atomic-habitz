import React from 'react'
import { View, Text, StyleSheet, FlatList, Modal, Portal, Provider, TouchableOpacity, Icon, useEffect } from 'react-native'
import HomeDateText from './HomeDateText';
import { FONT } from '../constants/font.js';
import { COLORS } from "../constants/colors";
import { SafeAreaView } from 'react-native-safe-area-context';
import AppButton from './AppButton';


function StackChooser({ setAddingStack, setAddingHabit }) {
    return (
        <View>
            <Text style={ FONT.h1b }>Habit Stacker</Text>
            <AppButton onPress={() => {setAddingHabit(false); setAddingStack(true)}} title="Create a new stack" />
            <AppButton onPress={() => {setAddingHabit(true); setAddingStack(false)}} title="Stack a new habit" />
        </View>
    );
}

export default StackChooser;