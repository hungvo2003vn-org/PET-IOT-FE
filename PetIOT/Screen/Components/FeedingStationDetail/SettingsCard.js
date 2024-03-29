import React from 'react';
import {View,StyleSheet,Alert,ScrollView, Pressable,TouchableHighlight} from 'react-native';
import {Button,Card,Text,Switch, Portal, Modal, Chip, TextInput} from 'react-native-paper';

import AutoModeIcon from '../../../assets/FeedingStationDetailScreen/auto-mode.svg';
import ScheduleIcon from '../../../assets/FeedingStationDetailScreen/schedule.svg';
import SoundIcon from '../../../assets/FeedingStationDetailScreen/sound.svg';
import FoodAmountIcon from '../../../assets/FeedingStationDetailScreen/food-amount.svg';

import ScheduleModal from './ScheduleModal';
import DropdownComponent from './SoundDropdown';

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
        <View>
            <Text>Settings</Text>
            <Card style={styles.card}>
                <Card.Content style={styles.cardContent}>
                    {/* Auto mode */}
                    <View style={styles.cardList}>
                        <AutoModeIcon/>
                        <Text>Auto mode</Text>
                        <Switch 
                            value = {isAutoModeOn}
                            onValueChange ={onToggleAutoMode}
                            color = 'black'
                        />
                    </View>           

                    {/* Horizontal line */}
                    <View style={{borderBottomColor:'black', borderBottomWidth: 1}}/>

                    {/* Schedule */}
                    <View style={styles.cardList}>
                        <ScheduleIcon/>
                        <Text>Schedule</Text>

                        <Portal>
                            <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
                                <ScheduleModal />
                            </Modal>
                        </Portal>

                        <View style={styles.buttonCover}>
                            <Chip onPress={showModal}>Manage Schedule</Chip>
                        </View>
                    </View>          

                    {/* Horizontal line */}
                    <View style={{borderBottomColor:'black', borderBottomWidth: 1}}/>

                    {/* Sound */}
                    <View style={styles.cardList}>
                        <SoundIcon/>
                        <Text>Sound</Text>

                        {/* Sound options */}
                        <DropdownComponent/>
                    </View>           

                    {/* Horizontal line */}
                    <View style={{borderBottomColor:'black', borderBottomWidth: 1}}/>

                    {/* Food amount */}
                    <View style={styles.cardList}>
                        <FoodAmountIcon/>
                        <Text>Food amount (grams)</Text>
                        <TextInput
                            value={text}
                            onChangeText={text=> setText(text)}
                            inputMode = 'numeric'
                        />
                    </View>            
                    
                </Card.Content>
            </Card>
        </View>
    )
}

const styles = StyleSheet.create({
    card:{
        backgroundColor:'#FFF1E8',
        margin:6,
        marginTop: 20
    },

    cardList:{
        flexDirection:'row'
    },

    dropdown: {
        margin: 16,
        height: 50,
        borderBottomColor: 'gray',
        borderBottomWidth: 0.5,
      },
      placeholderStyle: {
        fontSize: 16,
      },
      selectedTextStyle: {
        fontSize: 16,
      },
      iconStyle: {
        width: 20,
        height: 20,
      },
      inputSearchStyle: {
        height: 40,
        fontSize: 16,
      },
})