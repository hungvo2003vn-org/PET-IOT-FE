import React from 'react';
import {View,StyleSheet,Alert,ScrollView, Pressable,TouchableHighlight} from 'react-native';
import {Button,Card,Text,Switch, Portal, Modal, Chip, TextInput} from 'react-native-paper';

import AutoModeIcon from '../../../assets/FeedingStationDetailScreen/auto-mode.svg';
import ScheduleIcon from '../../../assets/FeedingStationDetailScreen/schedule.svg';
import SoundIcon from '../../../assets/FeedingStationDetailScreen/sound.svg';
import FoodAmountIcon from '../../../assets/FeedingStationDetailScreen/food-amount.svg';

import ScheduleModal from './ScheduleModal';
import SoundDropdown from './SoundDropdown';

export default function SettingsCard(){
    // Auto mode states
    const [isAutoModeOn,setIsAutoModeOn] = React.useState(false);
    const onToggleAutoMode = () => setIsAutoModeOn(!isAutoModeOn);

    //Schedule states
    const [visible, setVisible] = React.useState(false);
    const showModal = () => setVisible(true);
    const hideModal = () => setVisible(false);
    const containerStyle = {backgroundColor: 'white', padding: 20};

    //Food amount states
    const [text, setText] = React.useState("");


    return (
        <View style={styles.cardContainer}>
            <Text style = {styles.settingText}>Settings</Text>
            <Card style={styles.card}>
                <Card.Content style={styles.cardContent}>
                    {/* Auto mode */}
                    <View style={styles.cardList}>
                        <AutoModeIcon style={styles.cardIcon}/>
                        <Text style={styles.cardSetting}>Auto mode</Text>
                        <Switch 
                            value = {isAutoModeOn}
                            onValueChange ={onToggleAutoMode}
                            color = 'black'
                            style={styles.cardControl}
                        />
                    </View>           

                    {/* Horizontal line */}
                    <View style={{borderBottomColor:'black', borderBottomWidth: 1}}/>

                    {/* Schedule */}
                    <View style={styles.cardList}>
                        <ScheduleIcon style={styles.cardIcon}/>
                        <Text style={styles.cardSetting}>Schedule</Text>

                        <Portal>
                            <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
                                <ScheduleModal />
                            </Modal>
                        </Portal>

                        <Chip 
                            mode='outlined'
                            onPress={showModal}
                            textStyle={styles.chipText}
                            style={styles.chipStyle}
                        >edit</Chip>
                    </View>          

                    {/* Horizontal line */}
                    <View style={{borderBottomColor:'black', borderBottomWidth: 1}}/>

                    {/* Sound */}
                    <View style={styles.cardList}>
                        <SoundIcon style={styles.cardIcon}/>
                        <Text style={styles.cardSetting}>Sound</Text>

                        {/* Sound options */}
                        <View style={styles.cardControl}>
                            <SoundDropdown />
                        </View>
                    </View>           

                    {/* Horizontal line */}
                    <View style={{borderBottomColor:'black', borderBottomWidth: 1}}/>

                    {/* Food amount */}
                    <View style={styles.cardList}>
                        <FoodAmountIcon style={styles.cardIcon}/>
                        <Text style={styles.cardSetting}>Food amount (grams)</Text>
                        <TextInput
                            value={text}
                            mode='outlined'
                            onChangeText={text=> setText(text)}
                            inputMode = 'numeric'
                            dense='true'
                            style={styles.textInputControl}
                        />
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