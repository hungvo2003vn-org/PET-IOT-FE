import React from 'react';
import { View, StyleSheet, Pressable } from 'react-native'; // Bỏ các import không sử dụng
import { Button, Card, Text } from 'react-native-paper';

export default function FoodRemainCard({ stationName, stationFoodRemain, stationMode,  stationFoodType }) { // Sửa thứ tự props
    return (
        <Card style={styles.card}>
            <Card.Title
                title={stationName}
                titleStyle={styles.cardTitleStyle}
                right={(props) => (
                    <View style={styles.foodRemainContainer}>
                        <Text style={styles.cardTitleStyle}>{stationFoodRemain}</Text>
                    </View>
                )}
            />
            <Card.Content style={styles.cardContent}>
                <View style={styles.informationDisplayer}>
                    <Text style={styles.informationType}>Food type</Text>
                    <Text style={styles.informationValue}>{stationFoodType}</Text>
                </View>
                <View style={styles.informationDisplayer}>
                    <Text style={styles.informationType}>Mode</Text>
                    <Text style={styles.informationValue}>{stationMode}</Text>
                </View>
            </Card.Content>
        </Card>
    )
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#FFDCC2',
        margin: 6,
        marginTop: 10,
    },
    cardTitleStyle: {
        color: '#221A14',
        fontSize: 16,
        fontFamily: 'Roboto',
        fontWeight: '700',
        lineHeight: 20,
        letterSpacing: 0.15,
        
    },
    informationDisplayer: {
        flexDirection: 'row',
        width: '100%',
        margin: 10,
        marginTop: -5,
    },
    informationType: {
        flex: 1,
        color: '#221A14',
        fontSize: 14,
        fontFamily: 'Roboto',
        fontWeight: '400',
        lineHeight: 20,
        letterSpacing: 0.25,
    },
    informationValue:{
        flex:1,
        color:'#221A14',
        fontSize: 14,
        fontFamily:'Roboto',
        fontWeight: '400',
        lineHeight: 20,
        letterSpacing: 0.25,
        textAlign:'right'
    },
    foodRemainContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 10,
    },
});
