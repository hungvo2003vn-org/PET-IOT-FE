import React, {useState} from 'react';
import {View,StyleSheet,Alert,ScrollView, Pressable,TouchableHighlight} from 'react-native';
import {Button,Card,Text,ActivityIndicator} from 'react-native-paper';


import startFeeding from '../../../HandlingFunctions/FeedingStation/startFeeding';

import FeedingStationCardTitle from './FeedingStationCardTitle';

export default function FeedingStationCard({stationName,stationStatus,stationFoodRemain,stationChamberRemain, stationMode, stationSound,station_id,navigation,pet_id,foodName,setStationList}){
    const [spinnerVisibility, setSpinnerVisibility] = useState(false);
    

    return (
        <Card style={styles.card}>
            <Pressable onPress={()=>navigation.navigate('FeedingStationDetail',
                                                        {stationName:stationName,
                                                        stationStatus:stationStatus,
                                                        stationFoodRemain:stationFoodRemain,
                                                        stationMode:stationMode,
                                                        stationSound:stationSound,
                                                        station_id:station_id,
                                                        pet_id:pet_id,
                                                        foodName:foodName,
                                                        setStationList:setStationList
                                                        })}>
                <Card.Title 
                    title={stationName}
                    titleStyle={styles.cardTitleStyle}
                    subtitle={stationStatus}
                    subtitleStyle = {{color: stationStatus == 'Online' ? 'green' : 'red'}}
                    right ={(props)=> <FeedingStationCardTitle/>}

                />
                <Card.Content style={styles.cardContent}>
                    {/* Horizontal line */}
                    <View style={{borderBottomColor:'black', borderBottomWidth: 1}}/>

                    {/* Food on dish display */}
                    <View style={styles.informationDisplayer}>
                        <Text style={styles.informationType}>Food on dish</Text>
                        <Text style={styles.informationValue}>{stationFoodRemain}</Text>
                    </View>

                    {/* Food in chamber display */}
                    <View style={styles.informationDisplayer}>
                        <Text style={styles.informationType}>Food in chamber</Text>
                        <Text style={styles.informationValue}>{stationChamberRemain}</Text>
                    </View>

                    {/* Mode display */}
                    <View style={styles.informationDisplayer}>
                        <Text style={styles.informationType}>Mode</Text>
                        <Text style={styles.informationValue}>{stationMode}</Text>
                    </View>

                    {/* Sound display */}
                    <View style={styles.informationDisplayer}>
                        <Text style={styles.informationType}>Sound</Text>
                        <Text style={styles.informationValue}>{stationSound}</Text>
                    </View>

                </Card.Content>
            </Pressable>
            <Card.Actions style={styles.cardAction}>
                <Button 
                    style={styles.cardFeedNowButton}
                    buttonColor = '#88511D'
                    textColor='white'
                    onPress={()=>{
                        startFeeding({stationName,station_id});
                        Alert.alert("Processing...");
                        // setSpinnerVisibility(true);

                    }}
                >Feed now</Button>
                <Button 
                    style={styles.cardStopFeedingButton}
                    buttonColor='#BA1A1A'
                    textColor='white'
                >Stop feeding</Button>
            </Card.Actions>
        </Card>
    )
}

const styles = StyleSheet.create({
    card:{
        backgroundColor:'#FFF1E8',
        margin:6,
        marginTop: 20
    },
    cardTitleStyle:{
        color:'#221A14',
        fontSize: 16,
        fontFamily:'Roboto',
        fontWeight:'600',
        lineHeight:24,
        letterSpacing:0.15
    },
    informationDisplayer:{
        flexDirection:'row',
        width:'100%',
        margin:10,
    },
    informationType:{
        flex:1,
        color:'#221A14',
        fontSize: 14,
        fontFamily:'Roboto',
        fontWeight: '400',
        lineHeight: 20,
        letterSpacing: 0.25,
        textAlign:'left',
    },
    informationValue:{
        flex:1,
        color:'#221A14',
        fontSize: 14,
        fontFamily:'Roboto',
        fontWeight: '400',
        lineHeight: 20,
        letterSpacing: 0.25,
        textAlign:'right',
        marginEnd:10,
    },
    cardAction:{
        flex:1,
        alignItems:'flex-start'
    },
    cardFeedNowButton:{
        flex:1,
    },
    cardStopFeedingButton:{
        flex:1,
    },
})
