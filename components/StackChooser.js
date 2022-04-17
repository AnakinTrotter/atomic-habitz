import React from 'react'
import { View, Text, StyleSheet, FlatList, Modal, Portal, Provider, TouchableOpacity, Icon } from 'react-native'
import HomeDateText from './HomeDateText';
import { FONT } from '../constants/font.js';
import { COLORS } from "../constants/colors";


function StackChooser(props) {
    const [visible, setVisible] = React.useState(false);

    const showModal = () => setVisible(true);
    const hideModal = () => setVisible(false);
    const containerStyle = {backgroundColor: 'white', padding: 20};
    return (
        <View>
            <Text style={ FONT.h1b }>Add Habit To Stack</Text>
            <FlatList>
            </FlatList>
        </View>
    );
}

export default StackChooser;