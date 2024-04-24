import React,{useState,useEffect,useCallback,useRef} from 'react';
import {View,Text,StyleSheet,Alert,ScrollView,FlatList, RefreshControl} from 'react-native';
import {Button, Appbar,Modal,Portal, ActivityIndicator} from 'react-native-paper';

import FeedingStationCard from '../Components/FeedingStation/FeedingStationCard';
import AddStationModal from '../Components/FeedingStation/AddStationModal';
import stationLoader from '../../HandlingFunctions/FeedingStation/stationLoader';
// import FeedingStaionCardLoader from '../Components/FeedingStation/FeedingStationCardLoader';
import fetchStation from '../../HandlingFunctions/FeedingStation/fetchStation';


export default function FeedingStationScreen({navigation}){

    //ADD FEED STATION BOX
    const [addStationModalVisible,setAddStationModalVisible] = useState(false);
    const showAddStationModal = ()=> setAddStationModalVisible(true);
    const hideAddStationModal = ()=> setAddStationModalVisible(false);


    // STATION LIST RENDERING
    const [stationList,setStationList] = useState([]);

    // REFRESH MECHANISM
    const [refreshing,setRefreshing] = useState(false);
    const onRefresh = useCallback(()=>{
        setRefreshing(true);
        setTimeout(()=>{
            setRefreshing(false);
            fetchStation({setStationList})
        },2000);
    },[]);

    // USE EFFECT TO REFRESH SCREEN INTERVALY
    const intervalRef = useRef(null);

    useEffect(() => {
        //Implementing the setInterval method
        const intervalId = setInterval(() => {
            fetchStation({setStationList});
        }, 5000);

        intervalRef.current = intervalId;
        return () => clearInterval(intervalRef.current);

    }, []); // Empty dependency array: runs only on initial render


    return (
        //OUTER LAYER
        <ScrollView 
            style={styles.container}
            refreshControl={<RefreshControl 
                                refreshing = {refreshing} 
                                onRefresh={onRefresh}/>}
        >
            {/* <ActivityIndicator/> */}

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


                {stationList.length !== 0?
                    stationList.map((station) =>
                            <FeedingStationCard
                                stationName = {station.station_name}
                                stationStatus={station.station_status ? 'Online' : 'Offline'}
                                stationFoodRemain={station.disk_remain ? (station.disk_remain+'%') : ('0%')}
                                stationChamberRemain={station.box_remain ? (station.box_remain+'%') : ('0%')}
                                stationMode={station.mode ? 'Auto':'Manual'}                                
                                stationSound={station.soundType}
                                station_id={station.station_id}
                                navigation={navigation}
                                key={station.station_id}
                                pet_id={station.pet_id}
                                foodName={station.food_name}
                                onFinish={fetchStation}
                                setStationList={setStationList}
                            />
                    )
                    : <Text style={styles.noStation}>No station to show</Text>
                    
                }

                {/* <Text>{stationList.map(station=>console.log(stationList))}</Text> */}
            </View>

            <Portal>
                <Modal
                    visible={addStationModalVisible}
                    onDismiss={hideAddStationModal}
                >
                    <AddStationModal
                        hideAddStationModal={hideAddStationModal}
                        onFinish={fetchStation}
                        setStationList={setStationList}
                    ></AddStationModal>
                </Modal>
            </Portal>

            <Button 
                    style={styles.addButton}
                    buttonColor='#88511D'
                    textColor='white'
                    onPress={showAddStationModal}
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

    noStation:{
        marginBottom:200,
        marginTop:200,
        alignSelf:'center',

    }

})