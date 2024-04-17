import React from 'react';
import {View,StyleSheet,Alert,ScrollView, Pressable,TouchableHighlight} from 'react-native';
import {Button,Card,Text} from 'react-native-paper';

import RightArrow from "../../../assets/common/ic_arrow_right.svg";


export default function FeedingStationCardTitle({stationSatus}){
    return (
        <View style = {styles.icon}>
            <RightArrow/>
        </View>
    )
}

const styles = StyleSheet.create({
    icon:{
        marginEnd:5
    },
})
