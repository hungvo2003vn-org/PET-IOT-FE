import React from 'react';
import {View,Text} from 'react-native';
// import { StatusBar } from 'expo-status-bar';
import { StatusBar } from 'react-native';

export default function HomeScreen(){
    return (
        <View>
            <StatusBar style='dark'/>
            <Text>This is home screen</Text>
        </View>
    )
}