import React from 'react';

import {CommonActions} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Text,BottomNavigation} from 'react-native-paper';
import {NavigationContainer} from '@react-navigation/native';


import HomeScreen from './MainScreens/HomeScreen';
import SettingsScreen from './MainScreens/SettingsScreen';
import FeedingStationScreen from './MainScreens/FeedingStationScreen';
import PetScreen from './MainScreens/PetScreen';

import PetDetailScreen from './MainScreens/DetailScreen/PetDetailScreen';
import FeedingStationDetailScreen from './MainScreens/DetailScreen/FeedingStationDetailScreen';

const Stack = createNativeStackNavigator();
const PetScreenStack = createNativeStackNavigator();
const FeedingStationScreenStack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function DrawerNavigationRoutes(){

    return (
        <NavigationContainer>
            {/* <Stack.Navigator initialRouteName='HomeScreen'>
                <Stack.Screen name ="HomeScreen" component ={HomeScreen} />
                <Stack.Screen name = "PetScreen" component={PetScreen}/>
                <Stack.Screen name = "FeedingStation" component={FeedingStationScreen}/>
                <Stack.Screen name = "SettingsScreen" component={SettingsScreen}/>
            </Stack.Navigator> */}

            <Tab.Navigator initialRouteName='HomeScreen'>
                <Tab.Screen name ="HomeScreen" component={HomeScreen}></Tab.Screen>

                <Tab.Screen name ="PetScreenStack">
                    {
                        ()=>(
                            <PetScreenStack.Navigator initialRouteName='PetScreen'>
                                <PetScreenStack.Screen name="PetScreen" component={PetScreen}/>
                                <PetScreenStack.Screen name="PetDetailScreen" component={PetDetailScreen}/>
                            </PetScreenStack.Navigator>
                        )
                    }
                </Tab.Screen>

                <Tab.Screen name ="FeedingStationScreenStack">
                    {
                        ()=>(
                            <PetScreenStack.Navigator initialRouteName='FeedingStationScreen'>
                                <PetScreenStack.Screen name="FeedingStationScreen" component={FeedingStationScreen}/>
                                <PetScreenStack.Screen name="FeedingStationDetailScreen" component={FeedingStationDetailScreen}/>
                            </PetScreenStack.Navigator>
                        )
                    }
                </Tab.Screen>

                <Tab.Screen name ="SettingsScreen" component={SettingsScreen}></Tab.Screen>
                    
            </Tab.Navigator>

        </NavigationContainer>
    )
}