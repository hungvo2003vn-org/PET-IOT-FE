import React from 'react';
import {View,StyleSheet,Alert,ScrollView, Pressable,TouchableHighlight} from 'react-native';
import {Button,Card,Text,Switch, Portal, Modal, Chip, TextInput} from 'react-native-paper';


import PetTrainingTutorialIcon from '../../../assets/SettingsScreen/pettraining.svg';
import FAQsIcon from '../../../assets/SettingsScreen/FAQs.svg';
import AppTutorialIcon from '../../../assets/SettingsScreen/apptutorial.svg';
import AboutUsIcon from '../../../assets/SettingsScreen/aboutus.svg';


import PetTrainingTutorialModal from './PetTrainingTutorialModal';
import FAQsModal from './FAQsModal';
import AppTutorialModal from './AppTutorialModal';
import AboutUsModal from './AboutUsModal';

export default function UserAccountCard({stationMode,stationSound,foodAmount}){
    

    //States
    const [visible, setVisible] = React.useState(false);
    const showModal = () => setVisible(true);
    const hideModal = () => setVisible(false);
    const containerStyle = {backgroundColor: 'white', padding: 20};


    return (
        <View style={styles.cardContainer}>
            <Text style = {styles.settingText}>Help Center</Text>
            <Card style={styles.card}>
                <Card.Content style={styles.cardContent}>         
                    {/* FAQs */}
                    <View style={styles.cardList}>
                        <FAQsIcon style={styles.cardIcon}/>
                        <Text style={styles.cardSetting}>FAQs</Text>

                        <Portal>
                            <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
                                <FAQsModal />
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

                    {/* PetTrainingTutorial */}
                    <View style={styles.cardList}>
                        <PetTrainingTutorialIcon style={styles.cardIcon}/>
                        <Text style={styles.cardSetting}>Pet training tutorial</Text>

                        <Portal>
                            <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
                                <PetTrainingTutorialModal />
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

                    {/* AppTutorial */}
                    <View style={styles.cardList}>
                        <AppTutorialIcon style={styles.cardIcon}/>
                        <Text style={styles.cardSetting}>App tutorial</Text>

                        <Portal>
                            <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
                                <AppTutorialModal />
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

                    {/* AboutUs */}
                    <View style={styles.cardList}>
                        <AboutUsIcon style={styles.cardIcon}/>
                        <Text style={styles.cardSetting}>About us</Text>

                        <Portal>
                            <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
                                <AboutUsModal />
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
        marginLeft:15,
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