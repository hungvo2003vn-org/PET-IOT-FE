import React,{useState,useEffect} from 'react';
import {Alert} from 'react-native';
import {Button } from 'react-native-paper';
import axios from 'axios';
import * as SecureStore from 'expo-secure-store';
import * as Updates from 'expo-updates';


const EXPO_PUBLIC_API_URL="https://pet-iot-be.onrender.com";


export default async function petAssign({station_id,pet_id}){
    //GET USER TOKEN
    const accessToken = SecureStore.getItem('accessToken');


    const request_data = {
        "station_id": `${station_id}`,
        "pet_id":`${pet_id}`
    }

    const config ={
        headers:{
            'Authorization':'Bearer ' + accessToken
        }
    }



    //SEND CREATE REQUEST
    await axios.post(`${EXPO_PUBLIC_API_URL}/v1/station/assign`,request_data,config)
        .then(function(response){
            const data = response.data;
            if(data){
                // data.setSpinnerVisibility(false);
                // console.log(request_data);
                // Alert.alert("Changes applied");
                return;

            }   else{
                // data.setSpinnerVisibility(false);
                Alert.alert('Error happens');
                return;
            }
        })
        .catch(function(error){
            // data.setSpinnerVisibility(false);
            const errorMessage = error.response?.data?.message || error.response?.statusText;
            console.error("Error:", errorMessage);
            Alert.alert("Error happens: "+errorMessage);
            return;
        })


}