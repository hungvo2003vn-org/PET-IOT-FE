import React,{useState,useEffect} from 'react';
import {Alert} from 'react-native';
import {Button } from 'react-native-paper';
import axios from 'axios';
import * as SecureStore from 'expo-secure-store';
import * as Updates from 'expo-updates';


const EXPO_PUBLIC_API_URL="https://pet-iot-be.onrender.com";


export default async function petLoader({setPetList}){
    //GET USER TOKEN
    const accessToken = SecureStore.getItem('accessToken');

    var list=[]


    let config ={
        headers:{
            Authorization:`Bearer ${accessToken}`
        },
    }


    await axios.get(`${EXPO_PUBLIC_API_URL}/v1/pet/get`,config)
        .then(function(response){
            const petData = response.data;

            if (petData){
                list.push(petData);
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


    // console.log(list[0].data)

    // return list[0].data;
    
    setPetList(list[0].data);

}