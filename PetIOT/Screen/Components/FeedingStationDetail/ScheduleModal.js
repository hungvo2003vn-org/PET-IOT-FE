import React,{useEffect,useState,useRef} from 'react';
import {View,StyleSheet,Alert,ScrollView, Pressable,TouchableHighlight} from 'react-native';
import {Button,Card,Text,TextInput} from 'react-native-paper';
import DateTimePicker from '@react-native-community/datetimepicker';

import scheduleLoader from '../../../HandlingFunctions/FeedingStation/scheduleLoader';
import removeSchedule from '../../../HandlingFunctions/FeedingStation/removeSchedule';
import addSchedule from '../../../HandlingFunctions/FeedingStation/addSchedule';

import RemoveIcon from "../../../assets/common/remove.svg";

// TO GENEREATE FULL DATE STRING FROM LOCAL TIME STRING
function getFormattedDate(timeString) {
    // 1. Create a Date object for today at midnight (00:00:00)
    const today = new Date();
    today.setHours(0, 0, 0, 0);
  
    // 2. Extract hours and minutes from the input string
    const timeParts = timeString.split(':');
    const hours = parseInt(timeParts[0]);
    const minutes = parseInt(timeParts[1]);
  
    // 3. Set hours and minutes on the Date object
    today.setHours(hours+7, minutes);
  
    // 4. Format the date and time in the desired format (yyyy-mm-dd hh:mm:00)
    return (today.toISOString().slice(0, 16) + ':00').replace('T',' ');
  }
  
  
// TO GENERATE LOCAL TIME STRING FROM ISO STRING
function formatDateForInput(isoTimeString){
    // 1. Create a Date object from the ISO string
    const date = new Date(isoTimeString);
  
    // 2. Adjust for GMT+7 by adding 7 hours
    date.setHours(date.getHours());
  
    // 3. Extract hours and minutes (using zero-padding for single digits)
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
  
    // 4. Format as "hh:mm"
    return `${hours}:${minutes}`;
}

function formatDate(isoTimeString) {
    // 1. Create a Date object from the ISO string
    const date = new Date(isoTimeString);
  
    // 2. Adjust for GMT+7 by adding 7 hours
    date.setHours(date.getHours()-7);
  
    // 3. Extract hours and minutes (using zero-padding for single digits)
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
  
    // 4. Format as "hh:mm"
    return `${hours}:${minutes}`;
  }
  

export default function ScheduleModal({station_id}){

    const [scheduleList, setScheduleList] = useState([]);
    const [startTime,setStartTime] = useState(formatDateForInput(Date.now()));
    const [endTime,setEndTime] = useState(formatDateForInput(Date.now()));
    const [foodAmount,setFoodAmount] = useState(500);
    // console.log(getFormattedDate(startTime));
    // console.log(getFormattedDate(endTime));


    // USE EFFECT TO REFRESH SCREEN INTERVALY
    useEffect(()=>{
        scheduleLoader({station_id,setScheduleList});
    },[]);
    
    console.log(scheduleList);

    return (
        <ScrollView style={styles.container}>
            <View>
                {/* TITLE SPACE */}
                <Text style={styles.title}>Schedule settings</Text>

                {/* TIME DISPLAY */}
                <View>

                    {scheduleList.length !== 0?
                        scheduleList.map((schedule)=>{
                            return (
                            <View style={styles.informationDisplayer}>
                                <Text style={styles.informationType}>{formatDate(Date.parse(schedule.start_time))} - {formatDate(Date.parse(schedule.end_time))} {schedule.status === 'Failed' ? '(Canceled)': ''}</Text>
                                <Text style={styles.informationValue}>{schedule.feed_amount}g</Text>
                                <Pressable onPress={()=>{
                                    removeSchedule(schedule._id);
                                    scheduleLoader({station_id,setScheduleList});
                                    Alert.alert("Schedule canceled");


                                }}>
                                    <RemoveIcon style={styles.removeIcon}/>
                                </Pressable>
                            </View>
                            )
                    }
                    
                    )
                    : <Text style={{margin:30, textAlign:'center'}}>No schedule to show</Text>

                    }

                </View>
                
                {/* Horizontal line */}
                <View style={{borderBottomColor:'black', borderBottomWidth: 1}}/>
                <View style={styles.inputGroup}>
                    <TextInput
                        label="Start time"
                        value={startTime}
                        onChangeText={startTime=>setStartTime(startTime)}
                        style={styles.textInput}
                        inputMode = 'text'

                    >
                    </TextInput>

                    <TextInput
                        label="End time"
                        value={endTime}
                        onChangeText={endTime=>setEndTime(endTime)}
                        style={styles.textInput}
                        inputMode = 'text'

                    >
                    </TextInput>

                    <TextInput
                        label="Food amount (g)"
                        value={foodAmount}
                        onChangeText={foodAmount=>setFoodAmount(foodAmount)}
                        style={styles.textInput}
                        inputMode = 'numeric'

                    >
                    </TextInput>
                </View>
                <Button
                    style={styles.addButton}
                    buttonColor='#88511D'
                    textColor='white'
                    onPress={async ()=>{
                        
                        console.log(getFormattedDate(startTime));
                        console.log(getFormattedDate(endTime));



                        await addSchedule({
                            station_id:station_id,
                            feed_amount: foodAmount,
                            start_time: getFormattedDate(startTime),
                            end_time: getFormattedDate(endTime)
                        });

                        scheduleLoader({station_id,setScheduleList});



                    }}
                > Add</Button>

            </View>
        </ScrollView>
    )
}


const styles = StyleSheet.create({
    container:{
        backgroundColor: 'white'
    },

    title:{
        backgroundColor:'#88511D',
        color:'white',
        textAlign:'center',
        padding:10,
    },
    addButton:{
        width:210,
        alignSelf:'center',
        marginTop: 30,
        marginBottom: 30,
    },
    informationDisplayer:{
        flexDirection:'row',
        width:'100%',
        margin:20,
    },
    informationType:{
        flex:1,
        color:'#51443B',
        fontSize: 14,
        fontFamily:'Roboto',
        fontWeight: '500',
        lineHeight: 20,
        letterSpacing: 0.10,
        textAlign:'left',
        marginStart:0,
    },
    informationValue:{
        color:'#51443B',
        fontSize: 14,
        fontFamily:'Roboto',
        fontWeight: '500',
        lineHeight: 20,
        letterSpacing: 0.10,
        textAlign:'right',
        marginEnd:20,
    },
    removeIcon:{
        flex:1,
        marginEnd:30
    },

    textInput:{
        margin:5,
        backgroundColor:'#D6C3B6',
    },
    inputGroup:{
        marginTop: 20
    }
})