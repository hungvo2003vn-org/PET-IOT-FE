import React from 'react';
import {View,StyleSheet,Alert,ScrollView, Pressable,TouchableHighlight} from 'react-native';
import {Button,Card,Text} from 'react-native-paper';

export default function PetCard({petName, petStationName, petBehavior, petWeight, petStatus, navigation}){
    return (
        <Card style={styles.card}>
            <Pressable onPress={()=>navigation.navigate('PetDetail',{petName:petName,petStationName:petStationName})}>
                <Card.Title 
                    title={petName}
                    titleStyle={styles.cardTitleStyle}
                    subtitle={petStationName}
                    subtitleStyle = {styles.cardSubTitleStyle}
                />
                <Card.Content style={styles.cardContent}>
                    {/* Horizontal line */}
                    <View style={{borderBottomColor:'black', borderBottomWidth: 1}}/>

                    {/* Eating behavior */}
                    <View style={styles.informationDisplayer}>
                        <Text style={styles.informationType}>Eating behavior</Text>
                        <Text style={styles.informationValue}>{petBehavior}</Text>
                    </View>

                    {/* Food in chamber display */}
                    <View style={styles.informationDisplayer}>
                        <Text style={styles.informationType}>Current weight</Text>
                        <Text style={styles.informationValue}>{petWeight}</Text>
                    </View>

                    {/* Mode display */}
                    <View style={styles.informationDisplayer}>
                        <Text style={styles.informationType}>Pet status</Text>
                        <Text style={styles.informationValue}>{petStatus}</Text>
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
