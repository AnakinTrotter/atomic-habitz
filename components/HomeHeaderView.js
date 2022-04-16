import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import HomeDateText from './HomeDateText';

const HomeHeaderView = () => {
    return (
        <View>
            <Text style={styles.titleText}>Your Habits</Text>
            <HomeDateText />
        </View>
    );
}

const styles = StyleSheet.create({
    titleText: {
        fontSize: 32,
        fontWeight: "bold"
    }
});

export default HomeHeaderView;