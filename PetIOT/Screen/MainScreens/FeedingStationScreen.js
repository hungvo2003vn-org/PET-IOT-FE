import React from 'react';
import {View,Text,StyleSheet,Alert,ScrollView} from 'react-native';
import {Button, Appbar} from 'react-native-paper';
import FeedingStationCard from '../Components/FeedingStationCard';


export default function FeedingStationScreen({navigation}){
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
                    stationStatus='Online'
                    stationFoodRemain='100%'
                    stationChamberRemain='70%'
                    stationMode='Manual'
                    stationSound='None'
                    navigation={navigation}
                />
                <FeedingStationCard
                    stationName='Station B'
                    stationStatus='Online'
                    stationFoodRemain='0%'
                    stationChamberRemain='70%'
                    stationMode='Auto: 9:00am, 2:00pm'
                    stationSound="'Woof woof'"
                    navigation={navigation}
                />
                <FeedingStationCard
                    stationName='Station C'
                    stationStatus='Offline'
                    stationFoodRemain='0%'
                    stationChamberRemain='0%'
                    stationMode='Auto: 9:00pm'
                    stationSound="'Meow'"
                    navigation={navigation}
                />
            </View>

            <Button 
                style={styles.addButton}
                buttonColor='#88511D'
                textColor='white'

            >Add</Button>


        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
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
    },

    addButton:{
        width:210,
        alignSelf:'center',
        marginTop: 30,
        marginBottom: 30,
    },


})