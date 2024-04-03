import React,{useState,useEffect} from 'react';
import {View,Text,StyleSheet,Alert,ScrollView,FlatList} from 'react-native';
import {Button, Appbar,Modal,Portal} from 'react-native-paper';

import FeedingStationCard from '../Components/FeedingStation/FeedingStationCard';
import AddStationModal from '../Components/FeedingStation/AddStationModal';
import stationLoader from '../../HandlingFunctions/FeedingStation/stationLoader';
// import FeedingStaionCardLoader from '../Components/FeedingStation/FeedingStationCardLoader';


export default function FeedingStationScreen({navigation}){
    //ADD FEED STATION BOX
    const [addStationModalVisible,setAddStationModalVisible] = useState(false);
    const showAddStationModal = ()=> setAddStationModalVisible(true);
    const hideAddStationModal = ()=> setAddStationModalVisible(false);

    // STATION LIST RENDERING
    const [stationList,setStationList] = useState([]);

    useEffect(() => {

        const fetchData = async () =>{
            const data = await stationLoader();
            setStationList(data);
        }

        fetchData();
        // console.log(stationList);

    }, []); // Empty dependency array: runs only on initial render


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

                {
                    stationList.map((station) =>
                            <FeedingStationCard
                                stationName = {station.station_id}
                                stationStatus='Online'
                                stationFoodRemain='100%'
                                stationChamberRemain='70%'
                                stationMode='Manual'
                                stationSound='None'
                                station_id={station.station_id}
                                navigation={navigation}
                                key={station.station_id}
                            />
                        
                    )
                    
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


})