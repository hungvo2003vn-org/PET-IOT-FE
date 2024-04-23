import React,{useState,useEffect} from 'react';
import {Alert} from 'react-native';
import axios from 'axios';
import * as SecureStore from 'expo-secure-store';



const EXPO_PUBLIC_API_URL="https://pet-iot-be.onrender.com";

export default async function editStation(data){

    // console.log("This is called" + typeof(data.setSpinnerVisibility));
    // data.setSpinnerVisibility(false);

    //GET USER'S TOKEN
    const accessToken =  SecureStore.getItem('accessToken');
    

    const request_data = {
        "station_id": `${data.station_id}`,
        "station_name": `${data.station_name}`,
        "box_volumn": null,
        "box_remain": null,
        "food_name": `${data.food_name}`,
        "disk_remain": null,
        "mode": data.stationMode,
        "soundType": null,
        "pet_id": null
    }

    const config ={
        headers:{
            'Authorization':'Bearer ' + accessToken
        }
    }



    //SEND CREATE REQUEST
    await axios.post(`${EXPO_PUBLIC_API_URL}/v1/station/edit`,request_data,config)
        .then(function(response){
            const data = response.data;
            if(data){
                data.setSpinnerVisibility(false);
                Alert.alert("Changes applied");
                return;

            }   else{
                data.setSpinnerVisibility(false);
                Alert.alert('Error happens');
                return;
            }
        })
        .catch(function(error){
            data.setSpinnerVisibility(false);
            const errorMessage = error.response?.data?.message || error.response?.statusText;
            console.error("Error:", errorMessage);
            Alert.alert("Error happens: "+errorMessage);
            return;
        })



}