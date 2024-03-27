import React from 'react';
import {View,Text,Image,StyleSheet, Alert, ScrollView} from 'react-native';
import {Button, TextInput } from 'react-native-paper';
import Logo from "../assets/common/logo.svg";
import UserIcon from "../assets/LoginScreen/account-svgrepo-com 2.svg";
import PasswordIcon from "../assets/LoginScreen/password-svgrepo-com 2.svg";


export default function LoginScreen(){

    return (
        // OUTER LAYER
        <ScrollView style = {styles.container}>
            {/* APP LOGO STACK */}
            <View style={styles.logo}>
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
                    <UserIcon/>
                    <TextInput 
                    label ="Username"
                    backgroundColor='#EFE0D6'
                    height = '48'
                    />
                </View>

                {/* PASSWORD INPUT BOX */}
                <View style = {styles.inputArea}>
                    <PasswordIcon/>
                    <TextInput 
                    label ="Password"
                    backgroundColor='#EFE0D6'
                    height='48'
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
                    onPress={()=>{Alert.alert('this button is pressed')}}
                >
                Login</Button>

                {/* Forgot Password */}
                <Text style={styles.bottomText}>Forgot password?</Text>

                <Text style={styles.bottomText}>Sign up now</Text>

            </View>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },

    logo:{
        flex:3,
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginTop: '20%',
    },

    appName:{
        flex:3,
        marginTop: '20%',
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
        width:275,
        height:48,
        alignSelf:'center',
        borderRadius:20,

    },

    bottom:{
        flex:3,
        width:'100%'
    },
    loginButton:{
        height:40,
        width:210,
        alignSelf: 'center',
    },
    bottomText:{
        alignSelf:'center',
        color: 'black',
        fontSize: 14,
        fontFamily:'Roboto',
        fontWeight: '400',
        letterSpacing: 0.10,

    }


  });
  