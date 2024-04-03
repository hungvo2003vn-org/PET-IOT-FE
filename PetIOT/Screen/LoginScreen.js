import React,{useState,useEffect} from 'react';
import {View,Text,Image,StyleSheet, Alert, ScrollView, TextInput} from 'react-native';
import {Button } from 'react-native-paper';
import axios from 'axios';
import * as SecureStore from 'expo-secure-store';
import * as Updates from 'expo-updates';


import Logo from "../assets/common/logo.svg";
import UserIcon from "../assets/LoginScreen/account-svgrepo-com 2.svg";
import PasswordIcon from "../assets/LoginScreen/password-svgrepo-com 2.svg";

const EXPO_PUBLIC_API_URL="https://pet-iot-be.onrender.com";

async function saveInformation(userToken){
    // SAVE USER INFORMATION
    await axios.get(`${EXPO_PUBLIC_API_URL}/v1/user/info`,{
        headers:{
            'Authorization':'Bearer '+userToken 
        }
    })
    .then(function(response){
        const data = JSON.stringify(response.data.data);
        if (data){
            SecureStore.setItem('userInformation',data);
            console.log(data);
            Updates.reloadAsync();
        }   else{
            Alert.alert("Cannot fetch user's information");
            return;
        }
    })
    .catch(function(error){
        const errorMessage = error.response?.data?.message || error.response?.statusText;
        console.error("Error:", errorMessage);
        Alert.alert("Error happens: "+errorMessage);
        return;
    })

}

async function handleLogin({username,password}){
    var userToken='';
    Alert.alert('Processing...');

    //VERIFY USER INFORMATION
    await axios.post(`${EXPO_PUBLIC_API_URL}/v1/user/login`,{
        email:`${username}`,
        password:`${password}`
    })
    .then(function(response){
        const data = (response.data)

        if (data){
            userToken = data.data.accessToken;
            SecureStore.setItem('accessToken',data.data.accessToken);
            SecureStore.setItem('refreshToken',data.data.refreshToken);
            saveInformation(userToken);
        }   else{
            Alert.alert('Error happens');
            return
        } 
        

    })
    .catch(function(error){
        const errorMessage = error.response?.data?.message || error.response?.statusText;
        console.error("Error:", errorMessage);
        Alert.alert("Error happens: "+errorMessage);
        return;
    })


    
}

export default function LoginScreen({navigation,route}){
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');
    const [error,setError] = useState(null);


    return (
        // OUTER LAYER
        <ScrollView style = {styles.container}>
            {/* APP LOGO STACK */}
            <View style={styles.logo} >
                <Logo />
            </View>

            {/* APP NAME STACK */}
            <View style = {styles.appName}>
                <Text style={styles.appNameText}>PetIOT</Text>
            </View>

            {/* USER LOGIN INFORMATION STACK */}
            <View style = {styles.inputBoxes}>
                {/* USERNAME INPUT BOX */}
                <View style = {styles.inputArea}>
                    {/* Icon container */}
                    <View style = {styles.inputAreaIcon}>
                        <UserIcon  width={23} height = {23}/>
                    </View>

                    <TextInput 
                    // label ="Username"
                    placeholder='Username'
                    backgroundColor='#EFE0D6'
                    underlineColor='#EFE0D6'
                    activeUnderlineColor='#EFE0D6'
                    selectionColor='#EFE0D6'
                    cursorColor='black'
                    style={styles.inputAreaText}
                    onChangeText={(text)=> setUsername(text)}
                    />
                </View>

                {/* PASSWORD INPUT BOX */}
                <View style = {styles.inputArea}>
                    {/* Icon container */}
                    <View style={styles.inputAreaIcon}>
                        <PasswordIcon  width={23} height = {23}/>
                    </View>
                    <TextInput 
                    placeholder ="Password"
                    backgroundColor='#EFE0D6'
                    underlineColor='#EFE0D6'
                    cursorColor='black'
                    activeUnderlineColor='#EFE0D6'
                    style={styles.inputAreaText}
                    secureTextEntry={true}
                    // onchangeText={(text)=>setPassword(text)}
                    onChangeText={setPassword}
                    />
                </View>

            </View>

            {/* LOGIN - FORGOT PASSWORD - SIGNUP STACK */}
            <View style = {styles.bottom}>
                {/* Login button */}
                <Button
                    style = {styles.loginButton}
                    mode = 'contained'
                    buttonColor = '#88511D'
                    onPress={()=>handleLogin({username,password})}
                >
                Login</Button>

                {/* Forgot Password */}
                <Text style={styles.bottomTextForgotPassword}>Forgot password?</Text>

                <Text style={styles.bottomTextSignUpNow}>Sign up now</Text>

            </View>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FFDCC2',
    },

    logo:{
        flex:3,
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginTop: '20%',
    },

    appName:{
        flex:3,
        marginTop: '5%',
        marginBottom: '20%',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    appNameText:{
        fontSize: 36,
        fontWeight: '700',
        fontFamily: 'Roboto',
        lineHeight: 44,
        color:'black',
    },  

    inputBoxes:{
        flex:3,
    },
    inputArea:{
        flexDirection:'row',
        backgroundColor:'#EFE0D6',
        margin:'2%',
        width:'70%',
        height:48,
        alignSelf:'center',
        borderRadius:20,
    },
    inputAreaText:{
        height: 48,
        alignSelf: 'center',
        justifyContent: 'center',
        marginLeft:5,
    },
    inputAreaIcon:{
        alignSelf:'center',
        backgroundColor:'white',
        height:40,
        width: 40,
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 13,
        padding:0,
    },  

    bottom:{
        flex:3,
        width:'100%',
        paddingTop:100,
    },
    loginButton:{
        height:40,
        width:210,
        alignSelf: 'center',
    },
    bottomTextForgotPassword:{
        alignSelf:'center',
        color: 'black',
        fontSize: 14,
        fontFamily:'Roboto',
        fontWeight: '400',
        letterSpacing: 0.10,
        margin:10,
        paddingTop:30,
    },
    bottomTextSignUpNow:{
        alignSelf:'center',
        color: 'black',
        fontSize: 14,
        fontFamily:'Roboto',
        fontWeight: '400',
        letterSpacing: 0.10,
        margin:20,
    }


  });
  