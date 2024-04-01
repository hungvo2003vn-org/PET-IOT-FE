import React from 'react';
import { View, StyleSheet,Text } from 'react-native';
import TipsListCard from './TipsListCard';

export default function TipsBackgroundCard() {
    return (
        <View style={styles.card}>
            <Text style = {styles.boldText}>Tips</Text>
            <TipsListCard />
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#FFF1E8',
        margin: 6,
        marginTop: 20,
        borderRadius: 12, 
        overflow: 'hidden', 
    },
    boldText: {
        fontWeight: 'bold',
        fontFamily: 'Roboto',
        fontSize: 20,
    },
});