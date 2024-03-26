import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';

import HomeScreen from './MainScreens/HomeScreen';
import SettingsScreen from './MainScreens/SettingsScreen';
import FeedingStationScreen from './MainScreens/FeedingStationScreen';
import PetsScreen from './MainScreens/PetScreen';

const Stack = createNativeStackNavigator();

export default function DrawerNavigationRoutes(){

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='HomeScreen'>
                <Stack.Screen name ="HomeScreen" component ={HomeScreen} />
                <Stack.Screen name = "PetsScreen" component={PetsScreen}/>
                <Stack.Screen name = "FeedingStation" component={FeedingStationScreen}/>
                <Stack.Screen name = "SettingsScreen" component={SettingsScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}