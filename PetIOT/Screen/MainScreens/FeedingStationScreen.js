import React from 'react';
import {View,Text,StyleSheet,Alert,ScrollView} from 'react-native';
import {Button, Appbar} from 'react-native-paper';
import FeedingStationCard from '../Components/FeedingStationCard';


export default function FeedingStationScreen(){
    return (
        //OUTER LAYER
        <ScrollView style={styles.container}>

            {/* APP BAR */}
            <Appbar 
                style={styles.appBar}
                mode = 'large'
            >
                <Appbar.Header>
                    <Appbar.Content 
                        title='Feeding Stations'
                        style={styles.appBarContent}
                    />
                </Appbar.Header>
            </Appbar>


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
        color:'white',
    }


})