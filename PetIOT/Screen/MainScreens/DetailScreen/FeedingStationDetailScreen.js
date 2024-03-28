import React from 'react';
import {View,Text} from 'react-native';

export default function FeedingStationDetailScreen({navigation,route}){
    return (
        <View>
            <Text>This is station {route.params.stationName}</Text>
        </View>
    )
}