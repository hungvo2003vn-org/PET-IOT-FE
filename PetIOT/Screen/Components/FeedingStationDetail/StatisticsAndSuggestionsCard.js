import React from 'react';
import {View,StyleSheet,Alert,ScrollView, Pressable,TouchableHighlight} from 'react-native';
import {Button,Card,Text,Switch, Portal, Modal, Chip, TextInput} from 'react-native-paper';

import QuestionIcon from '../../../assets/FeedingStationDetailScreen/question.svg';

import StatisticsModal from './StatisticsModal';

export default function StatisticsAndSuggestionsCard(){

    //Schedule states
    const [visible, setVisible] = React.useState(false);
    const showModal = () => setVisible(true);
    const hideModal = () => setVisible(false);
    const containerStyle = {backgroundColor: 'white', padding: 20};

    return (
        <View style={styles.cardContainer}>
            <Text style = {styles.settingText}>Statistics and suggestions</Text>
            <Card style={styles.card}>
                <Card.Content style={styles.cardContent}>

                    {/* Eat behavior */}
                    <View style={styles.cardList}>
                        <Text style={styles.cardSetting}>Eat behavior</Text>

                        <Text style={styles.textInputControl}>Avg. leftover food: 200g</Text> 

                        <Portal>
                            <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
                                <StatisticsModal />
                            </Modal>
                        </Portal>  

                        <Pressable onPress={showModal} >
                            <QuestionIcon style={styles.statistics} height={15} width={15}/>
                        </Pressable>
                    </View>            
                    
                    {/* Horizontal line */}
                    <View style={{borderBottomColor:'black', borderBottomWidth: 1}}/>

                    {/* Meal time */}
                    <View style={styles.cardList}>
                        <Text style={styles.cardSetting}>Meal time</Text>

                        <Text style={styles.textInputControl}>Avg. 50 minutes per meal</Text>

                        <Portal>
                            <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
                                <StatisticsModal />
                            </Modal>
                        </Portal>  

                        <Pressable onPress={showModal} >
                            <QuestionIcon style={styles.statistics} height={15} width={15}/>
                        </Pressable>

                    </View>            
                    
                    {/* Horizontal line */}
                    <View style={{borderBottomColor:'black', borderBottomWidth: 1}}/>

                    {/* Tips list */}
                    <View style={styles.tipsContainer}>
                        <Text style={styles.tipsText}>- Tips 1</Text>
                        <Text style={styles.tipsText}>- Tips 2</Text>
                        <Text style={styles.tipsText}>- Tips 3</Text>
                        <Text style={styles.tipsText}>- Tips 4</Text>
                        <Text style={styles.tipsText}>- Tips 5</Text>

                    </View>

                </Card.Content>
            </Card>
        </View>
    )
}

const styles = StyleSheet.create({
    cardContainer:{
        marginTop:20,
    },
    card:{
        backgroundColor:'#FFF1E8',
        margin:6,
    },
    cardIcon:{
        flex:1,
        alignSelf:'center',
    },
    cardSetting:{
        flex:1,
        alignSelf:'center',
        color:'#51443B',
        fontSize:14,
        fontFamily: 'Roboto',
        fontWeight:'500',
        lineHeight:20,
        letterSpacing: 0.10,
        marginLeft:5
    },
    statistics:{
        flex:1,
        alignSelf:'center',
        marginVertical: 5,
    },
    cardControl:{
        flex:1,
        alignSelf:'center',
    },
    textInputControl:{
        alignSelf:'center',
        height:30,
        textAlign:'center',
        textAlignVertical:'center'
    },
    chipText:{
        color:'black',
    },
    chipStyle:{
        height:35,
        alignSelf:'center',
        textAlignVertical:'center'
    },

    settingText:{
        color:'black',
        fontSize:14,
        fontFamily: 'Roboto',
        fontWeight: 700,
        lineHeight:20,
        letterSpacing: 0.10,
        marginLeft: 10,
    },

    cardList:{
        flexDirection:'row',
        height:50,
    },

    tipsContainer:{
        marginTop:6
    },
    tipsText:{
        color:'black',
        fontSize:14,
        fontFamily:'Roboto',
        fontWeight:'400',
        lineHeight:20,
        letterSpacing: 0.25,
        marginVertical:4,
    },


})