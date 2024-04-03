import React,{useState,useEffect} from 'react';
import {View,StyleSheet,Alert,ScrollView, Pressable,TouchableHighlight} from 'react-native';
import {Button,Card,Text,Modal,TextInput} from 'react-native-paper';

import addStation from '../../../HandlingFunctions/FeedingStation/addStation';


export default function AddStationModal({hideAddStationModal}){
    const [station_id,setStation_id] = useState('');
    const [box_volumn,setBox_volumn] = useState('1');
    const [box_remain,setBox_remain] = useState('2');
    const [food_name,setFood_name] = useState('Cat food');
    const [disk_remain,setDisk_remain] = useState('3');
    const [mode,setMode] = useState('1');
    const [soundType,setSoundType] = useState('Meow');
    const [pet_id,setPet_id] = useState(null);



    return (
        <ScrollView style={styles.container}>
            <Text>Add station</Text>
            <TextInput
                label="Station ID"
                value={station_id}
                onChangeText={station_id=>setStation_id(station_id)}
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

            <TextInput
                label="Mode"
                value={mode}
                onChangeText={mode=>setMode(mode)}
                style={styles.textInput}
            >
            </TextInput>

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
                    Alert.alert('Processing');
                    await addStation({station_id,box_volumn,box_remain,food_name,disk_remain,mode,soundType,pet_id},hideAddStationModal)
                }}
        
            >
                Enter
            </Button>
        </ScrollView>
    )
}

const styles = StyleSheet.create({

    container:{
        backgroundColor: 'white',
        padding: 20,
    },

    textInput:{
        margin:20,
    },

    button:{
        margin:40
    }
})
