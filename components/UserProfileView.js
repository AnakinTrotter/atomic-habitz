import React, { useEffect, useState } from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import { FONT } from '../constants/font.js'
import { COLORS } from '../constants/colors.js'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import ProfileTreeView from './ProfileTreeView.js'

const UserProfileView = () => {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    console.log(data);

    useEffect(() => {
        // fetch('https://raw.githubusercontent.com/adhithiravi/React-Hooks-Examples/master/testAPI.json')
        //   .then((response) => response.json())
        //   .then((json) => setData(json))
        //   .catch((error) => console.error(error))
        //   .finally(() => setLoading(false));
        let testData = {
            name: 'xXJams69Xx',
            desc: 'I like to play Minecraft bedwars with my friends!',
            best: 420
        };
        setData(testData);
        setLoading(false);
    }, []);

    return (
        <View style={styles.container}>
            <Icon name='account-circle' color={COLORS.brown} size='96' />
            <TouchableOpacity onPress={onPress} style={styles.settingsIcon}>
                <Icon color='gray' name='cog' size='48' />
            </TouchableOpacity>
            <View style={styles.nameText}>
                <Text style={FONT.h1b}>{data.name}</Text>
            </View>
            <View style={styles.divider}></View>
            <View style={styles.textBox}>
                <Text style={FONT.p1}>{data.desc}</Text>
            </View>
            <View style={styles.divider}></View>
            <View style={styles.textBox}>
                <Text style={FONT.p1b}>HIGHEST STREAK: {data.best}🔥</Text>
            </View>
            <View style={styles.divider}></View>
            <ProfileTreeView />
        </View>
    );
}

const onPress = () => {
    console.log('Settings pressed!');
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    divider: {
        width: 279,
        height: 2,
        backgroundColor: COLORS.secondary
    },
    textBox: {
        width: 225,
        paddingTop: 10,
        paddingBottom: 10,
    },
    nameText: {
        marginBottom: 10,
    },
    settingsIcon: {
        position: 'absolute',
        right: 10,
        top: 10
    }
});

export default UserProfileView;