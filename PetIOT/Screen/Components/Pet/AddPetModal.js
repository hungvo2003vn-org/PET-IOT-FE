import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Alert, ScrollView, Pressable, TouchableHighlight } from 'react-native';
import { Button, Card, Text, Modal, TextInput, Switch } from 'react-native-paper';
import Spinner from 'react-native-loading-spinner-overlay';

import addPet from '../../../HandlingFunctions/Pet/addPet';

function valueCheck(data) {
    for (const item in data) {
        if (data[item].trim() === '') { // Trim white spaces before checking
            Alert.alert(`${item} cannot be empty`);
            return false;
        }
    }
    return true;
}

export default function AddPetModal({ hideAddPetModal, onFinish, setPetList }) {
    const [_id, set_id] = useState('');
    const [type, setType] = useState('');
    const [birth_date, setBirth_date] = useState('');
    const [breed, setBreed] = useState('');
    const [color, setColor] = useState('');
    const [name, setName] = useState('');
    const [user_note, setUser_note] = useState(null);
    const [station_id, setStation_id] = useState('');
    const [spinnerVisibility, setSpinnerVisibility] = useState(false);

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.addPetText}>Add pet</Text>
            <Spinner
                visible={spinnerVisibility}
            />

            <TextInput
                label="Type"
                value={type}
                onChangeText={setType}
                style={styles.textInput}
            />

            <TextInput
                label="Birth Date"
                value={birth_date}
                onChangeText={setBirth_date}
                style={styles.textInput}
            />

            <TextInput
                label="Breed"
                value={breed}
                onChangeText={setBreed}
                style={styles.textInput}
            />

            <TextInput
                label="Color"
                value={color}
                onChangeText={setColor}
                style={styles.textInput}
            />

            <TextInput
                label="Pet name"
                value={name}
                onChangeText={setName}
                style={styles.textInput}
            />

            <TextInput
                label="User note"
                value={user_note}
                onChangeText={setUser_note}
                style={styles.textInput}
            />

            <Button
                mode={'contained'}
                style={styles.button}
                onPress={async () => {
                    if (valueCheck({ type, breed, name })) {
                        setSpinnerVisibility(true);
                        await addPet({ _id, type, birth_date, breed, color, name, user_note, station_id }, hideAddPetModal);
                        await onFinish({ setPetList });
                    }
                }}
            >
                Enter
            </Button>
        </ScrollView>
    );
}

const styles = StyleSheet.create({

    container: {
        backgroundColor: '#FFFFFF',
        padding: 20,
    },

    textInput: {
        margin: 20,
        backgroundColor: '#D6C3B6',
    },

    button: {
        marginBottom: 70,
        margin: 40,
        backgroundColor: '#51443B',
    },

    addPetText: {
        color: '#221A14',
        fontSize: 20,
        fontFamily: 'Roboto',
        fontWeight: '700',
        lineHeight: 24,
        letterSpacing: 0.15,
        alignSelf: 'center'
    },
});
