import React,{useState, useCallback} from 'react';
import {View,Text,StyleSheet,Alert,ScrollView, Pressable,TouchableHighlight, RefreshControl} from 'react-native';
import {Button, Appbar} from 'react-native-paper';
import PowerIcon from '../../../assets/FeedingStationDetailScreen/power-button-svgrepo-com 2.svg' 

import BasicInformationCard from '../../Components/FeedingStationDetail/BasicInformationCard';
import PetAssignCard from '../../Components/FeedingStationDetail/PetAssignCard';
import SettingsCard from '../../Components/FeedingStationDetail/SettingsCard';
import StatisticsAndSuggestionsCard from '../../Components/FeedingStationDetail/StatisticsAndSuggestionsCard';

import editStation from '../../../HandlingFunctions/FeedingStation/editStation';
import Spinner from 'react-native-loading-spinner-overlay';
import fetchStation from '../../../HandlingFunctions/FeedingStation/fetchStation';
import petAssign from '../../../HandlingFunctions/FeedingStation/petAssign';

function valueCheck(data){
    for (item in data){
        if (!data[item]){
            return;
        }
        if (data[item].length == 0){
            Alert.alert(`${item} cannot be empty`)
            return;
        }
    }
}



export default function FeedingStationDetailScreen({navigation,route}){

    // REFRESH MECHANISM
    const [refreshing,setRefreshing] = useState(false);
    const onRefresh = useCallback(async()=>{
        setRefreshing(true);
        setTimeout(()=>{
            setRefreshing(false);
            // fetchStation({setStationList})
            route.params.onFinish({setStationList:route.params.setStationList});

        },2000);
    },[]);


    const [changes,setChanges] = useState(false);
    const [stationMode,setStationMode] = useState(route.params.stationMode==='Auto'?true:false);
    // Alert.alert(stationMode);
    // const [stationMode,setStationMode] = useState(true);

    const [stationSound,setStationSound] = useState(route.params.stationSound);
    const [foodAmount,setFoodAmount] = useState(500);
    const [petId,setPetId] = useState(route.params.pet_id);
    const [foodName,setFoodName] = useState(route.params.foodName);
    const [stationName,setStationName] = useState(route.params.stationName);

    // Alert.alert(route.params);
    const [spinnerVisibility, setSpinnerVisibility] = useState(false);

    return (
        //OUTER LAYER
        <ScrollView
            style={styles.container}
            refreshControl={<RefreshControl 
                                refreshing = {refreshing} 
                                onRefresh={onRefresh}/>}
        >
            <Spinner
                visible={spinnerVisibility}
            />
            {/* APP BAR */}
            <View style={styles.appBarContainer}>
                <Appbar.Header mode='medium' style={styles.appBar}>
                    {/* Back button */}
                    <Appbar.BackAction onPress={()=> navigation.navigate('FeedingStation') } color='white' style={{marginTop: 10}}/>

                    {/* Station name */}
                    <Appbar.Content 
                        title={stationName}
                        titleStyle={styles.appBarContentTitle}
                        style={styles.appBarContent}
                    />
                </Appbar.Header> 

                {/* Station status */}
                <View style={styles.statusView}>
                    <Text style={[{color: route.params.stationStatus == 'Online' ? '#E0E7B1' : 'red'},styles.status]}>
                        {route.params.stationStatus}
                    </Text>
                </View>


                <View style={styles.powerIconContainer}>
                    <TouchableHighlight 
                        onPress={()=>console.log('Power button is pressed')} 
                        style={{borderRadius:100}}
                    >
                            <PowerIcon/>
                    </TouchableHighlight>
                </View>

            </View>



            {/* SETTING CATEGORY DISPLAY */}
            <View>
                <SettingsCard 
                    stationMode={stationMode}
                    stationSound={stationSound}
                    foodAmount = {foodAmount}
                    setStationMode={setStationMode}
                    setStationSound={setStationSound}
                    setFoodAmount={setFoodAmount}
                    setChanges={setChanges}
                    station_id ={route.params.station_id}

                />
                <PetAssignCard 
                    petId={petId}
                    setChanges={setChanges}
                    setPetId={setPetId}
                />
                <BasicInformationCard 
                    foodName ={foodName}
                    station_id={route.params.station_id}
                    stationName={stationName}
                    setFoodName={setFoodName}
                    setStationName={setStationName}
                    setChanges={setChanges}
                />
                <StatisticsAndSuggestionsCard/>
            </View>
            <View style={styles.buttons}>
            <Button 
                disabled={!changes}
                style={styles.saveChangesButton}
                buttonColor='#88511D'
                textColor='white'
                onPress={async ()=> {
                    // setSpinnerVisibility(true);
                    console.log("Changes found: stationMode = "+stationMode +" foodAmount = "+foodAmount +" stationName = " +stationName + " foodName = " + foodName);
                    Alert.alert("Processing...");
                    valueCheck({
                        "station_id":route.params.station_id,
                        "station_name":stationName,
                        "food_name":foodName,
                        "mode":stationMode,
                        "soundType":null,

                    });


                    await petAssign({
                        "station_id":route.params.station_id,
                        "pet_id" : petId
                    })


                    await editStation({
                        "station_id":route.params.station_id,
                        "station_name":stationName,
                        "food_name":foodName,
                        "mode":stationMode,
                        "soundType":null,
                        // "setSpinnerVisibility":setSpinnerVisibility
                    });
                    // console.log("This is station mode: " + typeof(stationMode))
                    // await fetchStation(route.params.setStationList);

                    // await route.params.onFinish({setStationList:route.params.setStationList});


                    setChanges(false);


                }}
            >Save changes</Button>
            <Button 
                style={styles.deleteButton}
                buttonColor='#BA1A1A'
                textColor='white'
                onPress={()=> Alert.alert('You sure bout this?')}
            >Delete</Button>
            </View>

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

    buttons:{
        flexDirection:'row',
        alignSelf:'center',
    },

    deleteButton:{
        width:150,
        alignSelf:'center',
        marginTop: 30,
        marginLeft: 10,
        marginBottom: 30,
        alignSelf:'flex-end'
    },

    saveChangesButton:{
        width:150,
        alignSelf:'center',
        marginTop: 30,
        marginRight:10,
        marginBottom: 30,
        alignSelf:'flex-start'
    }
})