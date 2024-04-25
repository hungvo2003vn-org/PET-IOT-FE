import React,{useState,useEffect,useCallback,useRef} from 'react';
import {View,Text,StyleSheet,Alert,ScrollView,FlatList, RefreshControl} from 'react-native';
import {Button, Appbar,Modal,Portal, ActivityIndicator} from 'react-native-paper';
import PetCard from '../Components/Pet/PetCard';
import AddPetModal from '../Components/Pet/AddPetModal'; 
import fetchPet from '../../HandlingFunctions/Pet/fetchPet';

export default function PetScreen({navigation}){
    
     //ADD FEED STATION BOX
     const [addPetModalVisible,setAddPetModalVisible] = useState(false);
     const showAddPetModal = ()=> setAddPetModalVisible(true);
     const hideAddPetModal = ()=> setAddPetModalVisible(false);
 
 
     // Pet LIST RENDERING
     const [petList,setPetList] = useState([]);
 
     // REFRESH MECHANISM
     const [refreshing,setRefreshing] = useState(false);
     const onRefresh = useCallback(()=>{
         setRefreshing(true);
         setTimeout(()=>{
             setRefreshing(false);
             fetchPet({setPetList})
         },2000);
     },[]);
 
     // USE EFFECT TO REFRESH SCREEN INTERVALY
     const intervalRef = useRef(null);
 
     useEffect(() => {
         fetchPet({setPetList});
         //Implementing the setInterval method
         const intervalId = setInterval(() => {
             fetchPet({setPetList});
         }, 20000);
 
         intervalRef.current = intervalId;
         return () => clearInterval(intervalRef.current);
 
     }, []); // Empty dependency array: runs only on initial render
    
    return (
        //OUTER LAYER
        <ScrollView style={styles.container}>

            {/* APP BAR */}
            <Appbar.Header mode='large' style={styles.appBar}>
                <Appbar.Content 
                    title='Pet'
                    titleStyle={styles.appBarContentTitle}
                    style={styles.appBarContent}
                />
            </Appbar.Header>

            {/* PET DISPLAY */}
            <View>

                {
                    petList.map((pet) =>
                            <PetCard
                                petName = {pet.name}
                                petStationId={pet.station_id}
                                user_note={pet.user_note}
                                navigation={navigation}
                                key={pet._id}
                                pet_id={pet._id}
                                petType={pet.type}
                                petBreed={pet.breed}
                                birth_date={pet.birth_date}
                                color={pet.color}
                            />
                        
                    )
                    
                }


            </View>

            <Portal>
                <Modal
                    visible={addPetModalVisible}
                    onDismiss={hideAddPetModal}
                >
                    <AddPetModal
                        hideAddPetModal={hideAddPetModal}
                    ></AddPetModal>
                </Modal>
            </Portal>

            <Button 
                style={styles.addButton}
                buttonColor='#88511D'
                textColor='white'
                onPress={showAddPetModal}
            >Add</Button>


        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },

    appBar:{
        backgroundColor: '#88511D',
    },
    appBarContent:{
        width:'100%',
        height:44,
        marginLeft:0,
        marginBottom:31,
    },
    appBarContentTitle:{
        backgroundColor: '#88511D',
        color: 'white',
        fontSize: 36,
        fontFamily: 'Roboto',
        fontWeight: '400',
        lineHeight: 44,
        alignSelf:'center',
        height:44,
    },

    addButton:{
        width:210,
        alignSelf:'center',
        marginTop: 30,
        marginBottom: 30,
    },

})