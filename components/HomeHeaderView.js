import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import HomeDateText from './HomeDateText';

const styles = StyleSheet.create({
    titleText: {
        fontSize: 32,
        fontWeight: "bold"
    }
});

const HomeHeaderView = () => {
    return (
        <View>
            <Text style={ styles.titleText }>Your Habits</Text>
            <HomeDateText />
        </View>
    );
}

export default HomeHeaderView;