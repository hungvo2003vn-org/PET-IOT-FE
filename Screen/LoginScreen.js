import React from 'react';
import {View,Text,Image,StyleSheet, Alert, ScrollView, TextInput} from 'react-native';
import {Button } from 'react-native-paper';
import Logo from "../assets/common/logo.svg";
import UserIcon from "../assets/LoginScreen/account-svgrepo-com 2.svg";
import PasswordIcon from "../assets/LoginScreen/password-svgrepo-com 2.svg";


export default function LoginScreen(){

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
  