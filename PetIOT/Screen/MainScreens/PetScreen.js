import React from 'react';
import {View,Text,StyleSheet,Alert,ScrollView} from 'react-native';
import {Button, Appbar} from 'react-native-paper';
import PetCard from '../Components/Pet/PetCard';
import TipsBackgroundCard from '../Components/Home/TipsBackgroundCard';

export default function PetScreen({navigation}){
    return (
        //OUTER LAYER
        <ScrollView style={styles.container}>

            {/* APP BAR */}
            <Appbar.Header mode='large' style={styles.appBar}>
                <Appbar.Content 
                    title='Pet'
                    titleStyle={styles.appBarContentTitle}
                    style={styles.appBarContent}
                />
            </Appbar.Header>

            {/* PET DISPLAY */}
            <View>
                <PetCard
                    petName='Pet 1'
                    petStationName='Station A'
                    petBehavior='Normal'
                    petWeight='5 kg'
                    petStatus='Normal'
                    navigation={navigation}
                />
                <PetCard
                    petName='Pet 2'
                    petStationName='Station B'
                    petBehavior='Normal'
                    petWeight='8 kg'
                    petStatus='Digest Issues'
                    navigation={navigation}
                />
                <PetCard
                    petName='Pet 3'
                    petStationName='Station A'
                    petBehavior='Normal'
                    petWeight='10 kg'
                    petStatus='Normal'
                    navigation={navigation}
                />
                <TipsBackgroundCard/>
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