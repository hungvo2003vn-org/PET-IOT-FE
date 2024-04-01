import React from 'react';
import {View,StyleSheet,Alert,ScrollView, Pressable,TouchableHighlight} from 'react-native';
import {Button,Card,Text,Switch, Portal, Modal, Chip, TextInput} from 'react-native-paper';

import BirthYearDropdown from './BirthYearDropdown';
import SpeciesDropdown from './SpeciesDropdown';
import EatStationDropdown from './EatStationDropdown';
import OverallStatusDropdown from './OverallStatusDropdown';
import PetImagesModal from './PetImagesModal';

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

                    {/* Species */}
                    <View style={styles.cardList}>
                        <Text style={styles.cardSetting}>Species</Text>

                        {/* Species options */}
                        <View style={styles.cardControl}>
                            <SpeciesDropdown />
                        </View>
                    </View>           
                    
                    {/* Horizontal line */}
                    <View style={{borderBottomColor:'black', borderBottomWidth: 1}}/>

                    {/* Breed */}
                    <View style={styles.cardList}>
                        <Text style={styles.cardSetting}>Breed</Text>
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
                    
                    {/* Name */}
                    <View style={styles.cardList}>
                        <Text style={styles.cardSetting}>Name</Text>
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

                    {/* Birth year */}
                    <View style={styles.cardList}>
                        <Text style={styles.cardSetting}>Birth Year</Text>

                        {/* BirthYear options */}
                        <View style={styles.cardControl}>
                            <BirthYearDropdown />
                        </View>
                    </View>            
                    
                    {/* Horizontal line */}
                    <View style={{borderBottomColor:'black', borderBottomWidth: 1}}/>
                    
                    {/* Primary color */}
                    <View style={styles.cardList}>
                        <Text style={styles.cardSetting}>Primary color</Text>
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


                    {/* Images */}
                    <View style={styles.cardList}>
                        <Text style={styles.cardSetting}>Images</Text>

                        <Portal>
                            <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
                                <PetImagesModal/>
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
                    
                    {/* Eat station */}
                    <View style={styles.cardList}>
                        <Text style={styles.cardSetting}>Eat Station</Text>

                        {/* EatStation options */}
                        <View style={styles.cardControl}>
                            <EatStationDropdown />
                        </View>
                    </View>  
                    
                    {/* Horizontal line */}
                    <View style={{borderBottomColor:'black', borderBottomWidth: 1}}/>
                    
                    {/* Weight */}
                    <View style={styles.cardList}>
                        <Text style={styles.cardSetting}>Weight</Text>
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
                    
                    {/* Overall status */}
                    <View style={styles.cardList}>
                        <Text style={styles.cardSetting}>Overall status</Text>

                        {/* OverallStatus options */}
                        <View style={styles.cardControl}>
                            <OverallStatusDropdown />
                        </View>
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