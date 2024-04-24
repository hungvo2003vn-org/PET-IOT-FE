import React,{useState,useEffect} from 'react';
import {Alert} from 'react-native';
import axios from 'axios';
import * as SecureStore from 'expo-secure-store';



const EXPO_PUBLIC_API_URL="https://pet-iot-be.onrender.com";

export default async function addSchedule({station_id,feed_amount,start_time,end_time}){

    // console.log("This is called" + typeof(data.setSpinnerVisibility));
    // data.setSpinnerVisibility(false);

    //GET USER'S TOKEN
    const accessToken =  SecureStore.getItem('accessToken');
    
    // console.log("start time:" + start_time + " end time: " + end_time);

    const request_data = {
        "station_id": `${station_id}`,
        "feed_amount": feed_amount,
        "start_time": start_time,
        "end_time": end_time
    }

    const config ={
        headers:{
            'Authorization':'Bearer ' + accessToken
        }
    }


    //SEND CREATE REQUEST
    await axios.post(`${EXPO_PUBLIC_API_URL}/v1/schedule`,request_data,config)
        .then(function(response){
            const data = response.data;
            if(data){
                // data.setSpinnerVisibility(false);
                // console.log(request_data);
                Alert.alert("New schedule added");
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