import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import DrawerNavigationRoutes from './Screen/DrawerNavigationRoutes';
import AuthNavigationRoutes from './Screen/AuthNavigationRoutes';
import React,{useState,useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as SecureStore from 'expo-secure-store';



export default function App() {
  const [isLoggedIn,setIsLoggedIn] = useState(false);

  useEffect(() => {

    try{
      const access_token =  SecureStore.getItem("accessToken");

      if (access_token !== undefined){
        setIsLoggedIn(true);
      }

    } catch(error){
      Alert.alert(error);
    }

  }, []);



  if(!isLoggedIn){
    return (
      <PaperProvider>
        <StatusBar style='dark'/>
        <AuthNavigationRoutes loginHandler={setIsLoggedIn}/>
      </PaperProvider>
    );
  } else{
    return (
      <PaperProvider>
        <DrawerNavigationRoutes/>
      </PaperProvider>
    )
  }


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
