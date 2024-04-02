import React from 'react';
import {View,Text,Button,Alert} from 'react-native';
import * as SecureStore from'expo-secure-store';
import * as Updates from 'expo-updates';



async function signOutHandler(){
    SecureStore.deleteItemAsync('accessToken');
    SecureStore.deleteItemAsync('refreshToken');
    await Updates.reloadAsync();

}

export default function SettingsScreen(){
    return (
        <View>
            <Text>This is settings screen</Text>
            <Button
                onPress={signOutHandler}
                title='Sign out'
            >Sign out</Button>
        </View>
    )
}