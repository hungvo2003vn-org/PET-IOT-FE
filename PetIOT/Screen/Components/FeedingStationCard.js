import React from 'react';
import {View,StyleSheet,Alert,ScrollView} from 'react-native';
import {Button,Card,Text} from 'react-native-paper';

export default function FeedingStationCard({stationName,stationStatus,stationFoodRemain,stationChamberRemain, stationMode, stationSound}){
    return (
        <Card>
            <Card.Title 
                title={stationName}
                subtitle={stationStatus}
            />
            <Card.Content>
                {/* Horizontal line */}
                <View style={{borderBottomColor:'black', borderBottomWidth: 1}}/>

                {/* Food on dish display */}
                <View style={styles.informationDisplayer}>
                    <Text>Food on dish</Text>
                    <Text>{stationFoodRemain}</Text>
                </View>

                {/* Food in chamber display */}
                <View style={styles.informationDisplayer}>
                    <Text>Food in chamber</Text>
                    <Text>{stationChamberRemain}</Text>
                </View>

                {/* Mode display */}
                <View style={styles.informationDisplayer}>
                    <Text>Mode</Text>
                    <Text>{stationMode}</Text>
                </View>

                {/* Sound display */}
                <View style={styles.informationDisplayer}>
                    <Text>Sound</Text>
                    <Text>{stationSound}</Text>
                </View>

            </Card.Content>
            <Card.Actions>
                <Button>Feed now</Button>
                <Button>Stop feeding</Button>
            </Card.Actions>
        </Card>
    )
}

const styles = StyleSheet.create({
    informationDisplayer:{
        flexDirection:'row',
    }
})
