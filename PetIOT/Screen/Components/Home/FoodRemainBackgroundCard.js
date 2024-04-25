import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import FoodRemainListCard from './FoodRemainListCard';

export default function FoodRemainBackgroundCard() {
    return (
        <View style={styles.card}>
            <FoodRemainListCard />
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#FFF1E8',
        margin: 6,
        marginTop: 10,
        borderRadius: 12, 
        overflow: 'hidden', 
    },
    appSettingsText: {
        color: 'black',
        fontSize: 14,
        fontFamily: 'Roboto',
        fontWeight: '700', 
        lineHeight: 20,
        letterSpacing: 0.10,
        marginLeft: 10,
    },
});
