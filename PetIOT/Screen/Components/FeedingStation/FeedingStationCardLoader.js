// import React, {useState,useEffect} from 'react';
// import {View,Text,StyleSheet,Alert,ScrollView,FlatList} from 'react-native';
// import FeedingStationCard from './FeedingStationCard';

// import stationLoader from '../../../HandlingFunctions/FeedingStation/stationLoader';

// const StationItem = ({item}) =>{
//     return (
//         <FeedingStationCard
//             // stationName = {data.data.station_id}   
//             stationName={item.station_id}        
//             stationStatus='Online'
//             stationFoodRemain='100%'
//             stationChamberRemain='70%'
//             stationMode='Manual'
//             stationSound='None'
//             // navigation={navigation}
//         />
//     )
// }


// export default async function FeedingStaionCardLoader(){
//     const [stationList,setStationList] = useState([]);

//     useEffect(() => {

//         const fetchData = async () =>{
//             const data = await stationLoader();
//             setStationList(data);
//         }
//         fetchData();

//     }, []); // Empty dependency array: runs only on initial render

//     const renderItem = ({ item }) => <StationItem item={item} />;


//     return (
//         <FlatList
//             data={stationList}
//             renderItem={renderItem}
//         />
//     )


// }