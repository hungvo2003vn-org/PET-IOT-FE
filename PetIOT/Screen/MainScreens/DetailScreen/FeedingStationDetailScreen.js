import React from 'react';
import {View,Text,StyleSheet,Alert,ScrollView, Pressable,TouchableHighlight} from 'react-native';
import {Button, Appbar} from 'react-native-paper';
import PowerIcon from '../../../assets/FeedingStationDetailScreen/power-button-svgrepo-com 2.svg' 

export default function FeedingStationDetailScreen({navigation,route}){
    return (
        //OUTER LAYER
        <ScrollView>

            {/* APP BAR */}
            <View style={styles.appBarContainer}>
                <Appbar.Header mode='medium' style={styles.appBar}>
                    {/* Back button */}
                    <Appbar.BackAction onPress={()=> navigation.navigate('FeedingStation') } color='white' style={{marginTop: 10}}/>

                    {/* Station name */}
                    <Appbar.Content 
                        title={route.params.stationName}
                        titleStyle={styles.appBarContentTitle}
                        style={styles.appBarContent}
                    />
                </Appbar.Header> 

                {/* Station status */}
                <View style={styles.statusView}>
                    <Text style={[{color: route.params.stationStatus == 'Online' ? '#E0E7B1' : 'red'},styles.status]}>
                        {route.params.stationStatus}
                    </Text>
                </View>


                <View style={styles.powerIconContainer}>
                    <TouchableHighlight 
                        onPress={()=>console.log('Power button is pressed')} 
                        style={{borderRadius:100}}
                    >
                            <PowerIcon/>
                    </TouchableHighlight>
                </View>

            </View>

        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white',
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

    statusView:{
        height:20,
        marginTop:-20,
    },

    status:{
        textAlign:'center',
        fontSize: 14,
        fontFamily: 'Roboto',
        fontWeight: '500',
        lineHeight: 20,
        letterSpacing: 0.10,
        height:20,
    },

    powerIconContainer:{
        alignSelf:'center',
        margin:25,
    },
})