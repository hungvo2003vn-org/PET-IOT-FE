import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';

import LoginScreen from './LoginScreen';
import ForgetPasswordScreen from './ForgetPasswordScreen';
import SignUpScreen from './SignUpScreen';

import DrawerNavigationRoutes from './DrawerNavigationRoutes';

const Stack = createNativeStackNavigator();


export default function AuthNavigationRoutes(){
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='LoginScreen' screenOptions={{headerShown:false}}>
                <Stack.Screen name ="LoginScreen" component ={LoginScreen} />
                <Stack.Screen name = "SignUpScreen" component={SignUpScreen}/>
                <Stack.Screen name = "ForgetPasswordScreen" component={ForgetPasswordScreen}/>
                <Stack.Screen name = "Landing page" component={DrawerNavigationRoutes} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}