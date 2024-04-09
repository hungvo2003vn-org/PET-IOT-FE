import React,{useState,useEffect} from 'react';
import {View,StyleSheet,Alert,ScrollView, Pressable,TouchableHighlight} from 'react-native';
import {Button,Card,Text,Modal,TextInput} from 'react-native-paper';

import addPet from '../../../HandlingFunctions/Pet/addPet';


export default function AddPetModal({hideAddPetModal}){
    const [pet_id,setPet_id] = useState('');
    const [species,setSpecies] = useState('1');
    const [breed,setBreed] = useState('2');
    const [birth_year,setBirth_year] = useState('5 kg');
    const [color,setColor] = useState('3');
    const [station_id,setStation_id] = useState(null);




    return (
        <ScrollView style={styles.container}>
            <Text>Add pet</Text>
            <TextInput
                label="Pet ID"
                value={pet_id}
                onChangeText={pet_id=>setPet_id(pet_id)}
                style={styles.textInput}
            >
            </TextInput>

            <TextInput
                label="Species"
                value={species}
                onChangeText={species=>setSpecies(species)}
                style={styles.textInput}
            >
            </TextInput>

            <TextInput
                label="Breed"
                value={breed}
                onChangeText={breed=>setBreed(breed)}
                style={styles.textInput}
            >
            </TextInput>

            <TextInput
                label="Birth_year"
                value={birth_year}
                onChangeText={birth_year=>setBirth_year(birth_year)}
                style={styles.textInput}
            >
            </TextInput>

            <TextInput
                label="Color"
                value={color}
                onChangeText={color=>setColor(color)}
                style={styles.textInput}
            >
            </TextInput>

            

            <TextInput
                label="Station ID"
                value={station_id}
                onChangeText={station_id=>setStation_id(station_id)}
                style={styles.textInput}
            >
            </TextInput>

            



            <Button
                mode={'contained'}
                style={styles.button}
                onPress={async ()=>{
                    Alert.alert('Processing');
                    await addPet({pet_id,species,breed,birth_year,color,station_id},hideAddPetModal)
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