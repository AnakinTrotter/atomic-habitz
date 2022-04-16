import React, { useEffect, useState } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { FONT } from '../constants/font.js'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

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
            <Icon name='account-circle' size='96' />
            <Text style={FONT.h1b}>{data.name}</Text>
            <Text style={FONT.p1}>{data.desc}</Text>
            <Text style={FONT.p1b}>HIGHEST STREAK: {data.best}🔥</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
});

export default UserProfileView;