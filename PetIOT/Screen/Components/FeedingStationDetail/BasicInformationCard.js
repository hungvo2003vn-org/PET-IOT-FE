import React from 'react';
import {View,StyleSheet,Alert,ScrollView, Pressable,TouchableHighlight} from 'react-native';
import {Button,Card,Text,Switch, Portal, Modal, Chip, TextInput} from 'react-native-paper';


import FeedHistoryModal from './FeedHistoryModal';

export default function BasicInformationCard(){
    //Schedule states
    const [visible, setVisible] = React.useState(false);
    const showModal = () => setVisible(true);
    const hideModal = () => setVisible(false);
    const containerStyle = {backgroundColor: 'white', padding: 20};

    //Food amount states
    const [text, setText] = React.useState("");


    return (
        <View style={styles.cardContainer}>
            <Text style = {styles.settingText}>Basic information</Text>
            <Card style={styles.card}>
                <Card.Content style={styles.cardContent}>

                    {/* Food type */}
                    <View style={styles.cardList}>
                        <Text style={styles.cardSetting}>Food type</Text>
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

                    {/* Notes */}
                    <View style={styles.cardList}>
                        <Text style={styles.cardSetting}>User's note</Text>
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
                    
                    {/* Station name */}
                    <View style={styles.cardList}>
                        <Text style={styles.cardSetting}>Station name</Text>
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

                    {/* Staion ID */}
                    <View style={styles.cardList}>
                        <Text style={styles.cardSetting}>Station ID</Text>

                        <Text style={styles.textInputControl}>123@abc</Text>
                    </View>            
                    
                    {/* Horizontal line */}
                    <View style={{borderBottomColor:'black', borderBottomWidth: 1}}/>


                    {/* Feed history */}
                    <View style={styles.cardList}>
                        <Text style={styles.cardSetting}>Feed history</Text>

                        <Portal>
                            <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
                                <FeedHistoryModal />
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