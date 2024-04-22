import React,{useState,useEffect} from 'react';
import {View,StyleSheet,Alert,ScrollView, Pressable,TouchableHighlight} from 'react-native';
import {Button,Card,Text,Modal,TextInput,Switch} from 'react-native-paper';
import Spinner from 'react-native-loading-spinner-overlay';

import addStation from '../../../HandlingFunctions/FeedingStation/addStation';


function valueCheck(data){
    for (item in data){
        if (data[item].length == 0){
            Alert.alert(`${item} cannot be empty`)
            return;
        }
    }
}


export default function AddStationModal({hideAddStationModal,onFinish,setStationList}){
    const [station_id,setStation_id] = useState('');
    const [box_volumn,setBox_volumn] = useState('');
    const [box_remain,setBox_remain] = useState('');
    const [food_name,setFood_name] = useState('');
    const [disk_remain,setDisk_remain] = useState('');
    const mode = false
    const [soundType,setSoundType] = useState('');
    const [pet_id,setPet_id] = useState(null);
    const [station_name,setStation_name] = useState('');
    const [spinnerVisibility, setSpinnerVisibility] = useState(false);



    return (
        <ScrollView style={styles.container}>
            <Text style={styles.addStationText}>Add station</Text>
            <Spinner
                visible={spinnerVisibility}
            />
            <TextInput
                label="Station ID"
                value={station_id}
                onChangeText={station_id=>setStation_id(station_id)}
                style={styles.textInput}
            >
            </TextInput>

            <TextInput
                label="Station name"
                value={station_name}
                onChangeText={station_name=>setStation_name(station_name)}
                style={styles.textInput}
            >
            </TextInput>

            <TextInput
                label="Box volume"
                value={box_volumn}
                onChangeText={box_volumn=>setBox_volumn(box_volumn)}
                style={styles.textInput}
            >
            </TextInput>

            <TextInput
                label="Box remain"
                value={box_remain}
                onChangeText={box_remain=>setBox_remain(box_remain)}
                style={styles.textInput}
            >
            </TextInput>

            <TextInput
                label="Food name"
                value={food_name}
                onChangeText={food_name=>setFood_name(food_name)}
                style={styles.textInput}
            >
            </TextInput>

            <TextInput
                label="Disk remain"
                value={disk_remain}
                onChangeText={disk_remain=>setDisk_remain(disk_remain)}
                style={styles.textInput}
            >
            </TextInput>
{/* 
            <TextInput
                label="Mode"
                value={mode}
                onChangeText={mode=>setMode(mode)}
                style={styles.textInput}
            >
            </TextInput> */}


            <TextInput
                label="Sound type"
                value={soundType}
                onChangeText={soundType=>setSoundType(soundType)}
                style={styles.textInput}
            >
            </TextInput>

            <TextInput
                label="Pet id"
                value={pet_id}
                onChangeText={pet_id=>setPet_id(pet_id)}
                style={styles.textInput}
            >
            </TextInput>



            <Button
                mode={'contained'}
                style={styles.button}
                onPress={async ()=>{
                    // setSpinnerVisibility(true);
                    valueCheck({station_id, box_volumn, box_remain, food_name, disk_remain, station_name})
                    // await addStation({station_id,box_volumn,box_remain,food_name,disk_remain,mode,soundType,pet_id,station_name,setSpinnerVisibility},hideAddStationModal)
                    // await onFinish({setStationList});
                }}
        
            >
                Enter
            </Button>
        </ScrollView>
    )
}

const styles = StyleSheet.create({

    container:{
        backgroundColor:'#FFFFFF',
        padding: 20,
    },

    textInput:{
        margin:20,
        backgroundColor:'#D6C3B6',
    },

    button:{
        marginBottom:70,
        margin:40,
        backgroundColor:'#51443B',
    },

    addStationText:{
        color:'#221A14',
        fontSize:20,
        fontFamily:'Roboto',
        fontWeight:'700',
        lineHeight:24,
        letterSpacing:0.15,
        alignSelf:'center'
    },
})
