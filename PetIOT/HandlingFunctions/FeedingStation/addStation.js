import React,{useState,useEffect} from 'react';
import {Alert} from 'react-native';
import {Button } from 'react-native-paper';
import axios from 'axios';
import * as SecureStore from 'expo-secure-store';
import * as Updates from 'expo-updates';



const EXPO_PUBLIC_API_URL="https://pet-iot-be.onrender.com";

async function updateInfomation(accessToken,hideAddStationModal){
    // UPDATE USER'S INFORMATION
    await axios.get(`${EXPO_PUBLIC_API_URL}/v1/user/info`,{
        headers:{
            'Authorization':'Bearer '+accessToken 
        }
    })
    .then(function(response){
        const data = JSON.stringify(response.data.data);
        if (data){
            SecureStore.setItem('userInformation',data);
            // console.log(data);
            Alert.alert('Station added successfully');
            hideAddStationModal()
        }   else{
            Alert.alert("Cannot fetch user's information");
            return
        }
    })
    .catch(function(error){
        const errorMessage = error.response?.data?.message || error.response?.statusText;
        console.error("Error:", errorMessage);
        Alert.alert("Error happens: "+errorMessage);
        return
    })

}

export default async function addStation(data,hideAddStationModal){


    //GET USER'S TOKEN
    const accessToken =  SecureStore.getItem('accessToken');
    

    const request_data = {
        "station_id": `${data.station_id}`,
        "box_volumn": `${data.box_volumn}`,
        "box_remain": `${data.box_remain}`,
        "food_name": `${data.food_name}`,
        "disk_remain": `${data.disk_remain}`,
        "mode": `${data.mode}`,
        "soundType": `${data.soundType}`,
        "pet_id": null
    }

    const config ={
        headers:{
            'Authorization':'Bearer ' + accessToken
        }
    }



    //SEND CREATE REQUEST
    await axios.post(`${EXPO_PUBLIC_API_URL}/v1/station/create`,request_data,config)
        .then(function(response){
            const data = response.data;
            if(data){
                //UPDATE USER'S INFORMATION
                updateInfomation(accessToken,hideAddStationModal);
            }   else{
                Alert.alert('Error happens');
                return;
            }
        })
        .catch(function(error){
            const errorMessage = error.response?.data?.message || error.response?.statusText;
            console.error("Error:", errorMessage);
            Alert.alert("Error happens: "+errorMessage);
            return;
        })



}