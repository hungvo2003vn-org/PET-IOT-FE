import React,{useState,useEffect} from 'react';
import {Alert} from 'react-native';
import {Button } from 'react-native-paper';
import axios from 'axios';
import * as SecureStore from 'expo-secure-store';
import * as Updates from 'expo-updates';
import stationLoader from './stationLoader';

export default async function fetchStation({setStationList}){
    const data = await stationLoader();
    setStationList(data);
    // console.log("Data fetched")
}