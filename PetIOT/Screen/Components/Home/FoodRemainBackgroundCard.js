import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import FoodRemainListCard from './FoodRemainListCard';

export default function FoodRemainBackgroundCard() {
    return (
        <View style={styles.card}>
            <Text style = {styles.boldText}>Food remain</Text>
            <FoodRemainListCard />
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