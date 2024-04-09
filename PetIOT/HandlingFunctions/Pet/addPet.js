import React,{useState,useEffect} from 'react';
import {Alert} from 'react-native';
import {Button } from 'react-native-paper';
import axios from 'axios';
import * as SecureStore from 'expo-secure-store';
import * as Updates from 'expo-updates';



const EXPO_PUBLIC_API_URL="https://pet-iot-be.onrender.com";

async function  updateInfomation(accessToken,hideAddPetModal){
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
            Alert.alert('Pet added successfully');
            hideAddPetModal()
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

export default async function addPet(data,hideAddPetModal){


    //GET USER'S TOKEN
    const accessToken =  SecureStore.getItem('accessToken');
    

    const request_data = {
        "pet_id": `${data.pet_id}`,
        "species": `${data.species}`,
        "breed": `${data.breed}`,
        "color": `${data.color}`,
        "birth_year": `${data.birth_year}`,
        "station_id": `${data.station_id}`,
    }

    const config ={
        headers:{
            'Authorization':'Bearer ' + accessToken
        }
    }



    //SEND CREATE REQUEST
    await axios.post(`${EXPO_PUBLIC_API_URL}/v1/pet/create`,request_data,config)
        .then(function(response){
            const data = response.data;
            if(data){
                //UPDATE USER'S INFORMATION
                updateInfomation(accessToken,hideAddPetModal);
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