import React from 'react';
import {View,Text,StyleSheet,Alert,ScrollView} from 'react-native';
import {Button, Appbar} from 'react-native-paper';
import FeedingStationCard from '../Components/FeedingStationCard';


export default function FeedingStationScreen(){
    return (
        //OUTER LAYER
        <ScrollView style={styles.container}>

            {/* APP BAR */}
            <Appbar.Header mode='large' style={styles.appBar}>
                <Appbar.Content 
                    title='Feeding Stations'
                    titleStyle={styles.appBarContentTitle}
                    style={styles.appBarContent}
                />
            </Appbar.Header>

            {/* STATIONS DISPLAY */}
            <View>
                <FeedingStationCard
                    stationName='Station A'
                    stationStatus='online'
                    stationFoodRemain='100%'
                    stationChamberRemain='100%'
                    stationMode='Manual'
                    stationSound='None'
                />
            </View>


        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFDCC2',
    },

    appBar:{
        backgroundColor: '#88511D',
    },
    appBarContent:{
        width:'100%',
        height:44,
        marginLeft:0,
        marginBottom:31,
    },
    appBarContentTitle:{
        backgroundColor: '#88511D',
        color: 'white',
        fontSize: 36,
        fontFamily: 'Roboto',
        fontWeight: '400',
        lineHeight: 44,
        alignSelf:'center',
        height:44,
    }


})