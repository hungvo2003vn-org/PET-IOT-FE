import React from 'react';
import {View,StyleSheet,Alert,ScrollView, Pressable,TouchableHighlight} from 'react-native';
import {Button,Card,Text,Switch, Portal, Modal, Chip, TextInput} from 'react-native-paper';

import NotificationIcon from '../../../assets/SettingsScreen/notifications.svg';
import DarkThemeIcon from '../../../assets/SettingsScreen/dark-mode.svg';
import LanguageIcon from '../../../assets/SettingsScreen/language.svg';

import LanguageModal from './LanguageModal';


export default function AppSettingsCard({stationMode,stationSound,foodAmount}){
    // Notification states
    const [isNotificationOn,setIsNotificationOn] = React.useState(stationMode==='Auto');
    const onToggleNotification = () => setIsNotificationOn(!isNotificationOn);

    // Language states
    const [visible, setVisible] = React.useState(false);
    const showModal = () => setVisible(true);
    const hideModal = () => setVisible(false);
    const containerStyle = {backgroundColor: 'white', padding: 20};

    // Dark theme states
    const [isDarkThemeOn,setIsDarkThemeOn] = React.useState(stationMode==='Auto');
    const onToggleDarkTheme = () => setIsDarkThemeOn(!isDarkThemeOn);


    return (
        <View style={styles.cardContainer}>
            <Text style = {styles.appSettingsText}>App settings</Text>
            <Card style={styles.card}>
                <Card.Content style={styles.cardContent}>
                    {/* Notification */}
                    <View style={styles.cardList}>
                        <NotificationIcon style={styles.cardIcon}/>
                        <Text style={styles.cardSetting}>Notification</Text>
                        <Switch 
                            value = {isNotificationOn}
                            onValueChange ={onToggleNotification}
                            color = 'black'
                            style={styles.cardControl}
                        />
                    </View>           

                    {/* Horizontal line */}
                    <View style={{borderBottomColor:'black', borderBottomWidth: 1}}/>

                    {/* Language */}
                    <View style={styles.cardList}>
                        <LanguageIcon style={styles.cardIcon}/>
                        <Text style={styles.cardSetting}>Language</Text>

                        <Portal>
                            <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
                                <LanguageModal />
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

                    {/* Dark Theme */}
                    <View style={styles.cardList}>
                        <DarkThemeIcon style={styles.cardIcon}/>
                        <Text style={styles.cardSetting}>Dark theme</Text>
                        <Switch 
                            value = {isDarkThemeOn}
                            onValueChange ={onToggleDarkTheme}
                            color = 'black'
                            style={styles.cardControl}
                        />
                    </View>          
                    
                    {/* Horizontal line */}
                    <View style={{borderBottomColor:'black', borderBottomWidth: 1}}/>

                    <Button 
                        style={styles.deleteButton}
                        buttonColor='#BA1A1A'
                        textColor='white'
                        onPress={()=> Alert.alert('You sure bout this?')}
                    >Delete data</Button>


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

    appSettingsText:{
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
    deleteButton:{
        width:121,
        alignSelf:'center',
        marginTop: 15,
    },

})