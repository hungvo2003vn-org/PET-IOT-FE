import React from 'react';
import {View,StyleSheet,Alert,ScrollView, Pressable,TouchableHighlight} from 'react-native';
import {Button,Card,Text} from 'react-native-paper';

export default function PetCard({petName, petStationId, petBreed, petType, user_note, navigation, pet_id}){
    return (
        <Card style={styles.card}>
            <Pressable onPress={()=>navigation.navigate('PetDetail',{petName:petName,petStationId:petStationId, pet_id:pet_id})}>
                <Card.Title 
                    title={petName}
                    titleStyle={styles.cardTitleStyle}
                    subtitle={pet_id}
                    subtitleStyle = {styles.cardSubTitleStyle}
                />
                <Card.Content style={styles.cardContent}>
                    {/* Horizontal line */}
                    <View style={{borderBottomColor:'black', borderBottomWidth: 1}}/>

                    {/* Eating Breed */}
                    <View style={styles.informationDisplayer}>
                        <Text style={styles.informationType}>Breed</Text>
                        <Text style={styles.informationValue}>{petBreed}</Text>
                    </View>

                    {/* Food in chamber display */}
                    <View style={styles.informationDisplayer}>
                        <Text style={styles.informationType}>Type</Text>
                        <Text style={styles.informationValue}>{petType}</Text>
                    </View>

                    {/* Mode display */}
                    <View style={styles.informationDisplayer}>
                        <Text style={styles.informationType}>User note</Text>
                        <Text style={styles.informationValue}>{user_note}</Text>
                    </View>

                </Card.Content>
            </Pressable>
        </Card>
    )
}

const styles = StyleSheet.create({
    card:{
        backgroundColor:'#FFF1E8',
        margin:6,
        marginTop: 20
    },
    cardTitleStyle:{
        color:'#221A14',
        fontSize: 16,
        fontFamily:'Roboto',
        fontWeight:'600',
        lineHeight:24,
        letterSpacing:0.15
    },
    cardSubTitleStyle:{
        color:'#221A14',
        fontSize: 14,
        fontFamily:'Roboto',
        fontWeight:'600',
        lineHeight:20,
        letterSpacing:0.15
    },
    informationDisplayer:{
        flexDirection:'row',
        width:'100%',
        margin:10,
    },
    informationType:{
        flex:1,
        color:'#221A14',
        fontSize: 14,
        fontFamily:'Roboto',
        fontWeight: '400',
        lineHeight: 20,
        letterSpacing: 0.25,
    },
    informationValue:{
        flex:1,
        color:'#221A14',
        fontSize: 14,
        fontFamily:'Roboto',
        fontWeight: '400',
        lineHeight: 20,
        letterSpacing: 0.25,
        textAlign:'right'
    },
    cardAction:{
        flex:1,
        alignItems:'flex-start'
    },
})
