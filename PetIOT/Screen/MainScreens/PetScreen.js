import React,{useState,useEffect} from 'react';
import {View,Text,StyleSheet,Alert,ScrollView,FlatList} from 'react-native';
import {Button, Appbar,Modal,Portal} from 'react-native-paper';
import PetCard from '../Components/Pet/PetCard';
import AddPetModal from '../Components/Pet/AddPetModal'; 
import petLoader from '../../HandlingFunctions/Pet/petLoader';

export default function PetScreen({navigation}){
    
    //ADD PET BOX
    const [addPetModalVisible,setAddPetModalVisible] = useState(false);
    const showAddPetModal = ()=> setAddPetModalVisible(true);
    const hideAddPetModal = ()=> setAddPetModalVisible(false);

    // PET LIST RENDERING
    const [petList,setPetList] = useState([]);

    useEffect(() => {

        const fetchData = async () =>{
            const data = await petLoader();
            setPetList(data);
        }

        fetchData();


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
                                petName = {pet.pet_id}
                                petStationName={pet.station_id}
                                petWeight={'5 kg'}
                                petStatus={'Normal'}
                                station_id={pet.station_id}
                                navigation={navigation}
                                key={pet.pet_id}
                                pet_id={pet.pet_id}
                                species={pet.species}
                                breed={pet.breed}
                                birth_year={pet.birth_year}
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