import React from 'react';

import {CommonActions} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Text,BottomNavigation} from 'react-native-paper';
import {NavigationContainer} from '@react-navigation/native';
import { StyleSheet } from 'react-native';


import HomeScreen from './MainScreens/HomeScreen';
import SettingsScreen from './MainScreens/SettingsScreen';
import FeedingStationScreen from './MainScreens/FeedingStationScreen';
import PetScreen from './MainScreens/PetScreen';

import PetDetailScreen from './MainScreens/DetailScreen/PetDetailScreen';
import FeedingStationDetailScreen from './MainScreens/DetailScreen/FeedingStationDetailScreen';

import UserIcon from '../assets/common/navbar/user.svg';
import HomeIcon from '../assets/common/navbar/home.svg';
import PetIcon from '../assets/common/navbar/pets.svg';
import StationIcon from '../assets/common/navbar/stations.svg';

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

            <Tab.Navigator 
                initialRouteName='Home'
                screenOptions={{
                    headerShown:false,
                }}
            >
                <Tab.Screen 
                    name ="Home" 
                    component={HomeScreen}
                    options={{
                        tabBarLabel:()=>{
                            return (
                                <Text style={styles.label}>Home</Text>
                            )
                        },
                        tabBarIcon:({focused})=>{
                            return(
                                <HomeIcon width={24} height={24}/>
                            )
                        },
                        tabBarStyle:{
                            backgroundColor:'#88511D',
                            height:70
                        }
                    }}
                ></Tab.Screen>

                <Tab.Screen 
                    name ="Pets"
                    options={{
                        tabBarLabel:()=>{
                            return (
                                <Text style={styles.label}>Pets</Text>
                            )
                        },
                        tabBarIcon:({focused})=>{
                            return(
                                <PetIcon width={24} height={24}/>
                            )
                        },
                        tabBarStyle:{
                            backgroundColor:'#88511D',
                            height:70
                        }
                    }}
                >
                    {
                        ()=>(
                            <PetScreenStack.Navigator initialRouteName='PetScreen' screenOptions={{headerShown: false}}>
                                <PetScreenStack.Screen name="Pet" component={PetScreen}/>
                                <PetScreenStack.Screen name="PetDetail" component={PetDetailScreen}/>
                            </PetScreenStack.Navigator>
                        )
                    }
                </Tab.Screen>

                <Tab.Screen 
                    name ="Feeding stations"
                    options={{
                        tabBarLabel:()=>{
                            return (
                                <Text style={styles.label}>Stations</Text>
                            )
                        },
                        tabBarIcon:({focused})=>{
                            return(
                                <StationIcon width={24} height={24}/>
                            )
                        },
                        tabBarStyle:{
                            backgroundColor:'#88511D',
                            height:70
                        }
                    }}
                >
                    {
                        ()=>(
                            <FeedingStationScreenStack.Navigator initialRouteName='FeedingStationScreen' screenOptions={{headerShown: false}}>
                                <FeedingStationScreenStack.Screen name="FeedingStation" component={FeedingStationScreen}/>
                                <FeedingStationScreenStack.Screen name="FeedingStationDetail" component={FeedingStationDetailScreen}/>
                            </FeedingStationScreenStack.Navigator>
                        )
                    }
                </Tab.Screen>

                <Tab.Screen 
                    name ="Settings" 
                    component={SettingsScreen}
                    options={{
                        tabBarLabel:()=>{
                            return (
                                <Text style={styles.label}>User</Text>
                            )
                        },
                        tabBarIcon:({focused})=>{
                            return(
                                <UserIcon width={24} height={24}/>
                            )
                        },
                        tabBarStyle:{
                            backgroundColor:'#88511D',
                            height:70
                        }
                    }}
                ></Tab.Screen>
                    
            </Tab.Navigator>

        </NavigationContainer>
    )
}

const styles = StyleSheet.create({
    label:{
        color:'white',
        marginBottom:5,
        marginTop:2
    },
})