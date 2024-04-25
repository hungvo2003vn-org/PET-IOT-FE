import React,{useState,useEffect} from 'react';
import {Alert} from 'react-native';
import {Button } from 'react-native-paper';
import axios from 'axios';
import * as SecureStore from 'expo-secure-store';
import * as Updates from 'expo-updates';


const EXPO_PUBLIC_API_URL="https://pet-iot-be.onrender.com";

export default async function userLoader() {
    try {
        const accessToken = await SecureStore.getItemAsync('accessToken');
        if (!accessToken) {
            throw new Error('No access token found');
        }

        const config = {
            headers: {
                Authorization: `Bearer ${accessToken}`
            },
        };

        const response = await axios.get(`${EXPO_PUBLIC_API_URL}/v1/user/info`, config);

        
        if (!response.data || !response.data.data || typeof response.data.data !== 'object') {
            throw new Error('Invalid data format');
        }

        
        const { firstName, lastName } = response.data.data;

        
        if (!firstName || !lastName) {
            throw new Error('Missing firstName or lastName');
        }

        
        return { firstName, lastName };
    } catch (error) {
        
        throw new Error(error.message || 'Error occurred while fetching user data');
    }
}
