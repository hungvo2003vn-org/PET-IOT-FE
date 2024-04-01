import React from 'react';
import {View,StyleSheet,Alert,ScrollView, Pressable,TouchableHighlight} from 'react-native';
import {Button,Card,Text,Switch, Portal, Modal, Chip, TextInput} from 'react-native-paper';


import MedicalRecordModal from './MedicalRecordModal';
import VaccineTakenModal from './VaccineTakenModal';
import OtherNotesModal from './OtherNotesModal';

export default function MedicalInformationCard(){
    //Schedule states
    const [visible, setVisible] = React.useState(false);
    const showModal = () => setVisible(true);
    const hideModal = () => setVisible(false);
    const containerStyle = {backgroundColor: 'white', padding: 20};

    //Food amount states
    const [text, setText] = React.useState("");


    return (
        <View style={styles.cardContainer}>
            <Text style = {styles.settingText}>Medical information</Text>
            <Card style={styles.card}>
                <Card.Content style={styles.cardContent}>

                    {/* Medical Record */}
                    <View style={styles.cardList}>
                        <Text style={styles.cardSetting}>Medical Record</Text>

                        <Portal>
                            <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
                                <MedicalRecordModal />
                            </Modal>
                        </Portal>

                        <Chip 
                            mode='outlined'
                            onPress={showModal}
                            textStyle={styles.chipText}
                            style={styles.chipStyle}
                        >view</Chip>
                    </View>           
                    
                    {/* Horizontal line */}
                    <View style={{borderBottomColor:'black', borderBottomWidth: 1}}/>

                    {/* Vaccine taken */}
                    <View style={styles.cardList}>
                        <Text style={styles.cardSetting}>Vaccine taken</Text>

                        <Portal>
                            <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
                                <VaccineTakenModal />
                            </Modal>
                        </Portal>

                        <Chip 
                            mode='outlined'
                            onPress={showModal}
                            textStyle={styles.chipText}
                            style={styles.chipStyle}
                        >view</Chip>
                    </View>             
                    
                    {/* Horizontal line */}
                    <View style={{borderBottomColor:'black', borderBottomWidth: 1}}/>
                    
                    {/* Current medication */}
                    <View style={styles.cardList}>
                        <Text style={styles.cardSetting}>Current medication</Text>
                        <TextInput
                            value={text}
                            mode='outlined'
                            onChangeText={text=> setText(text)}
                            inputMode = 'numeric'
                            dense='true'
                            style={styles.textInputControl}
                        />
                    </View>            
                    
                    {/* Horizontal line */}
                    <View style={{borderBottomColor:'black', borderBottomWidth: 1}}/>

                    {/* Other notes */}
                    <View style={styles.cardList}>
                        <Text style={styles.cardSetting}>Other Notes</Text>

                        <Portal>
                            <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
                                <OtherNotesModal />
                            </Modal>
                        </Portal>

                        <Chip 
                            mode='outlined'
                            onPress={showModal}
                            textStyle={styles.chipText}
                            style={styles.chipStyle}
                        >view</Chip>
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


})