import React,{useState,useEffect} from 'react';
import {Alert} from 'react-native';
import {Button } from 'react-native-paper';
import axios from 'axios';
import * as SecureStore from 'expo-secure-store';
import * as Updates from 'expo-updates';
import petLoader from './petLoader';

export default async function fetchPet({setPetList}){
    const data = await petLoader();
    setPetList(data);

}