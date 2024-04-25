import React, { useState, useEffect } from 'react';
import { Alert } from 'react-native';
import { Button } from 'react-native-paper';
import axios from 'axios';
import * as SecureStore from 'expo-secure-store';
import * as Updates from 'expo-updates';

const EXPO_PUBLIC_API_URL = "https://pet-iot-be.onrender.com";

async function updateInfomation(accessToken, hideAddPetModal) {
    try {
        const response = await axios.get(`${EXPO_PUBLIC_API_URL}/v1/user/info`, {
            headers: {
                'Authorization': 'Bearer ' + accessToken
            }
        });
        const data = JSON.stringify(response.data.data);
        if (data) {
            await SecureStore.setItem('userInformation', data);
            Alert.alert('Pet added successfully');
            hideAddPetModal();
        } else {
            Alert.alert("Cannot fetch user's information");
        }
    } catch (error) {
        const errorMessage = error.response?.data?.message || error.response?.statusText;
        console.error("Error:", errorMessage);
        Alert.alert("Error happens: " + errorMessage);
    }
}

export default async function addPet(data, hideAddPetModal) {
    try {
        const accessToken = await SecureStore.getItem('accessToken');

        const request_data = {
            "_id": data._id,
            "type": data.type,
            "breed": data.breed,
            "birth_date": data.birth_date,
            "color": data.color,
            "name": data.name,
            "user_note": data.user_note,
            "station_id": data.station_id,
        };

        const config = {
            headers: {
                'Authorization': 'Bearer ' + accessToken
            }
        };

        const response = await axios.post(`${EXPO_PUBLIC_API_URL}/v1/pet/create`, request_data, config);
        if (response.data) {
            // Do something with response data if needed
            await updateInfomation(accessToken, hideAddPetModal);
        } else {
            Alert.alert('Error happens');
        }
    } catch (error) {
        const errorMessage = error.response?.data?.message || error.response?.statusText;
        console.error("Error:", errorMessage);
        Alert.alert("Error happens: " + errorMessage);
    }
}
