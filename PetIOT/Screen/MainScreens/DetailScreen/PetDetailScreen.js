import React from 'react';
import {View,Text,StyleSheet,Alert,ScrollView, Pressable,TouchableHighlight} from 'react-native';
import {Button, Appbar} from 'react-native-paper';
import Spinner from 'react-native-loading-spinner-overlay';

import BasicInformationCard from '../../Components/PetDetail/BasicInformationCard';
import MedicalInformationCard from '../../Components/PetDetail/MedicalInformationCard';
import StatisticsAndSuggestionsCard from '../../Components/PetDetail/StatisticsAndSuggestionsCard';

import fetchPet from '../../../HandlingFunctions/Pet/fetchPet';

export default function PetDetailScreen({navigation,route}){
    return (
        //OUTER LAYER
        <ScrollView>

            {/* APP BAR */}
            <View style={styles.appBarContainer}>
                <Appbar.Header mode='medium' style={styles.appBar}>
                    {/* Back button */}
                    <Appbar.BackAction onPress={()=> navigation.navigate('Pet') } color='white' style={{marginTop: 10}}/>

                    {/* pet name */}
                    <Appbar.Content 
                        title={route.params.petName}
                        titleStyle={styles.appBarContentTitle}
                        style={styles.appBarContent}
                    />
                </Appbar.Header> 


            </View>



            {/* SETTING CATEGORY DISPLAY */}
            <View>
                
                <BasicInformationCard/>
                <MedicalInformationCard/>
                <StatisticsAndSuggestionsCard/>
            </View>
            <Button 
                style={styles.deleteButton}
                buttonColor='#BA1A1A'
                textColor='white'
                onPress={()=> Alert.alert('You sure bout this?')}
            >Delete</Button>

        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white',
    },

    appBarContainer:{
        backgroundColor: '#88511D',
        flex:1,
        paddingBottom:10,
        marginBottom: 10,
    },

    appBar:{
        backgroundColor: '#88511D',
        flex:1,

    },
    appBarContent:{
        flex:1,
        width:'100%',
        marginLeft:0,
    },
    appBarContentTitle:{
        flex:1,
        backgroundColor: '#88511D',
        color: 'white',
        fontSize: 36,
        fontFamily: 'Roboto',
        fontWeight: '400',
        lineHeight: 44,
        alignSelf:'center',
        height:44,
    },

    statusView:{
        height:20,
        marginTop:-20,
    },

    status:{
        textAlign:'center',
        fontSize: 14,
        fontFamily: 'Roboto',
        fontWeight: '500',
        lineHeight: 20,
        letterSpacing: 0.10,
        height:20,
    },

    powerIconContainer:{
        alignSelf:'center',
        margin:25,
    },

    deleteButton:{
        width:210,
        alignSelf:'center',
        marginTop: 30,
        marginBottom: 30,
    }
})