import React, { useState } from 'react';
import {View,StyleSheet,Alert,ScrollView, Pressable,TouchableHighlight, TouchableOpacity} from 'react-native';
import {Button,Card,Text,Appbar} from 'react-native-paper';
import FoodRemainCard from './FoodRemainCard';


export default function FoodRemainListCard() {
    const [showAll, setShowAll] = useState(false);

    const foodRemainData = [
        { id: 1, name: 'Station A', foodRemain: '100%', foodType: 'Cat Food', quantityOfPets: '2 pets' },
        { id: 2, name: 'Station B', foodRemain: '80%', foodType: 'Dog Food', quantityOfPets: '1 pet' },
        { id: 3, name: 'Station C', foodRemain: '60%', foodType: 'Fish Food', quantityOfPets: '3 pets' },
        { id: 4, name: 'Station D', foodRemain: '40%', foodType: 'Bird Food', quantityOfPets: '2 pets' },
        { id: 5, name: 'Station E', foodRemain: '20%', foodType: 'Rabbit Food', quantityOfPets: '1 pet' },
        { id: 6, name: 'Station F', foodRemain: '10%', foodType: 'Turtle Food', quantityOfPets: '2 pets' },
    ];

    const renderFoodRemainCards = () => {
        const dataToShow = showAll ? foodRemainData : foodRemainData.slice(0, 3); // Hiển thị tất cả hoặc chỉ 3 phần tử đầu tiên
        return dataToShow.map(food => (
            <FoodRemainCard
                key={food.id}
                stationName={food.name}
                stationFoodRemain={food.foodRemain}
                stationFoodType={food.foodType}
                quantityOfPets={food.quantityOfPets}
            />
        ));
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            {renderFoodRemainCards()}
            {foodRemainData.length > 3 && (
                <TouchableOpacity style={styles.toggleButton} onPress={() => setShowAll(!showAll)}>
                    <Text>{showAll ? 'Show Less' : 'Show More'}</Text>
                </TouchableOpacity>
            )}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        paddingVertical: 20,
    },
    toggleButton: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        backgroundColor: '#f0f0f0',
    },
});