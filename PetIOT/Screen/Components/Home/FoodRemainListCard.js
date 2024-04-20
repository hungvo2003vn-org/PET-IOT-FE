import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import FoodRemainCard from './FoodRemainCard';
import stationLoader from '../../../HandlingFunctions/Home/stationLoader';

export default function FoodRemainListCard() {
    const [stationList, setStationList] = useState([]);
    const [showAll, setShowAll] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await stationLoader();
                setStationList(data);
            } catch (error) {
                console.error('Error fetching data:', error);
                // Handle error state or retry logic as needed
            }
        }

        fetchData();
    }, []); // Empty dependency array: runs only on initial render

    const toggleShowAll = () => {
        setShowAll(!showAll);
    };

    const displayedStations = showAll ? stationList : stationList.slice(0, 3);

    return (
        <View style={styles.container}>
            {displayedStations.map((station) => (
                <FoodRemainCard
                    key={station.station_id} // Ensure a unique key for each item
                    stationName={station.station_id}
                    stationStatus='Online'
                    stationFoodRemain='100%'
                />
            ))}
            {stationList.length > 3 && (
                <TouchableOpacity onPress={toggleShowAll} style={styles.toggleButton}>
                    <Text>{showAll ? 'Show less' : 'Show more'}</Text>
                </TouchableOpacity>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: 20,
        paddingHorizontal: 10, // Adjust padding as needed
    },
    toggleButton: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        backgroundColor: '#f0f0f0',
    },
    boldText: {
        fontWeight: 'bold',
        fontFamily: 'Roboto',
        fontSize: 20,
    },
});