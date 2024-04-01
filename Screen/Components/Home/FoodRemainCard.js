import React from 'react';
import {View,StyleSheet,Alert,ScrollView, Pressable,TouchableHighlight} from 'react-native';
import {Button,Card,Text} from 'react-native-paper';

export default function FoodRemainCard({ stationName, stationFoodRemain, stationFoodType, quantityOfPets }) {
    return (
        <Card style={styles.card}>
            <Card.Title
                title={<Text style={styles.boldText}>{stationName}</Text>}
                titleStyle={styles.cardTitleStyle}
                right={(props) => (
                    <View style={styles.foodRemainContainer}>
                        <Text style={styles.boldText}>{stationFoodRemain}</Text>
                    </View>
                )}
            />
            <Card.Content style={styles.cardContent}>
                <View style={styles.informationDisplayer}>
                    <Text style={styles.informationType}>{stationFoodType}</Text>
                </View>
                <View style={styles.informationDisplayer}>
                    <Text style={styles.informationType}>{quantityOfPets}</Text>
                </View>
            </Card.Content>
        </Card>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#FFDCC2',
        margin: 6,
        marginTop: 20,
    },
    cardTitleStyle: {
        color: '#221A14',
        fontSize: 16,
        fontFamily: 'Roboto',
        fontWeight: '600',
        lineHeight: 24,
        letterSpacing: 0.15,
    },
    informationDisplayer: {
        flexDirection: 'row',
        width: '100%',
        margin: 10,
    },
    informationType: {
        flex: 1,
        color: '#221A14',
        fontSize: 14,
        fontFamily: 'Roboto',
        fontWeight: '400',
        lineHeight: 20,
        letterSpacing: 0.25,
        textAlign: 'left', // Căn lề trái
    },
    foodRemainContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 10,
    },
    boldText: {
        fontWeight: 'bold', // In đậm
    },
});
