import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import HomeDateText from './HomeDateText';
import { FONT } from '../constants/font.js'

const HomeHeaderView = () => {
    return (
        <View>
            <Text style={ FONT.h1b }>Your Habits</Text>
            <HomeDateText />
        </View>
    );
}

export default HomeHeaderView;