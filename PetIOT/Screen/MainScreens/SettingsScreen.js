import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Button, Appbar } from 'react-native-paper';
import * as SecureStore from 'expo-secure-store';
import * as Updates from 'expo-updates';
import UserAccountCard from '../Components/Settings/UserAccountCard';
import AppSettingsCard from '../Components/Settings/AppSettingsCard';
import HelpCenterCard from '../Components/Settings/HelpCenterCard';
import SettingsIcon from '../../assets/SettingsScreen/settings.svg'

async function signOutHandler() {
    SecureStore.deleteItemAsync('accessToken');
    SecureStore.deleteItemAsync('refreshToken');
    SecureStore.deleteItemAsync('userInformation');
    await Updates.reloadAsync();
}

export default function SettingsScreen() {
    return (
        <ScrollView style={styles.container}>
            {/* APP BAR */}
            <View style={styles.appBarContainer}>
                <Appbar.Header mode='medium' style={styles.appBar}>
                    <Appbar.Content 
                        title='Settings'
                        titleStyle={styles.appBarContentTitle}
                        style={styles.appBarContent}
                    />
                </Appbar.Header> 

                <View style={styles.settingsIconContainer}>
                    <SettingsIcon/>
                </View>

            </View>

            

            <ScrollView contentContainerStyle={styles.scrollContent}>
                <UserAccountCard />
                <AppSettingsCard />
                <HelpCenterCard />
            </ScrollView>

            <Button
                onPress={signOutHandler}
                mode="contained"
                style={styles.signOutButton}
                color='#88511D'
                labelStyle={{ color: 'white' }}
            >Sign out</Button>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },

    appBarContainer:{
        backgroundColor: '#88511D',
        flex:1,
        paddingBottom:10,
        marginBottom: 10,
    },

    appBar:{
        backgroundColor: '#88511D',
        flex:1,

    },
    appBarContent:{
        flex:1,
        width:'100%',
        marginLeft:0,
    },
    appBarContentTitle:{
        flex:1,
        backgroundColor: '#88511D',
        color: 'white',
        fontSize: 36,
        fontFamily: 'Roboto',
        fontWeight: '400',
        lineHeight: 44,
        alignSelf:'center',
        height:44,
    },
    titleContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        color: 'white',
        fontSize: 36,
        fontFamily: 'Roboto',
        fontWeight: '400',
        lineHeight: 44,
    },

    scrollContent: {
        flexGrow: 1, 
        paddingHorizontal: 10, 
        paddingBottom: 20, 
    },

    signOutButton: {
        width: 210,
        alignSelf: 'center',
        marginTop: 30,
        marginBottom: 30,
    },
    settingsIconContainer: {
        alignSelf: 'center',
        marginTop: 20,
        marginBottom: 20, // Thêm vào đây
    },
});
