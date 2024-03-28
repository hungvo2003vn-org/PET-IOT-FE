import React from 'react';
import {View,StyleSheet,Alert,ScrollView} from 'react-native';
import {Button,Card,Text} from 'react-native-paper';

export default function FeedingStationCard({stationName,stationStatus,stationFoodRemain,stationChamberRemain, stationMode, stationSound}){
    return (
        <Card style={styles.card}>
            <Card.Title 
                title={stationName}
                subtitle={stationStatus}
                subtitleStyle = {{color: stationStatus == 'Online' ? 'green' : 'red'}}
            />
            <Card.Content style={styles.cardContent}>
                {/* Horizontal line */}
                <View style={{borderBottomColor:'black', borderBottomWidth: 1}}/>

                {/* Food on dish display */}
                <View style={styles.informationDisplayer}>
                    <Text style={styles.informationType}>Food on dish</Text>
                    <Text style={styles.informationValue}>{stationFoodRemain}</Text>
                </View>

                {/* Food in chamber display */}
                <View style={styles.informationDisplayer}>
                    <Text style={styles.informationType}>Food in chamber</Text>
                    <Text style={styles.informationValue}>{stationChamberRemain}</Text>
                </View>

                {/* Mode display */}
                <View style={styles.informationDisplayer}>
                    <Text style={styles.informationType}>Mode</Text>
                    <Text style={styles.informationValue}>{stationMode}</Text>
                </View>

                {/* Sound display */}
                <View style={styles.informationDisplayer}>
                    <Text style={styles.informationType}>Sound</Text>
                    <Text style={styles.informationValue}>{stationSound}</Text>
                </View>

            </Card.Content>
            <Card.Actions style={styles.cardAction}>
                <Button 
                    style={styles.cardFeedNowButton}
                    buttonColor = '#88511D'
                    textColor='white'
                >Feed now</Button>
                <Button 
                    style={styles.cardStopFeedingButton}
                    buttonColor='#BA1A1A'
                    textColor='white'
                >Stop feeding</Button>
            </Card.Actions>
        </Card>
    )
}

const styles = StyleSheet.create({
    card:{
        backgroundColor:'#FFF1E8',
        margin:6,
        marginTop: 20
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
    cardFeedNowButton:{
        flex:1,
    },
    cardStopFeedingButton:{
        flex:1,
    },
})
